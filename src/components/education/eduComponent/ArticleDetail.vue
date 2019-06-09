<template>
  <div class="articleDetail">
       <p class="title"> {{getEduArticleObj.big_title}}</p>
       <p class="date">
         {{getEduArticleObj.cdate}}
       </p>
       <div class="articContainer" v-html="getEduArticleObj.small_title">
         {{getEduArticleObj.small_title}}
       </div>
  </div>
</template>

<script>
    export default {
        name: "article-detail",
      mounted:function () {
        if(this.getEduArticleList.length){
          this.$store.commit('setEduArticle',this.$route.query.id);
        }else{
          this.$store.dispatch('actionEduArticle');
        }
      },
      computed:{
        getEduArticleList:function () {
          return this.$store.getters.getEduArticleList
        },
        getEduArticleObj:function () {
          return this.$store.getters.getEduArticleObj
        }
      },
      watch:{
        getEduArticleList:function (val,oldval) {
          if(val.length){
            this.$store.commit('setEduArticle',this.$route.query.id);
          }
        }
      }
    }
</script>

<style lang="scss">

  @media screen and (min-width: 1700px) {
  }
  @media screen and (max-width: 1700px) {
    .articleDetail{
      transform:scale(0.85,0.85) !important;
    }
  }

  .articleDetail{
    width:1000px;
    min-height:760px;
    background:rgba(23,30,38,1);
    margin: 0 auto;
    padding: 30px 130px 30px 130px;
    text-align: center;

    .title{
      font-size:18px;
      margin-bottom: 12px;
    }
    .date{
      font-size: 12px;
      margin-bottom: 24px;
    }
    .articContainer{
        *{
          font-size:14px;
          text-align: left;
        }
        img{
          width:246px;
          height:148px;
          margin: 24px auto;
        }
    }
  }
</style>
