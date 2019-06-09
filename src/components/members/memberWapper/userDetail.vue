<template>
  <div class="userDetail">
    <div @click="Save()" class="makeSureBtn">
      {{language.save}}
    </div>

    <img v-if="user.head_img" class="bigHeader" :src="user.head_img" height="90" width="90"/>
    <img v-else class="bigHeader" src="../../../assets/member/header_3.png" height="90" width="90"/>

    <p  v-if="user.nickname" class="userName">
      {{user.nickname}}
    </p>
    <p  v-else class="userName">
      {{user.username}}
    </p>

    <div class="fromWrapper">
       <p class="title"> {{language.title}}</p>
       <div class="inputWrapper">
         <div class="label">{{language.User_name}}</div>
         <input
                 v-model="changeName"
                :placeholder="user.nickname"
                type="text">
       </div>
      <div class="inputWrapper">
        <div class="label"> {{language.Bound_phone}}</div>
        <input type="text"  :placeholder="user.username" disabled>
      </div>
     </div>

    <div class="fromWrapper">
      <p class="title">{{language_psw.title}}
      </p>
      <div class="inputWrapper">
        <div class="label">{{language_psw.Old_code}}</div>
        <input type="password" v-model="oldVal" :placeholder="language_psw.Old_code" />
      </div>
      <div class="inputWrapper">
        <div class="label">{{language_psw.New_code}}</div>
        <input type="password" v-model="newVal" :placeholder="language_psw.New_code" />
      </div>
      <div class="inputWrapper">
        <div class="label">{{language_psw.Confirm_password}}</div>
        <input type="password" v-model="makeSureVal" :placeholder="language_psw.Confirm_password" />
      </div>
    </div>


    <input style="display: none;"  accept="image/png,image/gif,image/jpeg,image/jpg" @change="changeHeaderICON"  type="file" id="changeHeader"/>
    <div class="upLoadHeader">
        <div  v-if="tHeader" class="upLoadBlock">
          <img class="BigImg" :src="tHeader" alt="">
          <div class="reSet">
            <label for="changeHeader">{{language_2.reSet}}</label>
            <label @click="tHeader = null">{{language_2.Cancel}}</label>
          </div>
        </div>
        <label v-else for="changeHeader" class="upLoadBlock">
          <img  src="../../../assets/member/addHeader.png" height="42" width="42"/>
          <p class="p1">{{language_2.title}}</p>
          <p class="p2">{{language_2.Select_photo}}</p>
        </label>
        <div class="showHeader">
          <img v-if="tHeader" :src="tHeader" height="68" width="68"/>
          <img v-else src="../../../assets/member/showHeader.png" height="68" width="68"/>
          <p>{{language_2.Profile_photo}}</p>
        </div>
    </div>


  </div>
</template>

