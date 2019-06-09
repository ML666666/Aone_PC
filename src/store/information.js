import { router } from '../router/index'
const state = {
    BTC:null,
    LTC:null,
    ETH:null,
    isGetData:false,
}

const getters = {
   getBTC:state => state.BTC,
   getLTC:state => state.LTC,
   getETH:state => state.ETH,
   getIsGetData:state => state.isGetData,
}

const mutations = {
  getLastData:async ({ dispatch, commit, getters }, data) => {
    let ws = new WebSocket('wss://t9.senhet.com:8890');
    ws.onmessage = e => {
      state.isGetData = true;
      var data = JSON.parse(e.data);
      if(data.msg){
        if(data.msg.symbol == "HTbtccny"){
          if(data.msg.PriceChangeRatio>0){
            data.msg.PriceChangeRatio = (data.msg.PriceChangeRatio.toString().substring(0,4));
          }else{
            data.msg.PriceChangeRatio = (data.msg.PriceChangeRatio.toString().substring(0,5));
          }
          state.BTC=(data.msg);
        }
        if(data.msg.symbol == "HTethcny"){
          if(data.msg.PriceChangeRatio>0){
            data.msg.PriceChangeRatio = (data.msg.PriceChangeRatio.toString().substring(0,4));
          }else{
            data.msg.PriceChangeRatio = (data.msg.PriceChangeRatio.toString().substring(0,5));
          }
          state.ETH=(data.msg);
        }
        if(data.msg.symbol == "HTltccny"){
          if(data.msg.PriceChangeRatio>0){
            data.msg.PriceChangeRatio = (data.msg.PriceChangeRatio.toString().substring(0,4));
          }else{
            data.msg.PriceChangeRatio = (data.msg.PriceChangeRatio.toString().substring(0,5));
          }
          state.LTC=(data.msg);
        }
      }
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
    actionLastData(context,data){
      this.commit('getLastData');
    }
}
export default {
  state,
  getters,
  mutations,
  actions
}
