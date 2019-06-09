<template>
    <div v-if="language_members" class="TopBarWrapper">

      <div v-if="toGetEduStep" class="aboutAoneMask">
        <step_1 v-if="toGetEduStep == 1"></step_1>
        <step_2 v-if="toGetEduStep == 2"></step_2>
        <step_3 v-if="toGetEduStep == 3"></step_3>
        <step_4 v-if="toGetEduStep == 4"></step_4>
        <step_5 v-if="toGetEduStep == 5"></step_5>
        <step_6 v-if="toGetEduStep == 6"></step_6>
        <step_7 v-if="toGetEduStep == 7"></step_7>
        <step_8 v-if="toGetEduStep == 8"></step_8>
      </div>

     <div class="TopBarContainer">
      <div class="TopBar">

        <span class="left TopBarItem">
           <router-link tag="a" :to="{name:'information',query:{id:'BTC'}}">
             <img src="../../assets/AppCommon/logo.png" height="40" width="64"/>
           </router-link>
        </span>

        <span style="margin-right: 0px;" class="TopBarItem" id="toMembers">
           <!--<router-link tag="a" :to="{name:'userDetail'}">-->
              <div v-if="user" v-bind:class="{ 'hideBg': user.head_img }"  class="header isLOGING">
                 <router-link tag="a" :to="{name:'userDetail'}">
                 <img v-if="user.head_img" :src="user.head_img"/>
                 </router-link>
                <div class="toMembersWapper">
                  <div style="cursor: text" class="toMembersWapperItem">
                    <div> {{language_members.MemberCenter.assets}}</div>
                    <div>{{user.balance}}USDT</div>
                  </div>
                  <router-link :to="{name:'userDetail'}">
                  <div class="toMembersWapperItem">
                    {{language_members.MemberCenter.PersonalInformation.title}}
                  </div>
                  </router-link>
                  <router-link :to="{name:'myPromotion'}">
                  <div class="toMembersWapperItem">
                     {{language_members.MemberCenter.MyPromotion.title}}
                  </div>
                  </router-link>
                  <router-link :to="{name:'TopUp'}">
                  <div class="toMembersWapperItem">
                     {{language_members.MemberCenter.ChargeMoney}}
                  </div>
                  </router-link>
                  <router-link :to="{name:'withDraWal'}">
                  <div class="toMembersWapperItem">
                     {{language_members.MemberCenter.TakeOutTheMoney}}
                  </div>
                  </router-link>
                  <router-link :to="{name:'OrderList'}">
                  <div class="toMembersWapperItem">
                     {{language_members.MemberCenter.TheOrderList.title}}
                  </div>
                  </router-link>
                  <router-link :to="{name:'topUpList'}">
                  <div class="toMembersWapperItem">
                     {{language_members.MemberCenter.rechargeRecord.title}}
                  </div>
                  </router-link>
                  <router-link :to="{name:'withDrawalList'}">
                  <div class="toMembersWapperItem">
                     {{language_members.MemberCenter.TakenOutRecord.title}}
                  </div>
                  </router-link>
                  <div  @click="OutLogin()" style="color: #F6626B" class="toMembersWapperItem">
                    {{language_members_2.Log_out}}
                  </div>
                </div>
              </div>
             <template  v-else>
              <router-link tag="a" :to="{name:'userDetail'}">
                  <div class="header isLOGING">
                  </div>
              </router-link>
             </template>

          <!--</router-link>-->
        </span>

        <span  class="TopBarItem" id="toGetApp">
          <router-link tag="a" :to="{name:'DAPP'}">
           {{language.appBar.gerApp}}
          </router-link>
        </span>

        <span  @click="aboutMe"  class="TopBarItem">
         {{language.appBar.Operation_guide}}
        </span>

        <span  class="TopBarItem" id="changeLanguage">
          <template v-if="getLanguageType == 'chinese'">简体中文</template>
          <template v-if="getLanguageType == 'English'">EN</template>
          <template v-if="getLanguageType == 'upChinese'">繁體中文</template>
          <template v-if="getLanguageType == 'Japanese'">日本语</template>
          <div class="TopSubBlock">
            <div v-bind:class="{ 'active': getLanguageType == 'English' }"  class="TopSubBlockItem" @click="setLanguage(1)">
              EN
              <div class="radiusWrapper">
              </div>
            </div>
            <div v-bind:class="{ 'active': getLanguageType == 'chinese' }"  class="TopSubBlockItem" @click="setLanguage(0)">
              简体中文
              <div class="radiusWrapper">
              </div>
            </div>
            <div  v-bind:class="{ 'active': getLanguageType == 'upChinese' }"  class="TopSubBlockItem" @click="setLanguage(2)">
              繁体中文
              <div class="radiusWrapper">
              </div>
            </div>
            <div  v-bind:class="{ 'active': getLanguageType == 'Japanese' }"  class="TopSubBlockItem" @click="setLanguage(3)">
              日本语
              <div class="radiusWrapper">
              </div>
            </div>
          </div>
        </span>

        <span v-if="!user"  class="TopBarItem">
           <router-link tag="div" :to="{name:'Login'}">
            {{language.appBar.Login_Register}}
           </router-link>
        </span>
      </div>
     </div>
    </div>