<script>
  import axios from "axios";
  import qs from "qs";
  import gob from "../../../store/config.js";
  import ErrorObj from '../../../store/ErrorTips'
  import {
    Message,
  } from 'element-ui'
    export default {
        name: "about-me",
        data:function () {
          return{
            user:JSON.parse(localStorage.getItem('game_2_UserData')),
            changeName:null,
            tHeader:null,
            tHeaderUrl:null,
            oldVal:"",
            newVal:"",
            makeSureVal:"",
          }
        },
        computed:{
          language:function () {
            return this.$store.getters.getLanguage.personInfo
          },
          language_2:function () {
            return this.$store.getters.getLanguage.Switch_Head
          },
          language_psw:function () {
            return this.$store.getters.getLanguage.Change_password
          },
        },
        methods:{
          Save:function () {
            if(this.changeName){
                if(this.user.nickname != this.changeName){
                     this.vChangeName();
                }
            }
            if(this.tHeader){
              this.saveHeader();
            }

            if(this.oldVal || this.newVal || this.makeSureVal){
              this.reSetPsw()
            }

          },
          vChangeName:function () {
            let _this = this;
            let obj = {
              code:"nickname",
              svalue:this.changeName,
              userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
              token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
            }
            let newObj = gob.getSign(obj);
            axios.post(gob.apiUrl + '/api/member/userInfoModify',qs.stringify(newObj)).then(function (res) {
              if(res.data.re){
                var obj = JSON.parse(localStorage.getItem('game_2_UserData'));
                obj.nickname = _this.changeName,
                  localStorage.setItem('game_2_UserData',JSON.stringify(obj));
                  _this.user=JSON.parse(localStorage.getItem('game_2_UserData'));
                  _this.$store.commit('isUserDataChange')
                  Message({
                    message: ErrorObj.getErrorTipsObj().modified_successfully,
                    position: 'top',
                    type: 'success',
                    duration: 1000
                  });
              }
            });
          },
          changeHeaderICON:function (e) {
            let file = e.target.files[0];
            let param = new FormData();
            param.append('file', file, file.name);
            param.append('chunk', '0');
            let config = {
              headers: {'Content-Type': 'multipart/form-data'}
            };
            let _this = this;
            axios.post(gob.apiUrl + '/api/Member/updateImg', param, config).then(function (res) {
              _this.tHeader = gob.apiUrl + res.data.re.img;
              _this.tHeaderUrl = res.data.re.img;
            });
          },
          saveHeader:function () {
            let _this = this;
            let obj_2 = {
              code:"headimg",
              svalue:_this.tHeaderUrl,
              userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
              token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
            }
            let newObj = gob.getSign(obj_2);
            axios.post(gob.apiUrl + '/api/member/userInfoModify',qs.stringify(newObj)).then(function (res) {
              if(res.data.re){
                var obj = JSON.parse(localStorage.getItem('game_2_UserData'));
                obj.head_img = _this.tHeader;
                localStorage.setItem('game_2_UserData',JSON.stringify(obj));
                _this.user=JSON.parse(localStorage.getItem('game_2_UserData'));
                _this.$store.commit('isUserDataChange')
                Message({
                  message: ErrorObj.getErrorTipsObj().Modified_avatar_successfully,
                  position: 'top',
                  type: 'success',
                  duration: 1000
                });
                _this.tHeader = null;
                _this.tHeaderUrl = null;
              }else{
                Message({
                  message:  ErrorObj.getErrorTipsObj().Modified_avatar_failed,
                  position: 'top',
                  duration: 1000
                });
              }
            });
          },
          reSetPsw:function () {
            var _this = this;
            if(this.oldVal){
              if(this.newVal){
                if(this.makeSureVal){
                  if(this.newVal == this.makeSureVal){
                    this.ErrorTips = ""
                    let obj = {
                      userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
                      token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
                      password:_this.oldVal,
                      newpassword:_this.newVal,
                      confpassword:_this.makeSureVal
                    }
                    let newObj = gob.getSign(obj);
                    axios.post(gob.apiUrl + '/Api/Member/modifyPwd',qs.stringify(newObj)).then(function (res) {
                      if(res.data.re){
                        Message({
                          message:  ErrorObj.getErrorTipsObj().Password_changed_successfully,
                          position: 'top',
                          type: 'success',
                          duration: 1000
                        });
                        setTimeout(function () {
                          _this.$router.push({ name:'userDetail'});
                        },1000)
                      }else{
                        Message({
                          message: res.data.errorMsg,
                          position: 'top',
                          duration: 1000
                        });
                      }
                    });
                  }else{
                    Message({
                      message: this.language_psw.errorTips[3],
                      position: 'top',
                      duration: 1000
                    });
                  }
                }else {
                  Message({
                    message: this.language_psw.errorTips[2],
                    position: 'top',
                    duration: 1000
                  });
                }
              }else{
                Message({
                  message: this.language_psw.errorTips[1],
                  position: 'top',
                  duration: 1000
                });
              }
            }else{
              Message({
                message: this.language_psw.errorTips[0],
                position: 'top',
                duration: 1000
              });
            }
          }
        }
    }
</script>

<style lang="scss">
.userDetail{
  width:880px;
  height:700px;
  background:rgba(23,30,38,1);
  position: relative;
  .fromWrapper{
    margin-bottom: 48px;
    .title{
      font-size:16px;
      text-align: left;
      margin-bottom: 23px;
      padding-left: 55px;
      font-size:16px;
      margin-bottom: 32px;
    }
    .inputWrapper{
      height: 30px;
      margin-bottom: 24px;
      .label{
        padding-right: 20px;
        width: 150px;
        float: left;
        line-height: 30px;
        text-align: right;
      }
      input{
        width:250px;
        height:30px;
        background:rgba(43,51,60,1);
        border-radius:4px;
        outline: none;
        border: none;
        float: left;
        padding-left: 12px;
        color: #fff;
      }
    }
  }
  .upLoadHeader{
    width:366px;
    height:348px;
    background:rgba(43,51,60,1);
    border-radius:4px;
    position: absolute;
    top: 256px;
    right: 55px;
    padding: 24px;
    .upLoadBlock{
      width:226px;
      height:286px;
      background:rgba(23,30,38,1);
      float: left;
      display: block;
      margin-bottom: 16px;
      position: relative;
      .BigImg{
        margin: 0 auto !important;
        margin-top: 143px !important;
        transform: translateY(-50%);
        width: 158px;
        height: auto;
      }
      .reSet{
        width: 226px;
        height: 20px;
        margin-top: -10px;
        position: absolute;
        top: 300px;
        left: 0px;
        label{
          display: inline-block;
          float: left;
          font-size:14px;
          font-family:MicrosoftYaHei;
          color:rgba(26,121,255,1);
        }
        label:last-child{
          float: right;
        }
      }
      img{
        margin-top: 77px;
        margin-bottom: 24px;
      }
      p{
        text-align: center;
      }
      .p1{
        font-size:14px;
        margin-bottom: 26px;
      }
      .p2{
        font-size:12px;
        padding: 0 17px;
      }
    }
    .showHeader{
      float: right;
      img{
        width:68px;
        height:68px;
        border-radius: 50%;
      }
      p{
        text-align: center;
        margin-top: 14px;
        width: 68px;
      }
    }
  }
  .makeSureBtn{
    width:66px;
    height:36px;
    background:rgba(26,121,255,1);
    border-radius:4px;
    line-height: 36px;
    text-align: center;
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
  }
  .bigHeader{
    width:90px;
    height:90px;
    margin-top: 34px;
    margin-bottom: 24px;
    border-radius: 50%;
  }
  .userName{
    text-align: center;
    font-size: 16px;
    margin-bottom: 56px;
  }
}
</style>
