import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import qs from "qs"
import gob from "../store/config"
import ErrorTips from "../store/ErrorTips"


import information from  '@/components/information/information'


import marketWrapper from  '@/components/market/marketWrapper'
import InterpretationDetail from '@/components/market/marketComponents/InterpretationDetail'

import trading from  '@/components/trading/trading'
import BTC from  '@/components/trading/gamePage/BTC'
import ETH from  '@/components/trading/gamePage/ETH'
import LTC from  '@/components/trading/gamePage/LTC'


import education from '@/components/education/education'
import ArticleDetail from '@/components/education/eduComponent/ArticleDetail'
import VideoArticle from '@/components/education/eduComponent/VideoArticle'


import LoginOrRegister from '@/components/LoginOrRegister/LoginOrRegister'
import Login  from '@/components/LoginOrRegister/loginComponents/LoginPage'
import register  from '@/components/LoginOrRegister/loginComponents/Register'
import forgetPassWord from '@/components/LoginOrRegister/forgetPassWord'
import reSetPassWord from '@/components/LoginOrRegister/reSetPassWord'


import DAPP from '@/components/DAPP/DAPP'

import members from '@/components/members/members'
import userDetail from '@/components/members/memberWapper/userDetail'
import myPromotion from '@/components/members/memberWapper/myPromotion'
import TopUp from '@/components/members/memberWapper/TopUp'
import withDraWal from '@/components/members/memberWapper/withDraWal'
import OrderList from '@/components/members/memberWapper/OrderList'
import topUpList from '@/components/members/memberWapper/topUpList'
import withDrawalList from '@/components/members/memberWapper/withDrawalList'


import {
  Message,
} from 'element-ui'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: information,
      meta:{
        public:true,
        indexlevel:0,
        isBlack:true,
      },
      beforeEnter: (to, from, next) => {
        next('/information/infoDetail');
      }
     },
    {
      path: '/members',
      name: 'members',
      component: members,
      meta:{
        public:false,
        isBlack:true
      },
      children: [
        {
          path: '/members/userDetail',
          name: 'userDetail',
          component: userDetail,
          meta:{
            public:false,
            isBlack:true
          },
         },
        {
          path: '/members/myPromotion',
          name: 'myPromotion',
          component: myPromotion,
          meta:{
            public:false,
            isBlack:true
          },
        },
        {
          path: '/members/TopUp',
          name: 'TopUp',
          component: TopUp,
          meta:{
            public:false,
            isBlack:true
          },
        },
        {
          path: '/members/withDraWal',
          name: 'withDraWal',
          component: withDraWal,
          meta:{
            public:false,
            isBlack:true
          },
        },
        {
          path: '/members/OrderList',
          name: 'OrderList',
          component: OrderList,
          meta:{
            public:false,
            isBlack:true
          },
        },
        {
          path: '/members/topUpList',
          name: 'topUpList',
          component: topUpList,
          meta:{
            public:false,
            isBlack:true
          },
        },
        {
          path: '/members/withDrawalList',
          name: 'withDrawalList',
          component: withDrawalList,
          meta:{
            public:false,
            isBlack:true
          },
        },
      ]
    },
    {
      path: '/AppQRcode',
      name: 'DAPP',
      component: DAPP,
      meta:{
        public:true,
        indexlevel:0,
        isBlack:true
      },
    },
    {
      path: '/information/infoDetail',
      name: 'information',
      component: information,
      meta:{
        public:true,
        indexlevel:0,
        isBlack:true
      },
    },
    {
      path: '/market',
      name: 'market',
      component: marketWrapper,
      meta:{
        public:true,
        indexlevel:1,
        isBlack:true
      },
    },
    {
      path: '/market/InterpretationDetail',
      name: 'InterpretationDetail',
      component: InterpretationDetail,
      meta:{
        public:true,
        isBlack:true
      },
    },
    {
      path: '/education',
      name: 'education',
      component: education,
      meta:{
        public:true,
        indexlevel:3,
        isBlack:true
      },
    },
    {
      path: '/education/educationDetail',
      name: 'educationDetail',
      component: ArticleDetail,
      meta:{
        public:true,
        isBlack:true
      },
    },
    {
      path: '/education/eduVideoDetail',
      name: 'eduVideoDetail',
      component: VideoArticle,
      meta:{
        public:true,
        isBlack:true
      },
    },

    {
      path: '/LoginOrRegister',
      name: 'LoginOrRegister',
      component: LoginOrRegister,
      meta:{
        public:true,
      },
      children: [
        {
          path: '/Login',
          name: 'Login',
          component: Login,
          meta:{
            public:true,
          },
        },
        {
          path: '/register',
          name: 'register',
          component: register,
          meta:{
            public:true,
          },
        },
      ]
    },
    {
      path: '/forgetPassWord',
      name: 'forgetPassWord',
      component: forgetPassWord,
      meta:{
        public:true,
      },
    },
    {
      path: '/reSetPassWord',
      name: 'reSetPassWord',
      component: reSetPassWord,
      meta:{
        public:true,
      },
      beforeEnter: (to, from, next) => {
        if(from.name == null){
          next('/forgetPassWord');
        }else{
          next();
        }
      }
    },


    {
      path: '/trading',
      name: 'trading',
      component: trading,
      meta:{
        public:true,
        indexlevel:2,
        isBlack:true
      },
      children: [
        {
          path: '/trading/BTC',
          name: 'BTC',
          component: BTC,
          meta:{
            public:true,
            indexlevel_2:0,
            indexlevel:2,
            isBlack:true
          },
          beforeEnter: (to, from, next) => {
            localStorage.setItem('RF_Page',to.name);
             next();
          }
        },
        {
          path: '/trading/ETH',
          name: 'ETH',
          component: ETH,
          meta:{
            public:true,
            indexlevel_2:1,
            indexlevel:2,
            isBlack:true
          },
          beforeEnter: (to, from, next) => {
            localStorage.setItem('RF_Page',to.name);
            next();
          }
        },
        {
          path: '/trading/LTC',
          name: 'LTC',
          component: LTC,
          meta:{
            public:true,
            indexlevel_2:3,
            indexlevel:2,
            isBlack:true
          },
          beforeEnter: (to, from, next) => {
            localStorage.setItem('RF_Page',to.name);
            next();
          }
        },
      ]
    },
  ]
})
router.isBack = false;
router.goBack = function () {
  this.isBack = true;
  this.go(-1);
}

