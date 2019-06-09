<template>
 <div class="withDraWalWapper">


   <el-dialog
     :title="language.identity"
     :visible.sync="dialogVisible"
     width="30%"
     :before-close="handleClose">
     <span>{{language.MakeSure}}</span>
     <el-input type="password" v-model="password" ></el-input>
     <el-button @click="GetMoney">{{language.Btn}}</el-button>
   </el-dialog>


 <div class="money">
   {{language.canGet}}：{{userDetial.balance}}USDT
   <div class="inputWrapper">
     <span>{{language.getTo}}</span>
     <input type="text" v-model="getTo" :placeholder="language.wallet_address">
   </div>
   <div class="inputWrapper">
     <span>{{language.getAcount}}</span>
     <input type="text" v-model="getAcount" :placeholder="language.minimum">
   </div>
   <p @click="getMoney" class="getMoney">{{language.getAll}}</p>
   <div @click="makeSureGetMoney" class="button">
     {{language.title}}
   </div>
 </div>
 </div>
</template>

<script>
  import {
    Message,
  } from 'element-ui'
  import ElInput from "element-ui/packages/input/src/input";
  import ElButton from "element-ui/packages/button/src/button";
  import axios from "axios";
  import qs from "qs";
  import gob from "../../../store/config.js";
  import ErrorObj from '../../../store/ErrorTips'
    export default {
      components: {
        ElButton,
        ElInput},
      name: "with-dra-wal",
        data:function () {
          return{
            getAcount:null,
            getTo:null,
            dialogVisible:false,
            password:null,
          }
        },
        methods:{
          handleClose:function () {
            this.dialogVisible = false;
          },
          getMoney:function () {
            this.getAcount = this.userDetial.balance;
          },
          GetMoney:function () {
            let _this = this;
            let obj = {
              userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
              token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
              address:_this.getTo,
              deposit:_this.getAcount,
              password:_this.password
            }
            let newObj = gob.getSign(obj);
            axios.post(gob.apiUrl + '/Api/Member/deposit',qs.stringify(newObj)).then(function (res) {
              if(res.data.re){
                 var obj = JSON.parse(localStorage.getItem('game_2_UserData'));
                obj.balance = res.data.re.balance;
                 _this.userDetial.balance = res.data.re.balance;
                 localStorage.setItem('game_2_UserData',JSON.stringify(obj));
                 _this.$store.commit('isUserDataChange');
                 _this.dialogVisible = false;
                 _this.password = null;
                  Message({
                    message:_this.language.Mention_money,
                    position: 'top',
                    type:"success",
                    duration: 1000
                  });
              }else{
                Message({
                  message:res.data.errorMsg,
                  position: 'top',
                  duration: 1000
                });
              }
            });
          },
          makeSureGetMoney:function () {
            if(this.getTo){
              if(this.getAcount){
                 if(this.getAcount<=this.userDetial.balance){
                   if(this.getAcount>=10){
                     this.dialogVisible = true;
                   }else{
                     Message({
                       message:this.language.errorTips[0],
                       position: 'top',
                       duration: 1000
                     });
                   }
                 }else{
                   Message({
                     message:this.language.errorTips[1],
                     position: 'top',
                     duration: 1000
                   });
                 }
              }else {
                Message({
                  message: this.language.errorTips[2],
                  position: 'top',
                  duration: 1000
                });
              }
            }else {
              Message({
                message:this.language.errorTips[3],
                position: 'top',
                duration: 1000
              });
            }
          }
        },
        computed:{
          language:function () {
            return this.$store.getters.getLanguage.Withdraw_record
          },
          userDetial:function () {
            return JSON.parse(localStorage.getItem('game_2_UserData'))
          },
        }
    }
</script>

<style lang="scss">
.withDraWalWapper{
  width:880px;
  height:700px;
  background:rgba(23,30,38,1);
  padding: 226px 214px 0px 214px;
  .el-dialog__body{
    padding: 0px;
  }
  .el-input{
    margin-top: 20px;
    width: 80%;
    margin-bottom: 20px;
  }
  .money{
    font-size:16px;
    text-align: left;
  }
  .inputWrapper{
    line-height: 30px;
    margin-top: 24px;
    input{
      width:400px;
      height:30px;
      background:rgba(43,51,60,1);
      outline: none;
      border: none;
      float: left;
      padding-left: 12px;
      color: #fff;
    }
    span{
      float: left;
      margin-right: 10px;
      font-size: 14px;
    }
  }
  .inputWrapper:after{
    display: block;
    height: 0px;
    clear: both;
    content: " ";
  }
  .getMoney{
    text-align: right;
    margin-top: 24px;
    font-size:13px;
    text-decoration: underline;
    cursor: pointer;
  }
  .button{
    width:300px;
    height:36px;
    background:linear-gradient(360deg,rgba(26,121,255,1) 0%,rgba(156,196,251,1) 100%);
    border-radius:25px;
    line-height: 36px;
    text-align: center;
    font-size:14px;
    margin: 0 auto;
    margin-top: 88px;
    cursor: pointer;
  }
}
</style>
