<template>
 <div v-if="language" class="ArticleWrapper">
   <tips>{{language.article}}</tips>
   <template v-if="getEduArticleList.length>0">
     <vue-scroll>
       <div class="ArticleItemWrapper">
         <template v-for="v in getEduArticleList">
           <router-link tag="a" :to="{name:'educationDetail',query:{ id : v.id}}">
             <div class="ArticleItem">
               <img class="eduImg" v-if="v.img" :src="v.img" height="372" width="618"/>
               <img class="eduImg" v-else src="../../../assets/edu/eduImg.png" height="372" width="618"/>
               <div class="eduContext">
                 <div class="eduContextTitle">
                   {{v.big_title}}
                 </div>
                 <div class="eduContextData">
                   {{v.cdate | setTime}}
                 </div>
               </div>
             </div>
           </router-link>
         </template>
       </div>
     </vue-scroll>
   </template>
   <template v-else>
     <nothing></nothing>
   </template>
 </div>
</template>

<script>
  import axios from "axios";
  import qs from "qs";
  import gob from "../../../store/config.js";
  import tips from "../../AppCommon/tips"
  import nothing from "../../AppCommon/Nothing_2"
  export default {
    components:{
      tips,
      nothing
    },
      name: "article_1",
      mounted:function () {
        this.$store.dispatch('actionEduArticle');
      },
      computed:{
        getEduArticleList:function () {
          return this.$store.getters.getEduArticleList
        },
        language:function () {
          if(this.$store.getters.getLanguage)
          return this.$store.getters.getLanguage.Edu
        },
        getLanguageType:function () {
          return this.$store.getters.getLanguageType;
        },
      },
     watch:{
       getLanguageType:function (val) {
         this.$store.dispatch('actionEduArticle');
       }
     },
      filters:{
        setTime(value){
          return value.substring(0,value.indexOf(" "));
        }
      }
    }
</script>

<style lang="scss">

  @media screen and (min-width: 1700px) {
  }
  @media screen and (max-width: 1700px) {
    .ArticleWrapper{
      width:624px;
      margin: 0 auto;
      transform:scale(0.85,0.85) !important;
    }
  }

.ArticleWrapper{
  width:624px;
  height:753px;
  background:rgba(23,30,38,1);
  float: left;
  padding-top:7px;
  position: relative;
  a{
    color: #FFF;
  }
  .ArticleItem{
    height: 137px;
    padding: 24px 23px;
    border-bottom:1px solid rgba(255,255,255,0.2);
    cursor: pointer;
    .eduImg{
      display: inline-block;
      width:148px;
      height:90px;
      float: left;
    }
    .eduContext{
      height:90px;
      float: left;
      width: 428px;
      padding-left: 19px;
      padding-top: 45px;
      position: relative;
      .eduContextTitle{
        transform: translateY(-50%);
        text-align: left;
        font-size:16px;
      }
      .eduContextData{
        position: absolute;
        bottom: 0px;
        right: 0px;
        text-align: right;
        font-size:12px;
      }
    }
  }
  a:last-child .ArticleItem{
    border-bottom: none;
  }
}
</style>
