
<template>
  <div class="commomWrapper newsWrapper">
    <tips>{{language.information}}</tips>
    <template v-if="list.length>0">
      <vue-scroll>
        <div class="newsItemWrapper">
          <template v-for=" v in list">
            <div class="newItem">
              <div class="TimeOrShare">
                <div class="Time">
                  {{v.cdate | time}}
                </div>
                <!--<div class="Share">-->
                <!--</div>-->
              </div>
              <div class="newTitle">
                {{v.big_title}}
              </div>
              <div class="newContent">
                {{v.small_title}}
              </div>
              <div class="isLikeWrapper">
                <!--<span class="isLike">-->
                <!--<img src="../../../assets/info/DOWN.png" height="42" width="42"/>-->
                <!--利多-->
                <!--12-->
                <!--</span>-->
                <!--<span class="isLike">-->
                <!--<img src="../../../assets/info/UP.png" height="42" width="42"/>-->
                <!--利多-->
                <!--12-->
                <!--</span>-->
              </div>
            </div>
          </template>
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
    name: "news",
    mounted:function () {
     this.getData();
    },
   filters:{
     time:function (value) {
       return  value.substring(value.indexOf(" "),value.lastIndexOf(":"))
     }
   },
  computed:{
    language:function () {
      return this.$store.getters.getLanguage.infoPageDetail
    },
    getLanguageType:function () {
      return this.$store.getters.getLanguageType;
    },
  },
  watch: {
      getLanguageType: function (val) {
        this.getData();
      }
  },
  methods:{
    getData:function () {

      var _this = this;
      var obj = {
        currency:this.currency,
        page:this.page,
        size:10,
        language:localStorage.getItem('language')
      }
      var newObj = gob.getSign(obj);
      axios.post(gob.apiUrl+'/Api/News/news',qs.stringify(newObj)).then(function (res) {
        _this.list = res.data.re;
      });
      this.page++;
    }
  },
  data:function () {
    return{
      page:1,
      list:[],
      currency:this.$route.query.id
    }
  }
    }
</script>

<style lang="scss">
  @media screen and (min-width: 1700px) {
    .newsWrapper{
      width: 500px
    }
  }
  @media screen and (max-width: 1700px) {
    .newsWrapper{
      width: 413px
    }
  }
.newsWrapper{
  height:308px;
  float: left;
  .newItem{
    padding: 18px 24px;
    border-bottom: 1px solid rgba(255,255,255,0.217);
    .TimeOrShare{
      height: 24px;
      padding-top: 12px;
      .Time{
         background: url("../../../assets/info/time.png") no-repeat center center;
         width: 50px;
         background-size: 50px;
         height: 18px;
         float: left;
         transform: translateY(-50%);
         padding-left: 12px;
         font-size:12px;
         line-height: 18px;
      }
      .Share{
        background: url("../../../assets/info/share.png") no-repeat center center;
        width: 18px;
        background-size: 18px;
        height: 20px;
        float: right;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }
    .newTitle{
      font-size:16px;
      line-height:21px;
      margin-top: 12px;
      margin-bottom: 10px;
      transform: translateX(-6px);
      text-align: left;
    }
    .newContent{
      text-align: left;
      font-size:14px;
      line-height:20px;
    }
    .isLikeWrapper{
      margin-top: 11px;
      .isLike{
        height:24px;
        border-radius:12px;
        border:1px solid rgba(255,255,255,0.2);
        padding: 0px 2px;
        cursor: pointer;
        img{
          width: 14px;
          height: 14px;
          line-height:16px;
          transform: translateY(2px);
        }
        font-size:12px;
        line-height:16px;
      }
      span:first-child{
        margin-right: 18px;
        margin-left: 296px;
      }
    }
  }
  .newItem:first-child{
    margin-top: 18px;
  }
  .newItem:last-child{
    margin-bottom: 18px;
    border-bottom: none;
  }
}
</style>
