import axios from 'axios';
//import { Toast } from 'mint-ui';
import { router } from '../router/index'
import gob from "./config";
import qs from "qs";
import ErrorTips from "./ErrorTips";
import {
  Message,
} from 'element-ui'


const state = {
		Echartdata:[],
    Echartdate:[],
    gameData:null,
    timer:null,
    statu:{
      Beting:false,
      Gaming:false,
      Wait:false
    },
    time:null,
    gameTips:"",
    Round:"",
    history:[],
    isWaiting:false,
    isFrist:true,
    isGaming:false,
    waitIngData:[],
    handSum:0,
    winningPercent:{
		  up:50,
      down:50
    },
    transactionList:[],
    isWin:3,
    balance:null,
}

const getters = {
   getEchartdata:state=>state.Echartdata,
   getEchartdate:state=>state.Echartdate,
   getGameData:state=>state.gameData,
   getTime:state=>parseInt(state.time),
   getGameTips:state=>state.gameTips,
   getRound:state=>state.Round,
   getIsGaming:state=>state.isGaming,
   getHandSum:state=>state.handSum,
   getWinningPercent:state=>state.winningPercent,
   getTransactionList:state=>state.transactionList,
   getIsWin:state=>state.isWin,
   getBalance:state=>state.balance,
   getHistory:state=>state.history,
}