</template>

<script>
  import {
    confirm
  } from 'element-ui'
    import ErrTipsObj from '../../store/ErrorTips'
    import  step_1 from '../eduMask/step_1'
    import  step_2 from '../eduMask/step_2'
    import  step_3 from '../eduMask/step_3'
    import  step_4 from '../eduMask/step_4'
    import  step_5 from '../eduMask/step_5'
    import  step_6 from '../eduMask/step_6'
    import  step_7 from '../eduMask/step_7'
    import  step_8 from '../eduMask/step_8'
    export default {
        name: "app-top-bar",
        components:{
          step_1,
          step_2,
          step_3,
          step_4,
          step_5,
          step_6,
          step_7,
          step_8
        },
        data(){
          return{
            activeIndex2:1,
            subBarShow:false,
            LanguageType:localStorage.getItem('languageIndex'),
            user:JSON.parse(localStorage.getItem('game_2_UserData'))
          }
        },
        watch:{
         isUserDataChange:function (val,oldval) {
           this.user=JSON.parse(localStorage.getItem('game_2_UserData'))
         },
         toGetEduStep:function (val,oldval) {
            if(val == 1){
                this.$router.push({name:'information',query:{id:'BTC'}})
            }

            if(val == 3){
                this.$router.push({name:'DAPP'});
            }

            if(val == 4){
                // this.$router.push({name:'userDetail'});
            }

            if(val == 5){
              // education
              this.$router.push({name:'education'});
            }

            if(val == 6){
              this.$router.push({name:'market'});
            }

            if(val == 7){
              this.$router.push({name:'BTC'});
            }

         }
        },
        computed:{
          toGetEduStep:function () {
            return this.$store.getters.getEduStep
          },
          getLanguageType:function () {
            return this.$store.getters.getLanguageType;
          },
          userDetial:function () {
            return JSON.parse(localStorage.getItem('game_2_UserData'))
          },
          language:function () {
            return this.$store.getters.getLanguage;
          },
          language_members:function () {
            return this.$store.getters.getLanguage
          },
          language_members_2:function () {
            return this.$store.getters.getLanguage.personInfo
          },
          isUserDataChange:function () {
            return this.$store.getters.isUserDataChange
          }
        },
        mounted:function(){


          this.LanguageType = index;
          var index  = localStorage.getItem('languageIndex');
          $('.TopSubBlockItem').removeClass('active');
          $('.TopSubBlockItem').eq(index).addClass('active');
          if(JSON.parse(localStorage.getItem('game_2_UserData'))){
            this.user = JSON.parse(localStorage.getItem('game_2_UserData'))
          }else{
          }

          if(!localStorage.getItem('isFristToAOne')){
            this.$store.commit('aboutAone');
            localStorage.setItem('isFristToAOne','1')
          }

        },
        methods:{
          aboutMe:function () {
            this.$store.commit('aboutAone');
          },
          setLanguage:function (index) {
            this.LanguageType = index;
            this.$store.dispatch('actionsSetLanguage',this.LanguageType)
          },
          OutLogin:function () {
            this.$confirm(ErrTipsObj.getErrorTipsObj().Is_LoinOut, ErrTipsObj.getErrorTipsObj().Tips, {
              confirmButtonText: ErrTipsObj.getErrorTipsObj().Yes,
              cancelButtonText: ErrTipsObj.getErrorTipsObj().No,
              type: 'warning'
            }).then(() => {
              localStorage.removeItem("game_2_UserData");
              this.$router.push({ name:'Login'});
              this.$message({
                type: 'info',
                message: ErrTipsObj.getErrorTipsObj().LoginOut_Successfully
              });
            }).catch(() => {
            });
          },
          subBarShowFun:function () {
            if(localStorage.getItem('game_2_UserData')){
              this.subBarShow = !this.subBarShow
            }else{
              var _this = this;
              setTimeout(function () {
                _this.$router.push({'name':'Login'});
              },1000)
              this.$message({
                showClose: false,
                message:ErrTipsObj.errorTipObj.Not_logged_in,
                type: 'error'
              });
            }
          }
        }
    }
</script>

