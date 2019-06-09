<template>
  <div class="commomWrapper moneyDetailWrapper">
    <template v-if="curData">
      <div class="moneyName">
        <img v-if="$route.query.id == 'BTC'" class="moneyNameLogo"  src="../../../assets/member/BTC.png" height="40" width="40"/>
        <img v-if="$route.query.id == 'LTC'" class="moneyNameLogo"  src="../../../assets/member/ETH.png" height="40" width="40"/>
        <img v-if="$route.query.id == 'ETH'" class="moneyNameLogo"  src="../../../assets/member/LTC.png" height="40" width="40"/>
        Bitcoin Cash（{{$route.query.id}}）
      </div>
      <div class="CNmoneyName">
        <template v-if="$route.query.id == 'BTC'">{{language.BTC}}</template>
        <template v-if="$route.query.id == 'LTC'">{{language.LTC}}</template>
        <template v-if="$route.query.id == 'ETH'">{{language.ETH}}</template>
      </div>
      <div class="moneyDetail">
        <span>¥{{curData}} CNY</span>
        <span
          class="red"
          v-show="isUpPercentage>=0"
          style="color: rgb(243, 87, 106);">
                  +{{isUpPercentage}}%（{{language.today}}）
      </span>
        <span
          class="red"
          v-show="isUpPercentage<0"
          style="color: RGBA(51, 145, 109, 1);">
                 {{isUpPercentage}}%（{{language.today}}）
      </span>
        <!--<span style="margin-right: 12px">全球总市值占比：52.35%</span>-->
        <!--<span>换手率：4.07%</span>-->
      </div>
      <div class="AboutMoney">
        <div class="AboutMoneyItem">
          <span>{{language.the_highest}}</span>
          <span>¥{{High}}</span>
        </div>
        <div class="AboutMoneyItem">
          <span>{{language.the_lowest}}</span>
          <span>¥{{Low}}</span>
        </div>
        <div class="AboutMoneyItem">
          <span>{{language.turnover}}（24h )</span>
          <span>{{Amount}}&nbsp{{language.ten_thousand}}</span>
        </div>
        <!--<div class="AboutMoneyItem">-->
          <!--<span>成交量（24h）</span>-->
          <!--<span>1CNY</span>-->
        <!--</div>-->
        <!--<div class="AboutMoneyItem">-->
          <!--<span>流通市场</span>-->
          <!--<span>1CNY</span>-->
        <!--</div>-->
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
      name: "money-detail",
      mounted:function () {
        this.type = this.$route.query.id;
        var _this = this;
        ws = new WebSocket('wss://t9.senhet.com:8890');
        var status = "last_data2 HT"+this.type.toLowerCase()+"cny"
        ws.onopen = () => {
          ws.send(status);
        }
        ws.onmessage = evt => {
          var curType = "HT"+this.type.toLowerCase()+"cny";
          if(JSON.parse(evt.data).msg){
            if(curType == JSON.parse(evt.data).msg.symbol) {
              this.Edata = JSON.parse(evt.data);
              // console.log(this.Edata)
            }
          }
        }
        ws.onclose = function () {
        }
      },
      beforeDestroy:function () {
        ws.close();
      },
      watch:{
        Edata:function (val,oldval) {
          if(val && oldval){
            if(val.msg.PriceChangeRatio){
              this.curData = val.msg.curprice;
              this.isUpPercentage = val.msg.PriceChangeRatio.toString().substring(0,(val.msg.PriceChangeRatio.toString().indexOf('.'))+3);
              this.High = val.msg.High;
              this.Low = val.msg.Low;
              this.Amount = (val.msg.Amount/10000).toFixed(2);
            }
          }else{
            if(val && oldval){
              this.curData = val.msg.curprice;
              this.isUpPercentage = val.msg.PriceChangeRatio.toString().substring(0,(val.msg.PriceChangeRatio.toString().indexOf('.'))+3);
              this.High = val.msg.High;
              this.Low = val.msg.Low;
              this.Amount = (val.msg.Amount/10000).toFixed(2);
            }
          }
        },
      },
      computed: {
        language:function () {
          return this.$store.getters.getLanguage.infoPageDetail;
        }
      },
      data:function () {
        return{
          type:null,
          Edata:null,
          curData:null,
          isUpPercentage:0.000000,
          High:0.00,
          Low:0.00,
          Amount:0.00
        }
      },
    }
</script>

<style lang="scss">

  @media screen and (min-width: 1700px) {
    .moneyDetailWrapper {
      width: 672px;
      height: 400px;
      float: left;
      margin-bottom: 66px;
      margin-right: 60px;
      padding-top: 30px;
      padding-left: 90px;
      position: relative;
      .Mask{
        width:672px;
      }
    }
  }
  @media screen and (max-width: 1700px) {
    .moneyDetailWrapper {
      height: 400px;
      float: left;
      margin-bottom: 66px;
      margin-right: 60px;
      padding-top: 30px;
      padding-left: 90px;
      position: relative;
      padding-right: 90px;
      .Mask{
        width: 560px;
      }
    }
  }


.moneyDetailWrapper{
  .Mask{
    position: absolute;
    height:400px;
    top: 0px;
    left: 0px;
  }
  .moneyName{
    height:22px;
    font-size:16px;
    font-family:ArialMT;
    color:rgba(255,255,255,1);
    line-height:18px;
    text-align: left;
    position: relative;
    .moneyNameLogo{
      position: absolute;
      left: -52px;
    }
  }
  .CNmoneyName{
    height:21px;
    font-size:16px;
    font-family:MicrosoftYaHei;
    color:rgba(255,255,255,1);
    line-height:21px;
    margin-top: 10px;
    margin-bottom: 24px;
    text-align: left;
  }
  .moneyDetail{
    height:19px;
    font-size:14px;
    font-family:MicrosoftYaHei;
    color:rgba(255,255,255,1);
    line-height:19px;
    text-align: left;
    .red{
      margin-right: 24px;
      margin-left: 12px;
    }
  }
  .AboutMoney{
    width:380px;
    border:1px solid rgba(151,151,151,1);
    margin-top: 21px;
    .AboutMoneyItem{
      height: 44.4px;
      border-bottom: 1px solid rgba(151,151,151,1);
      span{
        width: 50%;
        float: left;
        display: inline-block;
        height:  44.4px;
        font-size: 14px;
        text-align: center;
        line-height: 44.4px;
      }
      span:first-child{
        border-right: 1px solid rgba(151,151,151,1);
      }
    }
    .AboutMoneyItem:last-child{
      border-bottom: none;
    }
  }
}
</style>
