<template>
  <div class="OrderListWapper">
    <vue-scroll>
    <template  v-if="getOrderList.length != 0"  v-for="(v,index) in getOrderList">
      <div :class="{'borderNone': index+1 == getOrderList.length}" class="OrderBlock">
      <div class="data">
        {{v.time}}
      </div>
      <template v-for="v in v.array">
      <div class="OrderItem">
        <img v-if="v.buy_product_name == 'LTC'" class="OrderItemImg" src="../../../assets/trading/LTC.png" height="60" width="60"/>
        <img v-if="v.buy_product_name == 'BTC'" class="OrderItemImg" src="../../../assets/trading/BTC.png" height="60" width="60"/>
        <img v-if="v.buy_product_name == 'ETH'" class="OrderItemImg" src="../../../assets/trading/ETH.png" height="60" width="60"/>

        <div class="aboutTrading">
          <p v-if="v.coin == 'BTC'">{{language.BTC}}</p>
          <p v-if="v.coin == 'ETH'">{{language.ETH}}</p>
          <p v-if="v.coin == 'LTC'">{{language.LTC}}</p>
          <p>
            <span v-if="v.buy_direct==1">{{language.Buy_and_Sell}}：{{language.Sell}}</span>
            <span v-else="v.buy_direct==0">{{language.Buy_and_Sell}}：{{language.Buy}}</span>&nbsp
            <span style="padding-left: 1rem">{{language.Number_of_hands}}：{{v.buy_count}}{{language.H}}</span>
            <span>{{v.orig_point}}USDT</span>&nbsp
           </p>
        </div>
        <div v-if="v.complete_fee>0"  class="isWin Win">{{language.WIN}}</div>
        <div v-else class="isWin">{{language.LOSE}}</div>
      </div>
      </template>
    </div>
    </template>

    <nothing v-if="getOrderList.length == 0"></nothing>
    </vue-scroll>
  </div>
</template>

<script>
  import axios from "axios";
  import qs from "qs";
  import gob from "../../../store/config.js";
  import nothing from '../../AppCommon/Nothing'
    export default {
        name: "order-list",
        components:{
          nothing
        },
      data:function () {
        return{
          getOrderList:[]
        }
      },
      filters:{
        moneyType:function (value) {
          switch (value){
            case "BTC":
              return "比特币(BTC)";
              break;
            case "LTC":
              return "莱特币(LTC)";
              break;
            case "ETH":
              return "以太坊(ETH)";
              break;
          }
        }
      },
      mounted:function () {
        var obj = {
          userid: JSON.parse(localStorage.getItem('game_2_UserData')).id,
          token: JSON.parse(localStorage.getItem('game_2_UserData')).token,
        }
        var _this = this;
        var newObj = gob.getSign(obj);
        axios.post(gob.apiUrl+'/Api/Member/userOrders',qs.stringify(newObj)).then(function (res) {
          if(gob.isOutLogin(res)){
            if(res.data.re){
              let s = new Set();
              for(var i = 0; i<res.data.re.length; i++){
                res.data.re[i].cdate = res.data.re[i].cdate.substring(0,res.data.re[i].cdate.indexOf(" "));
                s.add(res.data.re[i].cdate);
              }
              var num = [...s];
              for(var w = 0; w<num.length;w++){
                var obj = {
                  time:null,
                  array:[]
                };
                obj.time = num[w];
                for(var k = 0; k<res.data.re.length; k++){
                  if(res.data.re[k].cdate == num[w]){
                    obj.array.push(res.data.re[k])
                  }
                }
                _this.getOrderList.push(obj);
              }
            }else{
              _this.getOrderList.length = 0;
            }
          }
        })
      },
      computed:{
        language:function () {
          return this.$store.getters.getLanguage.Order_details
        },
      },
    }
</script>

<style lang="scss">
  @media screen and (min-width: 1700px) {
    .OrderListWapper{
      height: 700px;
    }
  }

  @media screen and (max-width: 1700px) {
    .OrderListWapper{
      height: 700px;
    }
  }

.OrderListWapper{
  .borderNone{
    border: none !important;
  }
  .OrderBlock{
    padding-top: 30px;
    padding-bottom: 3px;
    width:880px;
    /*background:rgba(23,30,38,1);*/
    border-bottom:10px solid rgba(151,151,151,0.4);
    .data{
      padding-left: 24px;
      text-align: left;
    }
    .OrderItem:last-child{
      border: none;
    }
    .OrderItem{
      height: 90px;
      padding-left: 56px;
      padding-right: 58px;
      padding-top: 45px;
      border-bottom:1px solid rgba(151,151,151,0.4);
      .isWin{
        display: inline-block;
        float: right;
        transform: translateY(-50%);
        font-size:20px;
      }
      .Win{
        color: RGBA(246, 98, 107, 1);
      }
      .OrderItemImg{
        width: 40px;
        height: 40px;
        display: inline-block;
        float: left;
        transform: translateY(-50%);
        margin-right: 16px;
      }
      .aboutTrading{
        height: 40px;
        float: left;
        transform: translateY(-50%);
        p{
          font-size:14px;
          font-family:MicrosoftYaHei;
          text-align: left;
        }
        p:first-child{
          margin-bottom: 7px;
        }

        p:last-child{
          font-size:12px;
        }
      }
    }
  }
}
</style>
