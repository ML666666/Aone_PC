<template>
    <div class="reSetPassWordWrapper">
      <img class="LOGO" src="../../assets/DAPP/LOGO.png" height="106" width="170"/>
      <div class="inputWrapper">
        <div class="inputWrapperTop">
          <div class="title">{{language.reSetPassWord.findPassWord}}</div>
          <span class="link">
              <router-link :to="{name:'Login'}">
                {{language.reSetPassWord.LoginRightNow}}
              </router-link>
            </span>
          <span class="splitLine">
            </span>
          <span class="link">
               <router-link tag="a" :to="{name:'information',query:{id:'BTC'}}">
                  {{language.reSetPassWord.retrunPage}}
               </router-link>
            </span>
        </div>
        <div class="inputContainer">
          <div class="input">
            <input type="password" v-model="passWord"  :placeholder="language.reSetPassWord.newPassWord"/>
          </div>
          <div class="input">
            <input type="password" v-model="makeSurePassWord"  :placeholder="language.reSetPassWord.makeSurePassWord"/>
          </div>
        </div>
        <div class="errorTips">
          <template  v-show="isShowErrorTips">
            {{ErrorTips}}
          </template>
        </div>
        <div @click="ForgetPassWord"  class="button">
          {{language.reSetPassWord.makeSurePassWordBtn}}
        </div>
      </div>
    </div>
</template>

<script>
  import axios from "axios";
  import qs from "qs";
  import {
    Message,
  } from 'element-ui'
  import gob from "../../store/config.js";
    export default {
        name: "re-set-pass-word",
      data:function () {
        return{
          passWord:"",
          makeSurePassWord:"",
          isShowErrorTips:false,
          ErrorTips:""
        }
      },
      mounted:function () {
      },
      computed:{
        language:function () {
          return this.$store.getters.getLanguage;
        },
      },
      methods:{
        ForgetPassWord:function () {
          if(this.passWord){
            if(this.makeSurePassWord){
              if(this.makeSurePassWord == this.passWord){
                this.isShowErrorTips = false;
                var obj = {
                  phone:this.$store.getters.getVCodeObj.Phone,
                  validate:this.$store.getters.getVCodeObj.VCode,
                  newpassword:this.passWord
                }
                var newObj = gob.getSign(obj);
                axios.post(gob.apiUrl+'/Api/Member/forgetPwd',qs.stringify(newObj)).then(function (res) {
                  if(!res.data.errorCode){
                    var _this = this;
                    Message({
                      message:  "修改密码成功！" ,
                      position: 'top',
                      duration: 2000
                    });
                    _this.$router.replace('Login');
                  }else{
                    Message({
                      message:  res.data.errorMsg ,
                      position: 'top',
                      duration: 2000
                    });
                  }
                });
              }else{
                this.isShowErrorTips = true;
                this.ErrorTips = this.language.reSetPassWord.errorTips[2];
              }
            }else{
              this.isShowErrorTips = true;
              this.ErrorTips = this.language.reSetPassWord.errorTips[1];
            }
          }else{
            this.isShowErrorTips = true;
            this.ErrorTips = this.language.reSetPassWord.errorTips[0]
          }
        }
      }
    }
</script>

<style lang="scss">

  @media screen and (min-width: 1700px) {

  }
  @media screen and (max-width: 1700px) {
    .reSetPassWordWrapper{
      transform:scale(0.85,0.85) !important;
    }
  }


.reSetPassWordWrapper{
  .LOGO{
    width:128px;
    height:80px;
    margin-top: 100px;
    margin-bottom: 112px;
  }
  .inputWrapper{
    width:1200px;
    height:498px;
    background:rgba(23,30,38,1);
    margin: 0 auto;
    .inputWrapperTop{
      width:1200px;
      height:86px;
      background:rgba(43,51,60,0.5);
      border-radius:4px;
      text-align: center;
      line-height: 86px;
      font-size:20px;
      padding: 43px 30px 0px 30px;
      position: relative;
      .title{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
      span{
        *{
          color: RGBA(26, 121, 255, 1) !important;
        }
        display: inline-block;
        float: right;
        font-size:16px;
        transform: translateY(-50%);
      }
      .splitLine{
        width:2px;
        height:16px;
        background: rgba(255,255,255,0.7);
        margin: 0 20px;
      }
    }
    .inputContainer{
      .input{
        width:400px;
        height:42px;
        background:rgba(43,51,60,0.5);
        border-radius:4px;
        margin: 0 auto;
        color: #fff;
        img{
          display: inline-block;
          float: left;
          margin-top: 9px;
          margin-left: 9px;
        }
        input{
          width:370px;
          height:42px;
          outline: none;
          border: none;
          padding-left: 12px;
          background: transparent;
          float: left;
          color: #fff;
        }
      }
      .input:first-child{
        margin-top: 108px;
        margin-bottom: 24px;
      }
    }
    .errorTips{
      text-align: left;
      margin: 0 auto;
      height:16px;
      font-size:12px;
      width:400px;
      margin-top: 12px;
      margin-bottom: 44px;
    }
    .button{
      width:400px;
      height:42px;
      background:linear-gradient(360deg,rgba(26,121,255,1) 0%,rgba(156,196,251,1) 100%);
      border-radius: 25px;
      opacity:0.5043;
      cursor: pointer;
      margin: 0 auto;
      transition: 0.3s;
      line-height: 42px;
    }
    .button:hover{
      opacity:1;
    }
  }
}
</style>