router.isBottomShow = true;
router.beforeEach((to, from, next) => {
  router.nowPage = to.name;
   // if(to.name == 'members' || to.name == 'trading' || to.name == 'market' || to.name == 'education' || to.name == 'information'){
  if(to.meta.isBlack){
     if(to.name == 'trading' ){
       next("/trading/BTC");
     }
     router.isBottomShow = true;
   }else{
     router.isBottomShow = false;
   }
  if(localStorage.getItem('game_2_UserData')){
     if(to.meta.public){
       next();
     }else{
       let obj = {
         userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
         token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
       }
       let newObj = gob.getSign(obj);
       axios.post(gob.apiUrl + '/Api/Member/userInfo',qs.stringify(newObj)).then(function (res) {
         if(res.data.re){
           var obj  = JSON.parse(localStorage.getItem("game_2_UserData"));
           obj.balance = res.data.re.balance;
           localStorage.setItem('game_2_UserData',JSON.stringify(obj))
         }
         if(res.data.errorCode == '1040'){
           Message({
             message: ErrorTips.getErrorTipsObj().login_timeout,
             position: 'top',
             duration: 2000
           });
           setTimeout(function () {
             localStorage.removeItem("game_2_UserData");
             // Indicator.close();
             router.replace("Login");
           },1000);
         }else if(res.data.errorCode == '1010'){
           Message({
             message:  ErrorTips.getErrorTipsObj().login_timeout.login_again,
             position: 'top',
             duration: 2000
           });
           setTimeout(function () {
             localStorage.removeItem("game_2_UserData");
             // Indicator.close();
             router.replace("Login");
           },1000);
         }else{
           next();
         }
       })
     }
  }else{
     if(to.meta.public){
       next();
     }else{
       if(from.meta.public){
         Message({
           message: ErrorTips.getErrorTipsObj().Not_logged_in,
           position: 'top',
           duration: 2000
         });
         next('/Login');

       }else{
         Message({
           message: ErrorTips.getErrorTipsObj().Not_logged_in,
           position: 'top',
           duration: 2000
         });
         next('/Login');
       }
     }
  }

});

export {
  router
}