<style lang="scss">
  @media screen and (min-width: 1700px) {
    .TopBarWrapper{
      margin-bottom: 60px;
    }
    .TopBar{
      width: 1566px;
      margin: 0 auto;
      margin-left: -783px;
      margin-bottom: 28px;
    }
  }

  @media screen and (max-width: 1700px) {
    .TopBarWrapper{
      margin-bottom: 80px;
    }
    .TopBar{
      width: 1280px;
      margin: 0 auto;
      transform:scale(0.85,0.85) !important;
      margin-left: -640px;
    }
  }

.TopBarWrapper{
  width: 100%;
  background:rgba(23,30,38,1);
  height: 60px;
  *{
    transition: 0.2s;
  }
  @font-face
  {
    font-family: HYShiGuangTiW;
    src: url('../../assets/HYShiGuangTiW.ttf')  format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  .aboutAoneMask{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background:rgba(8,8,8,0.7);
    z-index: 8000;
  }
  .TopBarContainer{
    width: 100%;
    background:rgba(23,30,38,1);
    height: 60px;
    position: fixed;
    top: 0px;
    z-index: 1000;
  }
  .TopBar{
    height: 60px;
    line-height: 60px;
    padding: 0px 40px 0px 40px;
    position: fixed;
    top: 0px;
    left: 50%;
    z-index: 3000;
    background: #171e26;
    .TopSubBlock:after{
      clear:both;content:'';display:block;width:0;height:0;visibility:hidden;
    }
    #changeLanguage:hover{
      .TopSubBlock{
        display: block;
      }
    }
    #changeLanguage{
      position: relative;
      .TopSubBlock{
        position: absolute;
        width:218px;
        background:#171E26;
        padding-top: 24px;
        padding-bottom: 24px;
        height: 190px;
        top: 60px;
        left: 50%;
        z-index: 200;
        transform: translateX(-50%);
        display: none;
        .active{
          .radiusWrapper{
            background: url("../../assets/AppCommon/Hradius.png") no-repeat center center !important;
            background-size: 14px !important;
          }
        }
        .TopSubBlockItem{
          width: 100%;
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          margin-bottom: 21px;
          text-align: left;
          padding-left: 24px;
          color: #fff;
          position: relative;
          .radiusWrapper{
            position: absolute;
            width: 14px;
            height: 14px;
            border-radius: 50px;
            top:10px;
            right: 24px;
            transform: translateY(-50%);
            background: url("../../assets/AppCommon/radius.png") no-repeat center center;
            background-size: 14px;
          }
        }
        .TopSubBlockItem:hover{
          color: RGBA(26, 121, 255, 1);
        }
        .TopSubBlockItem:last-child{
          margin-bottom: 0px;
        }
      }
    }
    #toMembers{
      .toMembersWapper{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width:214px;
        padding: 24px 0px 0px 0px;
        background:rgba(23,30,38,1);
        top: 60px;
        height: auto;
        z-index: 200;
        display: none;
        .toMembersWapperItem{
          text-align: left;
          height:19px;
          font-size:14px !important;
          font-family:MicrosoftYaHei;
          color:rgba(255,255,255,1);
          line-height:19px;
          margin-bottom: 24px;
          width: 100%;
          padding-left: 24px;
          padding-right: 24px;
          cursor: pointer;
          div:first-child{
            float: left;
          }
          div:last-child{
            float: right;
          }
        }
        .toMembersWapperItem:first-child:hover{
          color:rgba(255,255,255,1);
        }
        a{
          .toMembersWapperItem:hover{
            color: RGBA(26, 121, 255, 1) !important;
          }
        }
      }
      .toMembersWapper:after{
        clear: both;
        height: 0px;
        content: " ";
        display: block;
      }
    }
    #toMembers:hover{
      .toMembersWapper{
        display: block;
      }
    }

    .TopBarItem{
      display: inline-block;
      float: right;
      margin-right: 100px;
      position: relative;
      cursor: pointer;
      height: 60px;
      font-size: 16px;
      .header{
        margin: 0 auto;
        width:40px;
        height:40px;
        margin-top: 10px;
        background: url("../../assets/AppCommon/header_1.png") no-repeat center center;
        img{
          width:40px;
          height:40px;
          border-radius: 50%;
        }
      }
      .hideBg{
        background: transparent !important;
      }
      .isLOGING:hover{
        background: url("../../assets/AppCommon/header_2.png") no-repeat center center;
      }
    }
    .left{
      float: left;
      margin-right: 0px;
      img{
        width:64px;
        height:40px;
        margin-top: 10px;
      }
    }
    .TopBarItem{
      min-width: 72px;
    }
    .TopBarItem:hover{
       color: RGBA(26, 121, 255, 1);
    }
  }
}

</style>
