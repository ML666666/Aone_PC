<template>
   <div class="interpretationDetailContainer">
     <vue-scroll>
       <p class="h1">{{obj.big_title}}</p>
       <p class="data">{{obj.cdate}}</p>
       <div class="Detail" v-html="obj.small_title">
          {{obj.small_title}}
       </div>
     </vue-scroll>
   </div>
</template>

<script>
    export default {
        name: "interpretation-detail",
        mounted:function () {
          var _this = this;
          if(this.list.length){
            for (var i = 0; i<this.list.length;i++){
              if(this.$route.query.id == this.list[i].id){
                this.obj = this.list[i];
                break;
              }else{
              }
            }
          }else{
            this.$router.push({'name':"market"})
          }
        },
        data:function () {
          return{
            obj:{}
          }
        },
        computed:{
          list:function () {
            return this.$store.getters.getInterpreTationList
          }
        }
    }
</script>

<style lang="scss">
  @media screen and (min-width: 1700px) {
  }
  @media screen and (max-width: 1700px) {
    .interpretationDetailContainer{
      transform:scale(0.85,0.85) !important;
    }
  }

.interpretationDetailContainer{
  width:1000px;
  height:760px;
  background:rgba(23,30,38,1);
  margin: 0 auto;
  .h1{
    font-size:18px;
    line-height:24px;
    margin-top: 30px;
  }
  .data{
    margin-top: 12px;
    margin-bottom: 24px;
    height:16px;
    font-size:12px;
    line-height:16px;
  }
  .Detail{
    width:756px;
    margin: 0 auto;
    font-size:14px;
    line-height:18px;
    img{
      width:246px;
      height:148px;
      display: block;
      margin: 24px auto;
    }
    p{
      width:756px;
      margin-bottom: 24px;
      line-height: 21px;
      text-align: left;
    }
  }
}
</style>
