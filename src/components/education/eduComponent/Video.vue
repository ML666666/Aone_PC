<template>
 <div v-if="language" class="VideoWrapper">
   <tips>{{language.Video}}</tips>
   <vue-scroll>
    <div class="changeVideoItemWrapper">
      <div
        @click="changeEduVideoList(0,20)"
        class="changeVideoItem HeightLight">
        1-20集
      </div>
      <div
        @click="changeEduVideoList(20,40)"
        class="changeVideoItem">
        21-40集
      </div>
      <div
        @click="changeEduVideoList(40,60)"
        class="changeVideoItem">
        41-60集
      </div>
      <div
        @click="changeEduVideoList(59,80)"
        class="changeVideoItem">
        61-80集
      </div>
      <div
        @click="changeEduVideoList(80,86)"
        class="changeVideoItem">
        81-86集
      </div>
    </div>
    <div class="VideoItemWrapper">

      <template v-for="v in getEduVideoTlist">
     <router-link tag="a" :to="{ name: 'eduVideoDetail'}">
      <div :url="v.url" :key_1="v.key" :name="v.name" class="VideoItem">
        <img class="VideoImg" src="../../../assets/edu/eduVideo.png" height="246" width="402"/>
        <div class="VideoItemContext">
            <p class="VideoItemTitle">
              区块链100问 - 第{{v.key}}集
            </p>
            <p class="VideoItemAbout">
              {{v.name}}
            </p>
        </div>
      </div>
    </router-link>
      </template>

    </div>
   </vue-scroll>
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
        name: "video_1",
        mounted () {
          var _this = this;
          this.$store.dispatch('actionEduVideoList');
          $('.changeVideoItem').click(function () {
            $('.changeVideoItem').removeClass('HeightLight');
            $(this).addClass('HeightLight');
          })
          $(document).on('click','.VideoItemWrapper .VideoItem',function () {
            console.log(1)
            var obj = {
              url:$(this).attr('url'),
              key:$(this).attr('key_1'),
              name:$(this).attr('name'),
            }
            _this.$store.commit('setVideoObj',obj);
          });
        },
      data:function () {
        return{
          Tlist:[]
        }
      },
      computed:{
        geteEduVideoAllList:function () {
          return this.$store.getters.geteEduVideoAllList
        },
        getEduVideoTlist:function () {
          for(var i = 0; i<this.$store.getters.getEduVideoTlist.length; i++){
            var name = this.$store.getters.getEduVideoTlist[i].name;
            this.$store.getters.getEduVideoTlist[i].name = name.substring(name.indexOf("：")+1);
          }
          return this.$store.getters.getEduVideoTlist
        },
        language:function () {
          if(this.$store.getters.getLanguage)
            return this.$store.getters.getLanguage.Edu
        }
      },
      methods:{
        changeEduVideoList:function (lndex,lastIndex) {
          var obj = {
            lndex:lndex,
            lastIndex:lastIndex
          }
          this.$store.commit('changeEduVideoList',obj);
        },
      },
    }
</script>

<style lang="scss">

  @media screen and (min-width: 1700px) {
  }
  @media screen and (max-width: 1700px) {
    .VideoWrapper{
      width:624px;
      margin: 0 auto;
      transform:scale(0.85,0.85) !important;
    }
  }
.VideoWrapper{
  width:624px;
  height:753px;
  background:rgba(23,30,38,1);
  float: right;
  position: relative;
  .changeVideoItemWrapper{
    height: 32px;
    margin-bottom: 7px;
    margin-top: 30px;
    .HeightLight{
      color: #4791F8;
    }
    .changeVideoItem{
      width:70px;
      height:32px;
      background:rgba(43,51,60,1);
      border-radius:1px;
      display: inline-block;
      float: left;
      margin-right: 57px;
      text-align: center;
      line-height: 32px;
      font-size:14px;
      cursor: pointer;
    }
    .changeVideoItem:first-child{
      margin-left: 24px;
    }
    .changeVideoItem:last-child{
      margin-right: 0px;
    }
  }
  .VideoItemWrapper{
    a:last-child .VideoItem{
      border-bottom: none;
      margin-bottom: 30px;
    }
    a{
      color: #fff;
    }
    .VideoItem{
      height: 137px;
      border-bottom: 1px solid rgba(255,255,255,0.2);
      padding: 23px 24px;
      cursor: pointer;
      .VideoImg{
        display: inline-block;
        float: left;
        width:148px;
        height:90px;
      }
      .VideoItemContext{
        float: left;
        width: 428px;
        height: 90px;
        padding-left: 24px;
        .VideoItemTitle{
          height:21px;
          font-size:16px;
          color:rgba(255,255,255,1);
          line-height:21px;
          text-align: left;
          margin-top: 22px;
          margin-bottom: 10px;
        }
        .VideoItemAbout{
          height:16px;
          font-size:14px;
          font-family:MicrosoftYaHei;
          color:rgba(255,255,255,1);
          line-height:19px;
          text-align: left;
         }
      }
    }
  }
}
</style>
