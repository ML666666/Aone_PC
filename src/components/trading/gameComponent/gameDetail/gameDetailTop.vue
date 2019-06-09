<template>
    <div v-if="language" class="gameDetailTop">
       <div class="TimeAndTypeWrapper">
         <template v-if="$router.nowPage == 'BTC'">
           <img class="moneyTypeImg" src="../../../../assets/trading/BTC.png" height="60" width="60"/>
           <div class="moneyTypeWrapper">
             <p>Bitcoin Cash（BTC）</p>
             <p>{{language.BTC}}</p>
           </div>
         </template>
         <template  v-if="$router.nowPage == 'ETH'">
           <img class="moneyTypeImg" src="../../../../assets/trading/ETH.png" height="60" width="60"/>
           <div class="moneyTypeWrapper">
             <p>Bitcoin Cash（ETH）</p>
             <p>{{language.ETH}}</p>
           </div>
         </template>
         <template  v-if="$router.nowPage == 'LTC'">
           <img class="moneyTypeImg" src="../../../../assets/trading/LTC.png" height="60" width="60"/>
           <div class="moneyTypeWrapper">
             <p>Bitcoin Cash（LTC）</p>
             <p>{{language.LTC}}</p>
           </div>
         </template>
         <div class="TimeWrapper">
           <div class="TimeType">{{getGameTips}}</div>
            <div class="Time">{{getTime}}<b>s</b></div>
         </div>
       </div>
       <div class="tradingDetail">
         <div class="aboutMoney">
           <p>{{language.theTop}}：{{High}}CNY</p>
           <p>{{language.theDown}}：{{Low}} CNY</p>
           <p>{{language.Balance}}：{{getBalance}}&nbspUSDT</p>
           <p>{{language.Currency_amount}}：{{getHandSum}}{{language.hand}}</p>
         </div>
         <div class="aboutTrading">
           <div class="TradingHand UP">
             {{language.Up}}<span>{{winningPercent.up}}%</span>
           </div>
           <div class="TradingHand DOWN">
             {{language.Down}}<span>{{winningPercent.down}}%</span>
           </div>
           <el-progress
             type="circle"
             :width="circleWidth"
             :stroke-width="strokeWidth"
             :show-text="showText"
             color="RGBA(81, 178, 146, 1)"
             :percentage="winningPercent.down"></el-progress>
         </div>
       </div>
    </div>
</template>
1`
<script>
  let ws = null;
    export default {
      name: "game-detail-top",
      mounted:function () {
        this.$store.commit('sethandSum');


        this.type = this.$router.nowPage;
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
            }
          }
        }
        ws.onclose = function () {
        }
      },
      beforeDestroy:function () {
        ws.close();
      },
      data:function () {
        return{
          userDetial:JSON.parse(localStorage.getItem('game_2_UserData')),
          strokeWidth:24,
          circleWidth:200,
          showText:false,
          Edata:null,
          High:0.00,
          Low:0.00,
        }
      },
      watch:{
        getBalance:function (val,oldval) {
          this.userDetial = val;
          var obj = JSON.parse(localStorage.getItem('game_2_UserData'));
          obj.balance = val;
          localStorage.setItem('game_2_UserData',JSON.stringify(obj));
        },
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
      computed:{
        getBalance:function () {
          if(this.$store.getters.getBalance){
            return this.$store.getters.getBalance
          }else{
            if(localStorage.getItem('game_2_UserData')){
              return JSON.parse(localStorage.getItem('game_2_UserData')).balance;
            }else{
              return "0.0000"
            }
          }
        },
        language:function () {
          if(this.$store.getters.getLanguage)
          return this.$store.getters.getLanguage.MainPahe;
        },
        winningPercent:function () {
          return this.$store.getters.getWinningPercent;
        },
        winningPercent:function () {
          return this.$store.getters.getWinningPercent
        },
        getTime:function () {
          return this.$store.getters.getTime
        },
        getGameTips:function () {
          return this.$store.getters.getGameTips
        },
        getRound:function () {
          return this.$store.getters.getRound
        },
        getHandSum:function () {
          return this.$store.getters.getHandSum
        }
      }
    }
</script>

<style lang="scss">
.gameDetailTop{
  .TimeAndTypeWrapper{
    height: 54px;
    padding: 40px 28px 0px 28px;
    margin-bottom: 133px;
    .moneyTypeImg{
      width:52px;
      height: 52px;
      float: left;
      margin: 2px;
      transform: rotate(10deg);
      margin-right: 12px;
      float: left;
    }
    .moneyTypeWrapper{
      display: inline-block;
      float: left;
      height: 52px;
      p{
        text-align: left;
      }
      p:first-child{
        margin-bottom: 10px;
      }
    }
    .TimeWrapper{
      display: inline-block;
      float: right;
      height: 44px;
      margin-top: 4px;
      div{
        display: inline-block;
        float: left;
      }
      .TimeType{
        padding-left: 17px;
        padding-right: 17px;
        background: #fff;
        color: #000;
        font-size: 18px;
        height: 44px;
        line-height: 44px;
      }
      .Time{
        padding-left: 8px;
        padding-right: 8px;
        background: RGBA(52, 56, 66, 1);
        color: #fff;
        font-size: 18px;
        height: 44px;
        width: 46px;
        line-height: 44px;
        font-family:MFLiHei_Noncommercial-Regular;
      }
    }
  }
  .tradingDetail{
    padding-left: 94px;
    height: 250px;
    padding-top: 25px;
    overflow: hidden;
    .aboutMoney{
      margin-top: 38px;
      display: inline-block;
      float: left;
      max-width: 200px;
      p{
        text-align: left;
        margin-bottom: 18px;
      }
    }
    .aboutTrading{
      width:226px;
      height:226px;
      display: inline-block;
      float: right;
      margin-right: 111px;
      padding-top: 113px;
      position: relative;
      .TradingHand{
        position: absolute;
        height:19px;
        font-size:14px;
        font-family:MicrosoftYaHei;
        color:rgba(255,255,255,1);
        line-height:19px;
        text-align: right;
        span{
          margin-left: 16px;
        }
      }
      .UP{
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
      }
      .DOWN{
        right: -81px;
        top: 50%;
        transform: translateY(-50%);
      }
      .el-progress,
      .el-progress--circle,
      .el-progress--without-text{
        transform: translateY(-50%);
        svg{
          path:first-child{
            stroke:RGBA(248, 100, 109, 1)
          }
          path:nth-child(2){
            stroke-linecap:butt
          }
        }
      }
    }
  }
}
</style>
