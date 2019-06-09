<template>
    <div v-if="language" class="gameDetailTading">
       <div class="setHandWrapper">
         <a class="setHandItem" @click="setHand(2)" v-bind:class=" {'setHandItemActive':hand == 2}">2{{language.hands}}</a>
         <a class="setHandItem" @click="setHand(20)" v-bind:class="{'setHandItemActive':hand == 20}">20{{language.hands}}</a>
         <a class="setHandItem" @click="setHand(50)" v-bind:class="{'setHandItemActive':hand == 50}">50{{language.hands}}</a>
         <a class="setHandItem" @click="sliderHand = !sliderHand" v-bind:class="{'setHandItemActive':hand > 50}">
           <template v-if="hand <= 50">{{language.Customize}}</template>
           <template v-else>{{hand}}</template>
         </a>
       </div>
      <transition name="vux-pop-nor"  mode="out-in">
       <div v-show="sliderHand || hand>50" class="sliderWrapper">
         <el-slider
           v-model="sliderValue"
           :step="2"
           :min="52"
           :max="1000"
           tooltip-class="toolTips"
           @change="setHand(sliderValue)"
         ></el-slider>
       </div>
      </transition>

      <div class="BtnWrapper">
        <div class="Btn BtnUp" @click="MakeSureShow(1)">
          {{language.Confirm_buy}}
        </div>
        <div class="Btn BtnDown" @click="MakeSureShow(2)">
          {{language.Confirm_sell}}
        </div>

        <div class="tradingMask_1" @click="MakeSureHide()">
           <div class="tradingBlock">
              <div class="tradingTop">
                {{language.Confirm_transaction}}
                <img @click="MakeSureHide()" src="../../../../assets/info/close.png" height="30" width="30"/>
              </div>
              <div class="tradingWrapperBody">
                <div class="tradingItem">
                  <span>{{language.Buy_and_sell}}</span>
                  <span v-if="isUp">{{language.Buy}}</span>
                  <span v-else>{{language.Sell}}</span>
                </div>
                <div class="tradingItem">
                  <span>{{language.Number_of_hands}}</span>
                  <span>{{hand}}{{language.hands}}</span>
                </div>
                <div class="tradingItem">
                  <span>1{{language.hands}}=1USDT</span>
                  <span></span>
                </div>
                <div class="tradingItem">
                  <span>{{language.Transaction_amount}}</span>
                  <span>{{SumOfUsdt}}USDT</span>
                </div>
              </div>
              <div v-if="isUp" @click="MakeSureHide(1)" class="tradingBtn">
                {{language.Confirm_buy}}
              </div>
              <div v-else @click="MakeSureHide(2)" class="tradingBtn">
                {{language.Confirm_sell}}
              </div>
           </div>
        </div>

        <div class="winPage isWin">
          <div class="isWinPageWrapper">
            <img class="isWinPage" src="../../../../assets/trading/WIN.png"/>
            <img class="closeBtn" @click="closePage()" src="../../../../assets/info/close.png" height="30" width="30"/>
          </div>
         </div>
        <div class="losePage isWin">
          <div class="isWinPageWrapper">
            <img class="isWinPage"  src="../../../../assets/trading/LOSE.png"/>
            <img class="closeBtn" @click="closePage()" src="../../../../assets/info/close.png" height="30" width="30"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {
    Message,
  } from 'element-ui'
  import axios from "axios";
  import qs from "qs";
  import gob from "../../../../store/config.js"
  import ErrTipsObj from  '../../../../store/ErrorTips.js'
    export default {
        name: "game-detail-tading",
        mounted:function () {
        },
        data(){
          return{
            hand:0,
            sliderValue:8,
            sliderHand:false,
            SumOfUsdt:0,
            isUp:true,
            timer:null,
            time:0,
          }
        },
        computed:{
          language:function () {
            if(this.$store.getters.getLanguage)
              return this.$store.getters.getLanguage.MainPahe;
          },
          getGameTips:function () {
            return this.$store.getters.getGameTips
          },
          getIsGaming:function () {
            return this.$store.getters.getIsGaming
          },
          getRound:function () {
            return this.$store.getters.getRound
          },
          isWin:function () {
            return this.$store.getters.getIsWin
          },
        },
       watch:{
         isWin:function(val,oldval){
           if(val == 1){
             $('.winPage').fadeIn();
             var _this = this;
             clearInterval(this.timer);
             this.timer = setInterval(function () {
               _this.time++;
               if(_this.time == 5){
                 clearInterval(_this.timer);
                 $('.winPage').fadeOut();
               }
             },1000);
           }else if(val == 2){
             $('.losePage').fadeIn();
             var _this = this;
             clearInterval(this.timer);
             this.timer = setInterval(function () {
               _this.time++;
               if(_this.time == 5){
                 clearInterval(_this.timer);
                 $('.losePage').fadeOut();
               }
             },1000);
           }else{
             $('.losePage').fadeOut();
             $('.winPage').fadeOut();
           }
         },
         hand:function (val,oldval){
           if(localStorage.getItem('game_2_UserData')){
             var obj = {
               userid: JSON.parse(localStorage.getItem('game_2_UserData')).id,
               token: JSON.parse(localStorage.getItem('game_2_UserData')).token,
               buy_count: this.hand
             }
             var _this = this;
             var newObj = gob.getSign(obj);
             axios.post(gob.apiUrl+'/Api/Trade/orderQuery',qs.stringify(newObj)).then(function (res) {
               if(gob.isOutLogin(res)){
                 _this.SumOfUsdt = res.data.re;
               }
             });
           }else{
             var _this = this;
             setTimeout(function () {
               _this.$router.push({ name: 'Login'});
             },800)
             Message({
               showClose: false,
               message:ErrTipsObj.getErrorTipsObj().Not_logged_in,
               type: 'success'
             });
           }
         }
       },
        methods:{
          closePage:function () {
             $('.isWin').fadeOut();
          },
          setHand:function(hand){
              this.hand = hand;
                this.sliderHand = false;
          },
          MakeSureShow:function (isUp) {
            if(localStorage.getItem('game_2_UserData')) {
              if(this.hand == 0){
                this.hand = 2;
              }
              if(this.getIsGaming){
                Message({
                  showClose: false,
                  message:this.getGameTips+','+ErrTipsObj.getErrorTipsObj().No_orders_for_the_time_being,
                  type: 'success'
                });
              }else{
                $('.tradingMask_1').fadeIn();
                if(isUp == 1){
                  this.isUp = true;
                }else{
                  this.isUp = false;
                }
              }
            }else{
              var _this = this;
              setTimeout(function () {
                _this.$router.push({ name: 'Login'});
              },800)
              Message({
                showClose: false,
                message:ErrTipsObj.getErrorTipsObj().Not_logged_in ,
                type: 'success'
              });
            }
          },
          MakeSureHide:function (isUp) {
            //$('html').css('overflow','scroll');
            if(isUp){
              if(this.getIsGaming){
                Message({
                  showClose: false,
                  message:this.getGameTips+','+ErrTipsObj.getErrorTipsObj().No_orders_for_the_time_being,
                  type: 'success'
                });
              }else{
                var obj = {
                  userid:JSON.parse(localStorage.getItem("game_2_UserData")).id,
                  number:this.getRound,
                  token:JSON.parse(localStorage.getItem("game_2_UserData")).token,
                  users:JSON.parse(localStorage.getItem("game_2_UserData")).id,
                  buy_product_name:this.$router.nowPage,
                  buy_direct:1,
                  buy_count:this.hand
                }
                if(isUp == "1"){
                  obj.buy_direct = 1;
                  this.$store.dispatch('actionTrade',obj);
                }else if(isUp == "2"){
                  obj.buy_direct = -1;
                  this.$store.dispatch('actionTrade',obj);
                }
                $('.tradingMask_1').fadeOut();
              }
            }else {
              $('.tradingMask_1').fadeOut();
            }
          },
        }
    }
