<template>
<div class="TopUpWapper">
   <div class="title">
     {{language.select}}:
   </div>
    <div class="url">
       {{message}}
    </div>
    <div
      v-clipboard:copy="message"
      v-clipboard:success="onCopy"
      class="copy">
      {{language.Copy}}
    </div>
    <div class="button">
      {{language.to}}
    </div>
</div>
</template>

<script>
  import axios from "axios";
  import qs from "qs";
  import gob from "../../../store/config.js";
  import gobObj from  "../../../store/gobObj";
  import ErrorObj from '../../../store/ErrorTips'
  import {
    Message,
  } from 'element-ui'

    export default {
        name: "top-up",
        computed:{
          language:function () {
              return this.$store.getters.getLanguage.Deposit_record
          },
        },
      mounted: function () {

        var g_obj = new gobObj("https://tc.senhet.com","https://t9.senhet.com");

        function fn() {
          return "Hello World";
        }

       $('.button').html( `foo ${fn()} bar`);


        let _this = this;
        let obj = {
          userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
          token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
        }
        let newObj = gob.getSign(obj);
        axios.post(gob.apiUrl + '/Api/Member/address',qs.stringify(newObj)).then(function (res) {
          _this.message = res.data.re.address;
        });

      },
      methods:{
        onCopy: async function () {
          Message({
            message: ErrorObj.getErrorTipsObj().Copy_success,
            position: 'top',
            type: 'success',
            duration: 1000,
          });
        },
      },
      data:function () {
        return{
          message:"0x80ec815158d93fc46aa11526a102206a4aa7e87"
        }
      }
    }
</script>

<style lang="scss">
.TopUpWapper{
  width:880px;
  height:700px;
  background:rgba(23,30,38,1);
  padding: 224px 224px 0px 224px;
  .title{
    text-align: left;
    margin-bottom: 23px;
  }
  .url{
    font-size:14px;
    color:rgba(26,121,255,1);
    text-align: right;
  }
  .copy{
    font-size:14px;
    text-align: right;
    margin-top: 24px;
    margin-bottom: 163px;
    text-decoration: underline;
    cursor: pointer;
  }
  .button{
    width:240px;
    height:36px;
    background:linear-gradient(360deg,rgba(26,121,255,1) 0%,rgba(156,196,251,1) 100%);
    border-radius:25px;
    line-height: 36px;
    text-align: center;
    margin: 0 auto;
    cursor: pointer;
    font-size:14px;
    cursor: pointer;
  }
}
</style>
