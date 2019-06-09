<template>
 <div class="commomWrapper introductionWrapper">
   <tips>{{language_2.introduction}}</tips>
   <template v-if="obj">
     <vue-scroll>
     <div class="introductItemWrapper">
       <div class="introductItem">
         {{obj.introduction}}
       </div>
       <div class="introductItem">
         <span>{{language_3.market_value}}</span><span>{{obj.market_value}}</span>
       </div>
       <div class="introductItem">
         <span>{{language_3.ranking}}</span><span>{{obj.ranking}}</span>
       </div>
       <div class="introductItem">
         <span>{{language_3.total_market_value_rate}}</span><span>{{obj.total_market_value_rate}}</span>
       </div>
       <div class="introductItem">
         <span>{{language_3.flow_rate}}</span><span>{{obj.flow_rate}}</span>
       </div>
       <div class="introductItem">
         <span>{{language_3.turnover_rate}}</span><span>{{obj.turnover_rate}}</span>
       </div>
       <div class="introductItem">
         <span>{{language_3.core_algorithm}}</span><span>{{obj.core_algorithm}}</span>
       </div>
       <div class="introductItem">
         <span>{{language_3.consensus_mechanism}}</span><span>{{obj.consensus_mechanism}}</span>
       </div>
       <div class="introductItem">
         <span>{{language_3.project_start_time}}</span><span>{{obj.project_start_time}}</span>
       </div>
       <div class="introductItem">
         <span>{{language_3.support_purse}}</span><span style="text-align: right">{{obj.support_purse}}</span>
       </div>
     </div>
     </vue-scroll>
     </template>
     <template v-else>
       <p style="margin-top: 30px">～暂无数据～</p>
     </template>
 </div>
</template>

<script>
  import axios from "axios";
  import qs from "qs";
  import gob from "../../../store/config.js";
  import tips from "../../AppCommon/tips"
  export default {
    components:{
      tips
    },
    watch:{
      getLanguageType:function (val) {
        var obj = {
          currency: this.$route.query.id.toUpperCase(),
          language:this.getLanguageType
        }
        var newObj = gob.getSign(obj);
        var _this = this;
        axios.post(gob.apiUrl+'/Api/Project/index',qs.stringify(newObj)).then(function (res) {
          _this.obj = res.data.re;
        });
      }
    },
    name: "introduction",
    mounted:function () {
      var obj = {
        currency: this.$route.query.id.toUpperCase(),
        language:localStorage.getItem('language')
      }
      var newObj = gob.getSign(obj);
      var _this = this;
      axios.post(gob.apiUrl+'/Api/Project/index',qs.stringify(newObj)).then(function (res) {
        _this.obj = res.data.re;
      });
    },
    computed:{
      language:function () {
        return this.$store.getters.getLanguage.infoPage;
      },
      language_2:function () {
        return this.$store.getters.getLanguage.infoPageDetail
      },
      language_3:function () {
        return this.$store.getters.getLanguage.introduction;
      },
      getLanguageType:function () {
        return this.$store.getters.getLanguageType;
      },
    },
    data:function () {
      return{
        obj:{}
      }
    }
  }
</script>

<style lang="scss">


  @media screen and (min-width: 1700px) {
    .introductionWrapper{
      width: 500px
    }
  }
  @media screen and (max-width: 1700px) {
    .introductionWrapper{
      width: 413px
    }
  }


.introductionWrapper{
  height:308px;
  float: left;
  margin-right: 33px;
  .introductItem{
    padding: 18px 24px;
    border-bottom: 1px solid rgba(255,255,255,0.217);
    font-size:14px;
    color:rgba(255,255,255,1);
    line-height:20px;
    text-align: left;
    span{
      display: inline-block;
      float: left;
    }
    span:last-child{
      float: right;
    }
  }
  .introductItem:first-child{
    margin-top: 18px;
  }
  .introductItem:last-child{
    margin-bottom: 18px;
    border-bottom: none;
  }
  .introductItem:after{
    display: block;
    clear: both;
    content: " ";
    height: 0px;
  }
}
</style>