</script>

<style lang="scss">

  @media screen and (min-width: 1700px) {
    .tradingBlock{
      top: 210px;
    }
  }
  @media screen and (max-width: 1700px) {
    .tradingBlock{
      transform:scale(0.85,1) !important;
      top: 110px;
    }
  }


.gameDetailTading{
  .isWin{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background:rgba(8,8,8,0.8);
    z-index: 4000;
    display: none;
    .isWinPageWrapper{
      width: 706px;
      margin: 0 auto;
      margin-top:120px;
      position: relative;
      .closeBtn{
        position: absolute;
        top: 0px;
        right: 0px;
        cursor: pointer;
      }
      .isWinPage{
        width: 706px;
        height: auto;
      }
    }
  }
  .setHandWrapper{
    margin-top: 61px;
    height:40px;
    .setHandItem{
       cursor: pointer;
       display: inline-block;
       float: left;
       width:80px;
       height:40px;
       border-radius:20px;
       border:1px solid rgba(255,255,255,0.8);
       margin-right: 57px;
       line-height: 40px;
       font-size: 14px;
       transition: 0.3s;
       a{
         cursor: pointer;
       }
     }
    .setHandItem:first-child{
      margin-left: 91px;
    }
    .setHandItemActive{
      border:1px solid RGBA(26, 121, 255, 1);
    }
    .setHandItem:hover{
      border:1px solid RGBA(26, 121, 255, 1);
    }
  }
  .sliderWrapper{
    width: 492px;
    margin: 0 auto;
    margin-top: 31px;
    .el-tooltip__popper{
      transform: translate(180deg);
    }
  }
  .BtnWrapper{
    width: 488px;
    height: 42px;
    margin: 0 auto;
    margin-top: 51px;
    .tradingMask_1{
      background: rgba(08,08,08,0.8);
      display: none;
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 4000;
      .tradingBlock{
        position: absolute;
        left: 50%;
        margin-left: -250px;
        width:500px;
        height:660px;
        background: RGBA(23, 30, 38, 1);
        .tradingTop{
          height:74px;
          background:rgba(43,51,60,1);
          font-size:16px;
          line-height: 74px;
          position: relative;
          img{
            position: absolute;
            right: 22px;
            top: 21px;
            width: 30px;
          }
        }
        .tradingItem{
          height: 71px;
          padding: 0px 60px;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          span{
            display: inline-block;
            height: 71px;
            line-height: 71px;
            float: left;
            font-size:16px;
          }
          span:last-child{
            float: right;
          }
        }
        .tradingItem:last-child{
          border-bottom: 1px solid rgba(255,255,255,0);
        }
        .tradingBtn{
          margin: 0 auto;
          margin-top: 199px;
          width:200px;
          height:42px;
          background:linear-gradient(90deg,rgba(121,173,245,1) 0%,rgba(26,121,255,1) 100%);
          border-radius:21px;
          line-height: 42px;
          font-size:16px;
        }
      }
    }
    .Btn{
      width:200px;
      height:42px;
      background:linear-gradient(90deg,rgba(121,173,245,0.5) 0%,rgba(26,121,255,0.5) 100%);
      border-radius:21px;
      display: inline-block;
      float: left;
      text-align: center;
      line-height: 42px;
      transition: 0.4s;
      font-size: 16px;
      cursor: pointer;
    }
    .Btn:hover{
      background:linear-gradient(90deg,rgba(121,173,245,1) 0%,rgba(26,121,255,1) 100%);
    }
    .Btn:first-child{
      margin-right: 88px;
    }
  }
}
</style>
