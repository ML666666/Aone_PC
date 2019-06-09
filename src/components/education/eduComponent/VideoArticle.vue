<template>
    <div class="videoArticle">

    <div>
      <VidepPlayer  :url="url"></VidepPlayer>
      <div class="changeVideoWrapper">
        <div class="closeItemWrpper">
          <div @click="changeEduVideoList(0,28)" :class="{ heightLight: getEduObj.key>=0 && getEduObj.key<=28 }" class="closeItem">1-28集</div>
          <div @click="changeEduVideoList(28,56)" :class="{ heightLight: getEduObj.key>28 && getEduObj.key<=56 }"class="closeItem">29-56集</div>
          <div @click="changeEduVideoList(56,86)" :class="{ heightLight: getEduObj.key>56 && getEduObj.key<=86 }"class="closeItem">57-86集</div>
        </div>
        <div class="closeAllItemWrapper">
          <template v-for="v in getEduVideoTlist">
            <div  :url="v.url" :key_1="v.key" :name="v.name" :class="{ heightLight: getEduObj.key == v.key }" class="closeItem">{{v.key}}</div>
          </template>
        </div>
      </div>
    </div>


      <div class="videoArticleTitle">
        区块链100问-第{{getEduObj.key}}集 &nbsp;  {{getEduObj.name}}
      </div>
    </div>
</template>

<script>
    import  VidepPlayer from './VidepPlayer'
    export default {
        name: "video-article",
        components:{
          VidepPlayer
        },
      computed:{
        geteEduVideoAllList:function () {
          return this.$store.getters.geteEduVideoAllList
        },
        getEduVideoTlist:function () {
          return this.$store.getters.getEduVideoTlist
        },
        getEduObj:function () {
          return this.$store.getters.getEduObj
        }
      },
      data:function () {
        return{
          url:null,
          isChange:false
        }
      },
      methods:{
        changeEduVideoList:function (lndex,lastIndex) {
          var obj = {
            lndex:lndex,
            lastIndex:lastIndex
          }
          this.$store.commit('changeEduVideoList',obj);
        }
      },
      watch:{
        getEduObj:function (val) {
          this.url = val.url;
        }
      },
      mounted:function () {
        let _this = this;
        _this.$store.commit('setVideoObj');
        $('.closeItemWrpper  .closeItem').click(function () {
          $('.closeItemWrpper  .closeItem').removeClass('heightLight');
          $(this).addClass('heightLight');
          $('.closeAllItemWrapper  .closeItem').removeClass('heightLight');
        })

        $(document).on('click','.closeAllItemWrapper  .closeItem',function () {
          $('.closeAllItemWrapper  .closeItem').removeClass('heightLight');
          $(this).addClass('heightLight');
          _this.isChange = !_this.isChange;
          _this.url = $(this).attr('url');
          var obj = {
            url:$(this).attr('url'),
            key:$(this).attr('key_1'),
            name:$(this).attr('name'),
          }
          _this.$store.commit('setVideoObj',obj);
        });

        var key = _this.getEduObj.key;
        var obj = {
          lndex:null,
          lastIndex:null
        }
        if(key>=1 && key<=28){
          obj.lndex = 0;
          obj.lastIndex = 28;
        }else if(key>=28 && key<=56){
          obj.lndex = 28;
          obj.lastIndex = 56;
        }else if(key>=56 && key<=86){
          obj.lndex = 56;
          obj.lastIndex = 86;
        }
        if(this.geteEduVideoAllList.length){
          this.$store.commit('changeEduVideoList',obj);
        }else{
          this.$store.dispatch('actionEduVideoList',obj);
        }
      }
    }
</script>

<style lang="scss">
  @media screen and (min-width: 1700px) {
    .videoArticle{
      margin-top: 200px;
    }
  }
  @media screen and (max-width: 1700px) {
    .videoArticle{
      transform:scale(0.85,0.85) !important;
      margin-top: 100px;
    }
  }
.videoArticle{
   width:1200px;
   height:600px;
   background:rgba(23,30,38,1);
   margin: 0 auto;
   position: relative;
   .videoArticleTitle{
     position: absolute;
     bottom: 74px;
     left: 24px;
   }
   .changeVideoWrapper{
     width: 402px;
     float: left;
     padding: 30px 50px 0px 50px;
     .closeItemWrpper{
       width: 100%;
       height: 54px;
       border-bottom:2px solid rgba(255,255,255,0.2);
       margin-bottom: 24px;
       .closeItem{
         width:70px;
         height:30px;
         background:rgba(43,51,60,1);
         border-radius:1px;
         float: left;
         line-height: 30px;
         font-size:14px;
         cursor: pointer;
       }
       .heightLight{
         color: RGBA(26, 121, 255, 1);
       }
       .closeItem:nth-child(2){
         margin: 0 46px;
       }
     }
     .closeAllItemWrapper{
       width: 100%;
       .closeItem{
         width:50px;
         height:30px;
         background:rgba(43,51,60,1);
         border-radius:1px;
         float: left;
         margin-right: 34px;
         margin-bottom: 24px;
         line-height: 30px;
         font-size:14px;
       }
       .heightLight{
         color: transparent;
         background:rgba(43,51,60,1)  url("../../../assets/edu/SVideoPlayer.png") no-repeat center center;
       }
       .closeItem:nth-child(4n){
         margin-right: 0px;
       }
     }
     .closeAllItemWrapper:after{
       clear: both;
       height: 0px;
       content: " ";
       display: block;
     }
    }
 }
</style>
