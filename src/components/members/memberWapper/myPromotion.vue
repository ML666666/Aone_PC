<template>
  <div class="promotionWarpper">
    <div class="promotionWarpperTop">
      <div class="title">
        {{language.Rules}}
      </div>
      <div class="content">
          <p>{{language.rule[0]}} </p>
          <p>{{language.rule[1]}}</p>
          <p>{{language.rule[2]}} </p>
          <p>{{language.rule[3]}}</p>
          <p>{{language.rule[4]}}</p>
      </div>
      <div class="QtCodeWapper">
           <canvas id="QtCode"></canvas>
        <div class="MyPomotionCode">{{language.My_promotional_codes}}：&nbsp {{getPromote.code}}</div>
      </div>
    </div>
    <div class="promotionWarpperBottom">
      <div class="teamListTop">
        <span>{{language.My_teammates}}</span>
        <span>{{language.SumOfHand}}</span>
        <span>{{language.My_Income}}(USDT)</span>
      </div>
      <template v-if="v.nickname" v-for="v in getPromote.teamMateList">
       <div class="teamList">
         <span class="teamListLtem">{{v.nickname}}</span>
          <span class="teamListLtem">{{v.buy_count}}</span>
          <span class="teamListLtem">{{v.total}}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import QRCode from 'qrcode'
  import axios from "axios";
  import qs from "qs";
  import gob from "../../../store/config.js";
    export default {
        name: "my-promotion",
      mounted:function () {
        this.$store.dispatch('actionPromote');
      },
      computed:{
        getPromote:function () {
          return this.$store.getters.getPromote;
        },
        language:function () {
          return this.$store.getters.getLanguage.My_promotion
        },
        getPromote:function () {
          return this.$store.getters.getPromote;
        }
      },
      watch:{
        getPromote:function (val) {
          this.useqrcode(val.code);
        }
      },
      methods:{
        useqrcode(code){
          this.QueryURL= gob.webUrl+'#/register?code='+code;
          var canvas = document.getElementById('QtCode');
          QRCode.toCanvas(canvas, this.QueryURL, function (error) {
            if (error) console.error(error)
          });
        },
        back:function () {
          this.$router.goBack()
        }
      },
      data:function () {
        return{
          QueryURL:""
        }
      }
    }
</script>

<style lang="scss">
  .promotionWarpperTop{
    position: relative;
    width:880px;
    height:304px;
    background:rgba(23,30,38,1);
    padding-left: 24px;
    padding-top: 30px;
    *{
      text-align: left;
    }
    .title{
      font-size: 16px;
    }
    .QtCodeWapper{
      width: 185px;
      position: absolute;
      top: 30px;
      left: 568px;
      .MyPomotionCode{
        font-size:16px;
        margin-top: 38px;
        text-align: center;
      }
    }
    .content{
       margin-top: 23px;
       margin-left: 22px;
       font-size: 14px;
       min-width:323px;
       max-width: 450px;
       height:201px;
       p{
         margin-bottom: 5px;
       }
    }
  }
  .promotionWarpperBottom{
    width:880px;
    height:346px;
    background:rgba(23,30,38,1);
    margin-top: 50px;
    .teamListTop{
      height:40px;
      background:rgba(8,8,8,0.5);
      span{
        display: inline-block;
        width: 33.33333333%;
        line-height: 40px;
        font-size: 16;
        text-align: center;
        float: left;
      }
    }
    .teamList{
      height: 71px;
      border-bottom: 1px solid rgba(151,151,151,0.3);
      .teamListLtem{
        line-height: 71px;
        text-align: center;
        font-size: 14px;
        width: 33.33333333%;
        float: left;
      }
    }
    .teamList:last-child{
      border-bottom: 1px solid rgba(151,151,151,0);
    }
  }
</style>
