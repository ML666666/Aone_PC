import { router } from '../router/index'
import crypto from 'crypto'
import {
  Message,
} from 'element-ui'
import ErrTipsObj from './ErrorTips'
const gob = {
  isOutLogin:function (res) {
    if(res.data.errorCode == '1040'){
      Message({
        message:  ErrTipsObj.getErrorTipsObj().login_timeout ,
        position: 'top',
        duration: 2000
      });
      setTimeout(function () {
        localStorage.removeItem("game_2_UserData");
        Indicator.close();
        router.replace("Login");
      },1000);
    }else if(res.data.errorCode == '1010'){
      Message({
        message:  ErrTipsObj.getErrorTipsObj().login_again,
        position: 'top',
        duration: 2000
      });
      setTimeout(function () {
        localStorage.removeItem("game_2_UserData");
        router.replace("Login");
      },1000);
    }else {
      return true;
    }
  },
  webUrl:"https://tc.senhet.com",
  apiUrl:"https://t9.senhet.com",
  changeObjkey:function (obj) {
    var newObj = {};
    for(var v in obj){
      newObj[obj[v]] = v+'='+obj[v];
    }
    return newObj;
  },
  setUserData:function (obj) {
    var newObj = {
      id:obj.id,
      username:obj.username,
      nickname:obj.nickname,
      sex:obj.sex,
      balance:obj.balance,
      frozen:obj.frozen,
      head_img:obj.head_img,
      PHPSESSID:obj.PHPSESSID,
      token:obj.token,
      commission_switch:obj.commission_switch
    }
    if(obj.head_img){
      newObj.head_img = this.apiUrl + obj.head_img;
    }
    localStorage.setItem('game_2_UserData',JSON.stringify(newObj));
   },
  getSign:function (paramsArray) {
    if(paramsArray){
      var date = Date.parse(new Date());
      var key = 'e67177848be328500f9930eb796b8b839c6c503a';
      var signString = null;
      var md5 = crypto.createHash("md5");
      var params = "";
      var sortArray = [];
      paramsArray['timestamp'] = date;
      for(var v in paramsArray){
        sortArray.push(v)
      }
      sortArray.sort();
      for(var i = 0; i<sortArray.length;i++){
        if(paramsArray[sortArray[i]]){
          params = params +sortArray[i]+'='+paramsArray[sortArray[i]]+'&'
        }
      }
      params  = params+ 'key='+key;
      var md5 = crypto.createHash("md5");
      md5.update(params);
      params = md5.digest('hex').toUpperCase();
      paramsArray['sign'] = params;
      return paramsArray;
    }else{

      var date = Date.parse(new Date());
      var key = 'e835fc40c9986439f9a0afbf085b6660d5ee5ea4';
      var signString = ('timestamp='+date+'&key='+ key);
      var md5 = crypto.createHash("md5");
      md5.update(signString);
      signString = md5.digest('hex').toUpperCase();
      var params = {
        sign : signString,
        timestamp : date
      }
      return params;
    }
  }
}
export default gob

