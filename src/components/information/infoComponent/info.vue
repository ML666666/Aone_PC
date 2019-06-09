<template>
  <div class="infoWrapper commomWrapper">
    <tips>{{language_2.market}}</tips>
    <template v-if="BTC">
      <div class="infoItem">
        <div class="infoItemTitle">
          BTC
        </div>
        <div  v-if="BTC" class="infoItemDetail">
         <span class="total">
           ¥{{BTC.curprice}}
         </span>
          <span  style="font-size: 0.875rem"  v-bind:class="[BTC.PriceChangeRatio>0 ? 'up' : 'down']">
            <template v-if="BTC.PriceChangeRatio && BTC.PriceChangeRatio>0">+</template>{{BTC.PriceChangeRatio}}%
         </span>
        </div>
        <div v-if="BTC.Amount" class="allInfo">
          {{BTC.Amount |toFixed_2}} {{language_2.ten_thousand}} BTC
        </div>
      </div>
      <div class="infoItem">
        <div class="infoItemTitle">
          LTC
        </div>
        <div v-if="LTC" class="infoItemDetail">
        <span class="total">
          ¥{{LTC.curprice}}
        </span>
          <span  style="font-size: 0.875rem"  v-bind:class="[LTC.PriceChangeRatio>0 ? 'up' : 'down']">
            <template v-if="LTC.PriceChangeRatio && LTC.PriceChangeRatio>0">+</template>{{LTC.PriceChangeRatio}}%
        </span>
        </div>
        <div v-if="LTC.Amount" class="allInfo">
          {{LTC.Amount |toFixed_2}} {{language_2.ten_thousand}} LTC
        </div>
      </div>
      <div class="infoItem">
        <div class="infoItemTitle">
          ETH
        </div>
        <div v-if="ETH" class="infoItemDetail">
          <span class="total">¥{{ETH.curprice}}</span>
          <span  style="font-size: 0.875rem"  v-bind:class="[ETH.PriceChangeRatio>0 ? 'up' : 'down']">
            <template v-if="ETH.PriceChangeRatio && ETH.PriceChangeRatio>0">+</template>{{ETH.PriceChangeRatio}}%
        </span>
        </div>
        <div v-if="ETH.Amount" class="allInfo">
          {{ETH.Amount |toFixed_2}} {{language_2.ten_thousand}} ETH
        </div>
      </div>
    </template>
    <template v-else>
      <div
        v-loading="true"
        element-loading-text="loadind..."
        element-loading-background="rgba(23,30,38,1)"
        class="Mask">
      </div>
    </template>
  </div>
</template>

<script>
    let ws = null;
    import tips from "../../AppCommon/tips"
    export default {
      components:{
        tips
      },
      name: "info",
      mounted:function () {
        if(!this.getIsGetData){
          this.$store.dispatch('actionLastData');
        }
        var _this  = this;
        let ws = new WebSocket('wss://t9.senhet.com:8890');
        ws.onmessage = e => {
          var data = JSON.parse(e.data);
          if(data.msg){
            if(data.msg.symbol == "HTbtccny"){
              if(data.msg.PriceChangeRatio>0){
                data.msg.PriceChangeRatio = (data.msg.PriceChangeRatio.toString().substring(0,4));
              }else{
                data.msg.PriceChangeRatio = (data.msg.PriceChangeRatio.toString().substring(0,5));
              }
              _this.BTC=(data.msg);
            }
            if(data.msg.symbol == "HTethcny"){
              if(data.msg.PriceChangeRatio>0){
                data.msg.PriceChangeRatio = (data.msg.PriceChangeRatio.toString().substring(0,4));
              }else{
                data.msg.PriceChangeRatio = (data.msg.PriceChangeRatio.toString().substring(0,5));
              }
              _this.ETH=(data.msg);
            }
            if(data.msg.symbol == "HTltccny"){
              if(data.msg.PriceChangeRatio>0){
                data.msg.PriceChangeRatio = (data.msg.PriceChangeRatio.toString().substring(0,4));
              }else{
                data.msg.PriceChangeRatio = (data.msg.PriceChangeRatio.toString().substring(0,5));
              }
              _this.LTC=(data.msg);
            }
          }
        }
        ws.onopen = () => {
          ws.send("current_state");
        }
        ws.onerror = function(e){
        }
      },
      beforeDestroy:function () {
        ws.close();
      },
      data:function () {
        return{
          BTC:null,
          ETH:null,
          LTC:null
        }
      },
      filters:{
        toFixed_2:function (val) {
          return (val/10000).toFixed(2)
        }
      },
      computed:{
        // BTC:function () {
        //   return this.$store.getters.getBTC;
        // },
        // ETH:function () {
        //   return this.$store.getters.getETH;
        // },
        // LTC:function () {
        //   return this.$store.getters.getLTC;
        // },
        language:function () {
          return this.$store.getters.getLanguage.infoPage;
        },
        language_2:function () {
          return this.$store.getters.getLanguage.infoPageDetail
        },
        getIsGetData:function () {
          return this.$store.getters.getIsGetData;
        }
      },
    }
</script>



<style lang="scss">

  @media screen and (min-width: 1700px) {
    .infoWrapper{
      width: 500px;
      .Mask{
        z-index: 100 !important;
        width:500px;
        height:308px;
        position: absolute;
        top: 0px;
        left: 0px;
      }
    }
  }
  @media screen and (max-width: 1700px) {
    .infoWrapper{
      width: 413px;
      .Mask{
        z-index: 100 !important;
        width:413px;
        height:308px;
        position: absolute;
        top: 0px;
        left: 0px;
      }
    }
  }

.infoWrapper{
  height:308px;
  float: left;
  margin-right: 33px;
  box-sizing: border-box;
  padding-top: 18px;
  position: relative;
  .infoItem{
    height: 86px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    padding-left: 24px;
    padding-top: 18px;
    *{
      text-align: left;
    }
    .infoItemTitle{
      height:21px;
      font-size:16px;
      font-family:MicrosoftYaHei;
      color:rgba(255,255,255,1);
      line-height:21px;
      cursor: pointer;
      text-align: left;
    }
    .infoItemDetail{
      height: 9px;
      font-size:14px;
      font-family:MicrosoftYaHei;
      color:rgba(255,255,255,1);
      text-align: right;
      transform: translateY(-6px);
      padding-right: 28px;
      .total{
        margin-right: 13px;
      }
      .up{
        color:rgba(247,92,92,1);
      }
      .down{
        color:rgba(40,186,143,0.91);
      }
    }
    .allInfo{
      height:20px;
      font-size:14px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:20px;
    }
  }
  .infoItem:last-child{
    border-bottom: none;
  }
}
</style>