const mutations = {
    isWinGame:async ({ dispatch, commit, getters }, data) => {
    },
    TransactionList:async ({ dispatch, commit, getters }, data) => {
      var data = {
        number:state.Round,
        buy_product_name:router.nowPage
      }
      var newObj = gob.getSign(data);
      axios.post(gob.apiUrl+'/Api/Trade/tradeList',qs.stringify(newObj)).then(function (res) {
        state.transactionList = res.data.re
      })
    },
    winningPercentage:async ({ dispatch, commit, getters }, data) => {
      var data = {
        number:state.Round,
        buy_product_name:router.nowPage
      }
      var newObj = gob.getSign(data);
      axios.post(gob.apiUrl+'/Api/Trade/tradePercent',qs.stringify(newObj)).then(function (res) {
        if(res.data.re.percent) {
          if (res.data.re.percent.up == 0 && res.data.re.percent.down == 0) {
            state. winningPercent = {
              up:50,
              down:50
            }
          } else {
            state.winningPercent = res.data.re.percent;
            state. winningPercent.up = res.data.re.percent.up;
            state. winningPercent.down = res.data.re.percent.down;
          }
        }
      })
    },
   sethandSum:async ({ dispatch, commit, getters }, data) => {
     if(localStorage.getItem('handSum')){
       state.handSum = parseInt(localStorage.getItem('handSum'));
     }else{
       state.handSum = 0;
     }
   },
   getTrade:async ({ dispatch, commit, getters }, data) => {
     var newObj = gob.getSign(data);
     axios.post(gob.apiUrl+'/Api/Trade/trade',qs.stringify(newObj)).then(function (res) {
       if(gob.isOutLogin(res)) {
         if (res.data.status == "200") {
           if (res.data.re) {
             if(router.nowPage == "BTC" || router.nowPage == "ETH" || router.nowPage == "LTC"){
               state.handSum += newObj.buy_count;
               localStorage.setItem('handSum', state.handSum);
               Message({
                 showClose: false,
                 message:ErrorTips.getErrorTipsObj().order_successfully,
               });
               let obj_2 = {
                 userid:JSON.parse(localStorage.getItem('game_2_UserData')).id,
                 token:JSON.parse(localStorage.getItem('game_2_UserData')).token,
               }
               let newObj_2 = gob.getSign(obj_2);
               axios.post(gob.apiUrl + '/Api/Member/userInfo',qs.stringify(newObj_2)).then(function (res) {
                 if(res.data.re){
                   var obj  = JSON.parse(localStorage.getItem("game_2_UserData"));
                   obj.balance = res.data.re.balance;
                   state.balance =  res.data.re.balance;
                   localStorage.setItem('game_2_UserData',JSON.stringify(obj))
                 }
               });
             }
           }
         } else {
           Message({
             showClose: false,
             message: res.data.errorMsg,
           });
         }
       }
     })
   },
   getEchartData:async ({ dispatch, commit, getters }, data) => {
     state.history=[];
     let ws = new WebSocket('wss://t9.senhet.com:8890');
     ws.onopen = () => {
       ws.send(data.status)
     }
     ws.onmessage = evt => {
      var data = JSON.parse(evt.data);
       for(var i=0; i<data.length; i++){
              state.history.push(data[i]);
       }
     }
     ws.onclose = function () {
     }
     router.afterEach(function () {
       ws.close()
     })

   },
  getGameStatus:async ({ dispatch, commit, getters }, data) => {
    state.Echartdata=[];
    state.isWaiting=false;
    state.gameData=null;
    state.time=0;
    clearInterval(state.timer);
    var dataType = data.status;
    function filerData(data) {
      switch(dataType){
        case "last_data HTbtccny":
          if(data.msg.symbol == "HTbtccny"){
            state.Echartdata.push(data.msg.curprice);
          }
        break;
        case "last_data HTethcny":
          if(data.msg.symbol == "HTethcny"){
            state.Echartdata.push(data.msg.curprice);
          }
          break;
        case "last_data HTltccny":
          if(data.msg.symbol == "HTltccny"){
            state.Echartdata.push(data.msg.curprice);
          }
          break;
      }
    }
    let ws = new WebSocket('wss://t9.senhet.com:8890');
    ws.onmessage = e => {
      if(typeof(e.data)!=undefined) {
        data = JSON.parse(e.data);
        if(state.isFrist){
          if(data.Round){
            if(data.Beting){
              $('.CanvasMask').delay(400).fadeOut();
              state.isGaming = false;
              state.gameTips = ErrorTips.getErrorTipsObj().In_the_order;
               if(30-data.ttl){
                 var time =state.history.length-1-(30-data.ttl);
                 for(time;time<state.history.length-1;time++){
                   state.Echartdata.push(state.history[time]);
                 }
               }
            }else if(data.Gaming){
              $('.CanvasMask').delay(400).fadeOut();
              state.isGaming = true;
              state.gameTips = ErrorTips.getErrorTipsObj().In_the_game;
                 var time =state.history.length-1-30-(60-data.ttl);
                 for(time;time<state.history.length-1;time++){
                   state.Echartdata.push(state.history[time]);
                 }
            }else{
              $('.CanvasMask').fadeIn();
              state.isGaming = true;
              state.gameTips = ErrorTips.getErrorTipsObj().System_processing;
              var time =state.history.length-90;
              for(time;time<state.history.length-1;time++){
                state.Echartdata.push(state.history[time]);
              }
            }
          }
          state.isFrist = false;
        }
        if(data.system){
          if(data.system == 1){
            if(router.nowPage == "BTC" || router.nowPage == "ETH" || router.nowPage == "LTC"){
              Message({
                showClose: false,
                message: data.msg,
              });
            }
          }else{
            state.gameData = data;
            if(!state.isWaiting){
              filerData(data);
            }
          }
        }else if(parseInt(data.Round)){
          state.isWaiting = false;
          state.Round = data.Round;
          if(data.Beting){
            $('.CanvasMask').fadeOut();
           state.isGaming = false;
           state.gameTips = ErrorTips.getErrorTipsObj().In_the_order;
        /*    if(!state.isFrist){
              state.handSum = 0;
              localStorage.setItem('handSum',state.handSum);
            }*/
          }else if(data.Gaming){
             $('.CanvasMask').fadeOut();
             state.isGaming = true;
             state.gameTips = ErrorTips.getErrorTipsObj().In_the_game
          }else{
            $('.CanvasMask').fadeIn();
             state.isGaming = true;
             state.isWaiting = true;
             state.gameTips = ErrorTips.getErrorTipsObj().System_processing
             setTimeout(function () {
              if(state.handSum>0){
                var data = {
                  userid:JSON.parse(localStorage.getItem("game_2_UserData")).id,
                  token:JSON.parse(localStorage.getItem("game_2_UserData")).token,
                  number:state.Round,
                  users:JSON.parse(localStorage.getItem("game_2_UserData")).id,
                  buy_product_name:router.nowPage
                }
                var newObj = gob.getSign(data);
                axios.post(gob.apiUrl+'/Api/Trade/tradeResult',qs.stringify(newObj)).then(function (res) {
                  if(res.data.re){
                    state.isWin = 1;
                  }else{
                    state.isWin = 2;
                  }
                })
                var data_2 = {
                  userid:JSON.parse(localStorage.getItem("game_2_UserData")).id,
                  token:JSON.parse(localStorage.getItem("game_2_UserData")).token
                }
                var newObj_2 = gob.getSign(data_2);
                axios.post(gob.apiUrl+'/Api/Member/userInfo',qs.stringify(newObj_2)).then(function (res) {
                        state.balance = res.data.re.balance;
                });
                state.handSum = 0;
                localStorage.setItem('handSum',state.handSum);
              }else{
                state.isWin = 3;
              }
            },1000)
          }
          state.time = data.ttl;
          clearInterval(state.timer);
          state.timer = setInterval(function () {
            state.time--;
            if(state.time<=0){
              state.time = 0;
              if(state.isWaiting){
                var last = state.Echartdata[state.Echartdata.length-1]
                if (typeof(state.Echartdata[state.Echartdata.length-1]) != undefined){
                  last = state.Echartdata[state.Echartdata.length-1];
                }else{
                  last = state.waitIngData[state.waitIngData.length-1]
                }
                state.Echartdata = [last];
              }
              try {
                if(ws.readyState != 2 && ws.readyState != 3){
                  ws.send("current_state");
                }
              }catch(err){
              }
            }
          },1000)
        }else{
         console.log("emtly")
        }
      }else{
        console.log("error");
      }
      state.isFrist = false;
    }
    ws.onopen = () => {
      ws.send("current_state");
    }
    router.afterEach(function () {
      ws.close()
    })
    ws.onerror = function(e){
    }
    function a(){
      ws.send("current_state");
    }
  }
}

const actions = {
  actionGetGameStatus(context,data){
    state.isFrist = true;
    this.commit('getEchartData',data);
  },
  actiongetEchartData(context,data){
     if(state.history){
       this.commit('getGameStatus',data)
     }
  },
  actionTrade(context,data){
    this.commit('getTrade',data);
  },
  actionWinningPercentage(context,data){
    this.commit('winningPercentage',data);
  },
  actionTransactionList(context,data){
      this.commit('TransactionList', data);
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
