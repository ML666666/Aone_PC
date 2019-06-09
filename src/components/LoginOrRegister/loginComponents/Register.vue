<template>
  <div class="LoginPageWrapper">
    <div class="inputItem">
      <div v-show="errorTipsShow" class="errorTips">
        {{errorTips}}
      </div>
      <img src="../../../assets/Login/phone.png" height="24" width="18"/>
      <input type="text" v-model="phone" :placeholder="language.registered.phoneTips">
    </div>
    <div class="inputItem">
      <img src="../../../assets/Login/lock.png" height="24" width="18"/>
      <input type="password"  v-model="password"  :placeholder="language.registered.passWordTips">
    </div>
    <div class="inputItem">
      <img src="../../../assets/Login/unlock.png" height="24" width="18"/>
      <input type="password" v-model="makeSurePassword" :placeholder="language.registered.MakeSurePassWord">
    </div>
    <!--<div class="inputItem">-->
      <!--<img src="../../../assets/Login/A.png" height="24" width="18"/>-->
      <!--<input  style="width: 160px" type="password">-->
      <!--<span class="getVcCode">请输入验证码</span>-->
    <!--</div>-->
    <div class="forgetPassWord">
      <router-link :to="{name:'forgetPassWord'}">
        {{language.Login.Forgot}}?
      </router-link>
    </div>
    <input type="button" @click="register()" :class="{'isOk': isAble}" :value="language.registered.registered" class="LoginInput">
    </input>
  </div>
</template>

<script>
    export default {
        name: "register",
        mounted:function () {
          if(this.$route.query.code){
            this.code= this.$route.query.code;
          }else{
            this.code= "";
          }
        },
       data:function () {
        return{
          errorTipsShow:false,
          phone:"",
          password:"",
          makeSurePassword:"",
          errorTips:"",
          YZM:"",
          code:"",
          isAble:false
        }
       },
      computed:{
        isChinese:function () {
          return this.$store.getters.getLanguageType
        },
        language:function () {
          return this.$store.getters.getLanguage;
        },
      },
      methods:{
        register:function () {
          this.isAble = false;
          var res = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$/;
          if(this.phone){
            if(res.test(this.phone)){
              this.errorTipsShow = false;
              if(this.password){
                this.errorTipsShow = false;
                if(this.makeSurePassword){
                  this.errorTipsShow = false;
                  if(this.makeSurePassword == this.password){
                    this.errorTipsShow = false;
                    var obj = {
                      username:this.phone,
                      password:this.password,
                      code:this.code
                    }
                    this.isAble = true;
                    this.$store.dispatch('actionRegistered',obj);
                  }else{
                    this.errorTipsShow = true;
                    this.errorTips = this.language.registered.errorTips[0]
                  }
                }else{
                  this.errorTipsShow = true;
                  this.errorTips = this.language.registered.errorTips[1]
                }
              }else{
                this.errorTipsShow = true;
                this.errorTips = this.language.registered.errorTips[2]
              }
            }else{
              this.errorTipsShow = true;
              this.errorTips = this.language.registered.errorTips[3]
            }
          }else{
            this.errorTipsShow = true;
            this.errorTips = this.language.registered.errorTips[4]
          }
        }
      }
    }
</script>

<style scoped>

</style>
