<template>
<div  v-if="language" class="GameListWrapper">
  <ul class="TypeBar">
    <li class="TypeBarItem">{{language.MainPahe.User}}</li>
    <li class="TypeBarItem">{{language.MainPahe.Currency}}</li>
    <li class="TypeBarItem">{{language.MainPahe.Buy_and_sell}}</li>
    <li class="TypeBarItem">{{language.MainPahe.hands}}</li>
    <li class="TypeBarItem">{{language.MainPahe.Currency_amount}}</li>
  </ul>
  <vue-scroll>
  <div class="UserMatchDataConteiner">
    <ul>
      <p style="color: rgba(255,255,255,0.4);margin-top: 30px" v-if="getTransactionList.length == 0">
        ～{{language.MainPahe.No_data}}～
      </p>
      <template v-for="v in getTransactionList">
        <li>
          <span class="userPhone">{{v.username}}</span>
          <span class="moneyType">{{v.buy_product_name}}</span>
          <span v-if="v.buy_direct == 1 " class="matchType Uptype">{{language.MainPahe.Buy}}</span>
          <span v-if="v.buy_direct == -1 " class="matchType DownType">{{language.MainPahe.Sell}}</span>
          <span class="matchNumber">{{v.buy_count}}{{language.MainPahe.hands}}</span>
          <span class="matchMoney">{{v.orig_point}}</span>
        </li>
      </template>
    </ul>
  </div>
  </vue-scroll>
</div>
</template>

<script>
    export default {
        name: "game-list",
        computed: {
          getTransactionList: function () {
            return this.$store.getters.getTransactionList;
          },
          language:function () {
            return this.$store.getters.getLanguage
          },
         },

    }
</script>

<style lang="scss">


  @media screen and (min-width: 1700px) {
    .GameListWrapper{
      width:834px;
    }
  }

  @media screen and (max-width: 1700px) {
    .GameListWrapper{
      width: 595px;
    }
  }



.GameListWrapper{
  height:312px;
  background:rgba(23,30,38,1);
  overflow: hidden;
  .TypeBar{
    height:40px;
    background:rgba(8,8,8,0.5);
    .TypeBarItem{
      display:inline-block ;
      width: 20%;
      float: left;
      height: 40px;
      line-height: 40px;
      color: #fff;
      font-size: 16px;
    }
  }
  .UserMatchDataConteiner{
    width: 100%;
    ul {
      li {
        height: 57px;
        width: 100%;
        list-style: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        span {
          display: inline-block;
          text-align: center;
          width: 20%;
          float: left;
          height: 57px;
          line-height: 57px;
          font-size: 14px;
          color: #fff;
        }
        .Uptype {
          color: #F6626B;
        }
        .DownType {
          color: #28BA8F;
        }
      }
      li:last-child{
        border-bottom: none;
      }
    }
  }
}
</style>
