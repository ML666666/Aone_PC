
<template>
    <div class="forgetPassWordWapper">
      <img class="LOGO" src="../../assets/DAPP/LOGO.png" height="106" width="170"/>
      <div class="inputWrapper">
          <div class="inputWrapperTop">
            <div class="title">{{language.forgetPassWord.findPassWord}}</div>
            <span class="link">
              <router-link :to="{name:'Login'}">
                {{language.forgetPassWord.LoginRightNow}}
              </router-link>
            </span>
            <span class="splitLine">
            </span>
            <span class="link">
               <router-link tag="a" :to="{name:'information',query:{id:'BTC'}}">
                 {{language.forgetPassWord.retrunPage}}
               </router-link>
            </span>
          </div>
          <div class="inputContainer">
              <div class="input">
                <img src="../../assets/Login/lock.png" height="24" width="18"/>
                <input type="text" v-model="Phone"  :placeholder="language.forgetPassWord.phoneTips"/>
              </div>
              <div class="input">
                <img src="../../assets/Login/unlock.png" height="24" width="18"/>
                <input type="text" style="width: 198px"  v-model="VCode" :placeholder="language.forgetPassWord.verificationCode"/>
                <div  @click="getVCode" class="getCode">
                  <template v-if="isDisable">{{language.forgetPassWord.vCode}}</template>
                  <template v-if="!isDisable">{{timeTips}}</template>
                </div>
              </div>
          </div>
          <div v-model="isErrorShow"  class="errorTips">
            {{ErrorTis}}
          </div>
          <div @click="neexStep" class="button">
            {{language.forgetPassWord.nextStep}}
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
  import gob from "../../store/config.js";
    export default {
        name: "forget-pass-word",
      data:function () {
        return{
          Phone:"",
          VCode:"",
          isErrorShow:false,
          ErrorTis:"",
          timer:null,
          time:121,
          timeTips:"",
          isDisable:true,
          TVCode:""
        }
      },
      methods:{
        neexStep:function () {
          var res = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$/;
          if(this.Phone){
            if(res.test(this.Phone)){
              if(this.VCode){
                this.ErrorTis = ""
                if(this.VCode == this.TVCode){
                  var obj = {
                    Phone:this.Phone,
                    VCode:this.VCode
                  }
                  this.$store.commit('saveVcCode',obj);
                  this.$router.replace('reSetPassWord');
                }else{
                  Message({
                    message:  "验证码错误！" ,
                    position: 'top',
                    duration: 2000
                  });
                }
              }else{
                this.ErrorTis = this.language.forgetPassWord.errorTips[2]
              }
            }else{
              this.ErrorTis = this.language.forgetPassWord.errorTips[1]
            }
          }else{
            this.ErrorTis = this.language.forgetPassWord.errorTips[0]
          }
        },
        getVCode:function () {
          var res = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$/;
          if(this.time == 121) {
            if (this.Phone) {
              if (res.test(this.Phone)) {
                this.isDisable = false;
                this.ErrorTis = "";
                var obj = {
                  phone: this.Phone
                }
                clearInterval(this.timer);
                var _this = this;
                var newObj = gob.getSign(obj);
                axios.post(gob.apiUrl+'/Api/Member/sms',qs.stringify(newObj)).then(function (res) {
                  if(!res.data.errorCode){
                    _this.TVCode = res.data.re.code;
                    Message({
                      message:  "验证码已发送！" ,
                      position: 'top',
                      duration: 2000
                    });
                    _this.timer = setInterval(function () {
                      _this.time--;
                      _this.timeTips = _this.time +'s';
                      if(_this.time == 0){
                        _this.time == 121;
                        _this.isDisable = true;
                        clearInterval(_this.timer);
                      }
                    },1000);
                  }else{
                    Message({
                      message:  res.data.errorMsg ,
                      position: 'top',
                      duration: 2000
                    });
                    _this.isDisable = true;
                  }
                })
              } else {
                this.ErrorTis = this.language.forgetPassWord.errorTips[1]
              }
            } else {
              this.ErrorTis = this.language.forgetPassWord.errorTips[0]
            }
          }
        }
      },
      mounted:function () {
      },
      computed:{
        language:function () {
          return this.$store.getters.getLanguage;
        },
      }
    }
</script>

<style lang="scss">


  @media screen and (min-width: 1700px) {

  }
  @media screen and (max-width: 1700px) {
    .forgetPassWordWapper{
      transform:scale(0.85,0.85) !important;
    }
  }



.forgetPassWordWapper{
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
          font-size: 14px;
        }
      }
      .inputContainer{
         .input{
           width:400px;
           height:42px;
           background:rgba(43,51,60,0.5);
           border-radius:4px;
           margin: 0 auto;
           .getCode{
             float: right;
             display: inline-block;
             padding: 0 12px;
             line-height: 42px;
             font-size:12px;
             cursor: pointer;
           }
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
