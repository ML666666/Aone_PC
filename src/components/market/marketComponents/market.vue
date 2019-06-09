
<template>
    <div class="marketWrapper">
      <tips>
        快讯
      </tips>
     <template v-if="list.length>0">
       <vue-scroll>
         <div class="newsItemWrapper">

           <template v-for="item in list">
             <div class="newItem">
               <div class="TimeOrShare">
                 <div class="Time">
                   {{item.cdate | time}}
                 </div>
                 <div style="display: none" class="Share">
                 </div>
               </div>
               <div class="newTitle">
                 {{item.big_title}}
               </div>
               <div class="newContent">
                 {{item.small_title}}
               </div>
               <div class="isLikeWrapper">
                 <template v-if="item.islike == 0">
                   <span @click="like(item,1)" class="isLike"><img src="../../../assets/info/DOWN.png" height="42" width="42"/>{{language.bullish}}&nbsp{{item.like}}</span>
                   <span @click="like(item,-1)" class="isLike"><img src="../../../assets/info/UP.png" height="42" width="42"/>{{language.bearish}}&nbsp{{item.notlike}}</span>
                 </template>
                 <template v-else>
                   <span @click="like(item,1)" class="isLike"><img style="margin-right: 2px" v-if="item.islike == 1" src="../../../assets/info/HDOWN.png" height="42" width="42"/><img v-else src="../../../assets/info/DOWN.png" height="42" width="42"/>{{language.bullish}}&nbsp{{item.like}}</span>
                   <span @click="like(item,-1)" class="isLike"><img style="margin-right: 2px" v-if="item.islike == -1" src="../../../assets/info/HUP.png" height="42" width="42"/><img v-else src="../../../assets/info/UP.png" height="42" width="42"/>{{language.bearish}}&nbsp{{item.notlike}}</span>
                 </template>
               </div>
             </div>
           </template>

         </div>
       </vue-scroll>
     </template>
     <template v-else>
       <Nothing></Nothing>
     </template>
    </div>
</template>

<script>
  import  tips from '../../AppCommon/tips'
  import {
    Message,
  } from 'element-ui'
  import { router } from '../../../router/index.js'
  import axios from "axios";
  import qs from "qs";
  import gob from "../../../store/config.js";
  import ErrorTips from "../../../store/ErrorTips";
  import Nothing from '../../AppCommon/Nothing_2'
  let timer = null;
    export default {
        name: "market",
       components:{
         tips,
         Nothing
       },
       beforeDestroy:function () {
         clearInterval(timer);
       },
       mounted:function () {
         var _this = this;
         this.getData(0);
         timer = setInterval(function () {
           var barHeight =  ($('.__bar-is-vertical').css('height'));
           var scorllTop =  ($('.__bar-is-vertical').css('transform'));
           var viewHeight = parseInt($('.marketWrapper').height());
           scorllTop = scorllTop.substring(scorllTop.lastIndexOf(',')+1,scorllTop.lastIndexOf(")"));
           if((parseInt(scorllTop)+parseInt(barHeight)+viewHeight/20)>viewHeight){
             _this.getMore();
           }
         },500);
       },
       computed:{
         language:function () {
           return this.$store.getters.getLanguage.information;
         },
         getLanguageType:function () {
           return this.$store.getters.getLanguageType;
         },
       },
      watch:{
        getLanguageType:function (val) {
          this.list = [];
          this.getData(1);
        }
       },
       filters:{
         time:function (value) {
           return  value.substring(value.indexOf(" "),value.lastIndexOf(":"))
         }
       },
      methods:{
        cancelLike (item,index) {
          var _this = this;
          let obj = {
            userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
            token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
            like:0,
            newsid:item.id,
          }
          let newObj = gob.getSign(obj);
          axios.post(gob.apiUrl + '/Api/News/like',qs.stringify(newObj)).then(function (res) {
            if(res.data.re){
              for(var i = 0; i<_this.list.length; i++){
                if(_this.list[i].id == item.id){
                  _this.list[i].islike = 0;
                  if(index == 1){
                    _this.list[i].like--
                  }else{
                    _this.list[i].notlike--
                  }
                }
              }
            }
          })
        },
        like(item,index){
          var _this = this;
          if(localStorage.getItem('game_2_UserData')){
            if(item.islike){
              if(item.islike == 1){
                if(index == 1){
                  this.cancelLike(item,index);
                }
              }else{
                if(index == -1){
                  this.cancelLike(item,index);
                }
              }
            }else{
              let obj = {
                userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
                token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
                like:index,
                newsid:item.id,
              }
              let newObj = gob.getSign(obj);
              axios.post(gob.apiUrl + '/Api/News/like',qs.stringify(newObj)).then(function (res) {
                if(gob.isOutLogin(res)){
                  if(res.data.re){
                    for(var i = 0; i<_this.list.length; i++){
                      if(_this.list[i].id == item.id){
                        _this.list[i].islike = index;
                        if(index == 1){
                          _this.list[i].like++
                        }else{
                          _this.list[i].notlike++
                        }
                      }
                    }
                  }
                }

              })
            }
          }else {
            Message({
              message: ErrorTips.getErrorTipsObj().Not_logged_in,
              type: 'success'
            });
            setTimeout(function () {
              router.replace("Login");
            }, 1000);
          }
        },
        getMore(){
          this.nWindowHight = $(window).height();
          this.nScrollTop = $(document).scrollTop();
          var _this = this;
          // console.log(parseInt(this.nBodyHight + this.nScrollTop)+"/"+ parseInt($("body").height()) +"/"+this.nScrollTop)
          if(parseInt(this.nBodyHight + this.nScrollTop)+1 > parseInt($("body").height())){
            _this.getData(0);
          }
        },
        getData(index) {
          var _this = this;
          var obj = null;
          if(localStorage.getItem('game_2_UserData')){
            if(index){
              obj = {
                page:1,
                size:10,
                userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
                token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
                language:localStorage.getItem('language')
              }
            }else{
              obj = {
                page:_this.page,
                size:10,
                userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
                token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
                language:localStorage.getItem('language')
              }
            }
          }else{
            if(index){
              obj = {
                page:1,
                size:10,
              }
            }else{
              obj = {
                page:_this.page,
                size:10,
              }
            }
          }
          if(!this.isLoading){
            var newObj = gob.getSign(obj);
            axios.post(gob.apiUrl+'/Api/News/news',qs.stringify(newObj)).then(function (res) {
              $('.infoCanvasMask').fadeOut();
              if(index){
                _this.list = []
              }
              for(var i = 0; i< res.data.re.length; i++){
                if(index){
                  _this.list.push(res.data.re[i])
                }else{
                  _this.list.push(res.data.re[i]);
                }
              }
            });
            _this.page++;
            this.isFrist = false;
          }
        }
      },
      data:function () {
        return{
          allLoaded:false,
          page:1,
          isFrist:true,
          list:[],
          size:60,
          isLoading:false,
          nWindowHight:0,
          nScrollTop:0,
          nBodyHight:$(window).height()
        }
      },

    }
