<template>
  <div v-if="language" class="LoginOrRegister">
    <div class="LoginOrRegisterWrapper">
      <img class="LoginBg" src="../../assets/Login/LoginBg.png"/>
      <div class="tabsWrapper">
         <div  v-bind:class="{ tabsHeightLight: nowPage == 'Login' }" class="tabsWrapperItem">
           <router-link tag="div" v-if="language.Login" :to="{name:'Login'}">{{language.Login.loginBtn}}</router-link>
         <div class="tabsWrapperItemBar"></div>
         </div>
         <div  v-bind:class="{ tabsHeightLight:  nowPage == 'register' }" class="tabsWrapperItem">
           <router-link tag="div" v-if="language.Login" :to="{name:'register'}">{{language.Login.registered}}</router-link>
         <div class="tabsWrapperItemBar"></div>
         </div>
       </div>
       <transition name="vux-pop-nor"  mode="out-in">
         <router-view/>
       </transition>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login-or-register",
       data() {
         return {
           activeName: 'first',
           nowPage:'Login'
         };
       },
       mounted:function () {
          this.nowPage =  this.$router.nowPage
       },
       watch:{
         $route(){
           this.nowPage =  this.$router.nowPage
         }
       },
       methods: {
         handleClick(tab, event) {
           // console.log(tab, event);
         }
       },
      computed:{
        language:function () {
          return this.$store.getters.getLanguage;
        },
      },
    }
</script>
<style lang="scss">

  @media screen and (min-width: 1700px) {
    .LoginOrRegisterWrapper{
      position: relative;
      .LoginBg{
        position: absolute;
        left: -1094px;
        top: -160px;
      }
    }
    .LoginOrRegister{
      width: 1272px;
    }
  }
  @media screen and (max-width: 1700px) {
    .LoginOrRegisterWrapper{
      position: relative;
      transform:scale(0.85, 0.85) translateY(-117px) !important;
      .LoginBg{
        position: absolute;
        left: -780px;
        top: -94px;
        width: 1300px;
      }
    }
    .LoginOrRegister{
      width: 900px;
    }
  }

  .LoginPageWrapper{
    width:400px;
    margin: 0 auto;
    padding-top: 111px;
    position: relative;

    .inputItem{
      width:400px;
      height:42px;
      background:rgba(43,51,60,1);
      border-radius:4px;
      opacity:0.499;
      margin: 0 auto;
      margin-bottom: 24px;
      text-align: left;
      line-height: 42px;
      position: relative;
      font-size: 14px;
      .errorTips{
        position: absolute;
        color: #1A79FF;
        top: -56px;
        left: 0px;
      }
      .inputItemArrow{
        float: right;
        margin-top: 12px;
        margin-right: 12px;
      }
      .getVcCode{
        float: right;
        margin-right: 12px;
      }
      img{
        float: left;
        margin: 9px 12px 0px 12px;
      }
      input{
        border: none;
        outline: none;
        height: 42px;
        width: 358px;
        float: left;
        background: transparent;
        color: #fff;
        font-size:14px;
      }
    }
    .forgetPassWord{
      font-size:14px;
      color:rgba(255,255,255,1);
      float: right;
    }
    .LoginInput{
      width:400px;
      height:42px;
      background:linear-gradient(360deg,rgba(26,121,255,1) 0%,rgba(156,196,251,1) 100%);
      border-radius:4px;
      opacity:0.5043;
      line-height: 42px;
      margin-top: 124px;
      outline: none;
      border: none;
      color: #fff;
      font-size: 16px;
      transition: 0.3;
      border-radius: 25px;
      cursor: pointer;
    }
    .LoginInput:hover{
      opacity: 1;
    }
    .isOk{
      opacity:1;
    }
  }
.LoginOrRegister{
  height: 650px;
  margin: 0 auto;
  padding-top: 156px;
  .LoginOrRegisterWrapper{
    width:500px;
    height:650px;
    background:rgba(23,30,38,1);
    float: right;
    .tabsWrapper{
      height: 84px;
      .tabsWrapperItem{
        width: 50%;
        float: left;
        height: 84px;
        font-size: 18px;
        line-height: 84px;
        position: relative;
        cursor: pointer;
        .tabsWrapperItemBar{
          width: 100%;
          height: 2px;
          background: transparent;
          position: absolute;
          bottom: 0px;
          left: 0px;
        }
      }
      .tabsHeightLight{
        .tabsWrapperItemBar{
          background: rgba(26,121,255,1);
        }
      }
    }
  }
}
</style>
