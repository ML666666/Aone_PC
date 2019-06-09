import { router } from '../router/index'
import axios from 'axios'
import gob from './config'
import qs from 'qs'
import {
  Message,
} from 'element-ui'
import ErrTipsObj from  './ErrorTips'
const state = {
    VCodeObj:null
}

const getters = {
   getVCodeObj:state => state.VCodeObj,
}

const mutations = {
  mutationForgetPassWord:async ({ dispatch, commit, getters }, data) => {
    var newObj = gob.getSign(data);
    axios.post(gob.apiUrl+'/Api/Member/forgetPwd',qs.stringify(newObj)).then(function (res) {
      if(!res.data.errorCode){
      }else{
        MessageBox.alert(res.data.errorMsg).then(action => {
        })
      }
    })
  },
  saveVcCode:async ({ dispatch, commit, getters }, data) => {
        state.VCodeObj = data;
  },
   mutationLogin:async ({ dispatch, commit, getters }, data) => {
      console.log(Message)
      var newObj = gob.getSign(data);
      axios.post(gob.apiUrl+'/Api/Member/login',qs.stringify(newObj)).then(function (res) {
        if(!res.data.errorCode){
          Message({
            showClose: false,
            message:ErrTipsObj.getErrorTipsObj().L_succsee,
            type: 'success'
          });
          gob.setUserData(res.data.re);
          router.replace({ name: 'information'});
        }else{
          //res.data.errorCode == 1005 无效手机号
          //res.data.errorCode == 1007 密码错误
          if(res.data.errorCode == 1005){
           Message({
              showClose: false,
              message:ErrTipsObj.getErrorTipsObj().Invalid_phone_number,
              type: 'error'
            });
          }
          if(res.data.errorCode == 1007){
            Message({
              showClose: false,
              message:ErrTipsObj.getErrorTipsObj().Password_mistake,
              type: 'error'
            });
          }
        }
      })
   },
  mutationRegistered:async ({ dispatch, commit, getters }, data) => {
    var newObj = gob.getSign(data);
    axios.post(gob.apiUrl+'/Api/Member/register',qs.stringify(newObj)).then(function (res) {
      if(!res.data.errorCode){
        gob.setUserData(res.data.re);
        Message({
          showClose: false,
          message:ErrTipsObj.getErrorTipsObj().R_succsee,
          type: 'success'
        });
        router.push({ name: 'trading'});
      }else{
        //res.data.errorCode == 1015 密码有误
        //res.data.errorCode == 1006 手机号已经存在
        if(res.data.errorCode == 1015){
          Message({
            showClose: false,
            message:ErrTipsObj.getErrorTipsObj().The_password_is_wrong,
            type: 'error'
          });
        }
        if(res.data.errorCode == 1006){
          Message({
            showClose: false,
            message:ErrTipsObj.getErrorTipsObj().number_already_exists,
            type: 'error'
          });
        }
      }
    })
  }
}

const actions = {
   actionLogin(context,data){
     this.commit('mutationLogin',data);
   },
   actionRegistered(context,data){
     this.commit('mutationRegistered',data);
   },
}
export default {
  state,
  getters,
  mutations,
  actions
}