</script>

<style lang="scss">
  @media screen and (min-width: 1700px) {
    .marketWrapper{
      width: 624px;
    }
  }
  @media screen and (max-width: 1700px) {
    .marketWrapper{
      width: 600px;
      transform:scale(0.9,0.9) !important;
    }
  }
.marketWrapper{
  width: 624px;
  height: 772px;
  background:rgba(23,30,38,1);
  margin: 0 auto;
  position: relative;
  float: left;
  *{
    text-align: left;
  }
  .newItem{
    padding: 20px 24px;
    border-bottom: 1px solid rgba(255,255,255,0.217);
    .TimeOrShare{
      height: 24px;
      padding-top: 12px;
      .Time{
        background: url("../../../assets/info/time.png") no-repeat center center;
        width: 65px;
        background-size: 65px;
        height: 24px;
        float: left;
        transform: translateY(-50%);
        padding-left: 20px;
        font-size:14px;
        line-height: 24px;
      }
      .Share{
        background: url("../../../assets/info/share.png") no-repeat center center;
        width: 18px;
        background-size: 18px;
        height: 20px;
        float: right;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }
    .newTitle{
      height:21px;
      font-size:16px;
      line-height:21px;
      margin-top: 20px;
      margin-bottom: 20px;
      transform: translateX(-6px);
    }
    .newContent{
      font-size:14px;
      line-height:20px;
    }
    .isLikeWrapper{
      margin-top: 18px;
      float: right;
      height:24px;
      span{
        height:24px;
        border-radius:12px;
        border:1px solid rgba(255,255,255,0.2);
        padding: 0px 2px;
        cursor: pointer;
        img{
          width: 14px;
          height: 14px;
          line-height:16px;
          transform: translateY(2px);
        }
        font-size:12px;
        line-height:16px;
      }
      span:first-child{
        margin-right: 18px;
      }
    }
  }
  .newItem:first-child{
    margin-top: 18px;
  }
  .newItem:last-child{
    margin-bottom: 18px;
    border-bottom: none;
  }
  .newItem:after{
    display: block;
    clear: both;
    content: " ";
    height: 0px;
  }
}
</style>
