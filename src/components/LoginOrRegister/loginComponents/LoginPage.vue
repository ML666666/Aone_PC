<template>
  <div class="LoginPageWrapper">
    <div class="inputItem">
      <div v-show="errorTipsShow" class="errorTips">
        {{errorTips}}
      </div>
      <img src="../../../assets/Login/phone.png" height="24" width="18"/>
      <input type="text" v-model="userName" :placeholder="language.Login.phoneTips" />
    </div>
    <div class="inputItem">
      <img src="../../../assets/Login/lock.png" height="24" width="18"/>
      <input   type="password" v-model="passWord" :placeholder="language.Login.passWordTips" />
    </div>
    <div class="inputItem" @click="showLanguage()">
      <img src="../../../assets/Login/A.png" height="24" width="18"/>
      <template v-if="getLanguageType == 'chinese'">简体中文</template>
      <template v-if="getLanguageType == 'English'">EN</template>
      <template v-if="getLanguageType == 'upChinese'">繁體中文</template>
      <template v-if="getLanguageType == 'Japanese'">日本语</template>
      <img class="inputItemArrow" src="../../../assets/Login/arrow.png" height="18" width="10"/>
    </div>
    <div class="forgetPassWord">
      <router-link :to="{name:'forgetPassWord'}">
        {{language.Login.Forgot}}?
      </router-link>
    </div>
    <input  @click="Login()" type="button" :class="{'isOk': isAble}" :value="language.Login.loginBtn" class="LoginInput">
    </input>
  </div>
</template>

<script>
    import changeLanguage from '../../AppCommon/changeLanguageBlock'
    export default {
      name: "login-page",
      components:{
        changeLanguage
      },
      data:function () {
        return{
          isShow:false,
          LanguageType:0,
          userName:"",
          passWord:"",
          errorTips:"",
          errorTipsShow:false,
          isAble:false,
          isChangeLanguage:false
        }
      },
      computed:{
        language:function () {
          return this.$store.getters.getLanguage;
        },
        isChinese:function () {
          return this.$store.getters.getLanguageType
        },
        getLanguageType:function () {
          return this.$store.getters.getLanguageType;
        }
      },
      methods:{
        showLanguage:function () {
          $('.tradingMask').fadeIn();//改组件在APP.VUE引入
        },
        Login:function () {
          this.isAble = false;
          var res = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$/;
          if(this.userName){
            this.errorTipsShow = false;
            if(res.test(this.userName)) {
              this.errorTipsShow = false;
              if (this.passWord) {
                this.errorTipsShow = false;
                var obj = {
                  username: this.userName,
                  password: this.passWord
                }
                this.isAble = true;
                this.$store.dispatch('actionLogin', obj);
              } else {
                this.errorTipsShow = true;
                this.errorTips = this.language.Login.errorTips[2];
              }
            }else{
              this.errorTipsShow = true;
              this.errorTips = this.language.Login.errorTips[1];
            }
          }else{
            this.errorTipsShow = true;
            this.errorTips = this.language.Login.errorTips[0];
          }
        },
        hideChangeLanguageBlock:function (data) {
          this.isShow = data;
        },
        show:function () {
          $('.tradingMask').show()
        }
      }
    }
</script>

<style lang="scss">

</style>
