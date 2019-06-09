<template>
    <div class="infoContainer">
      <!--{{$route.query.id}}-->
      <transition name="vux-pop-nor"  mode="out-in">
        <infoBTC v-if="id == 'BTC' "></infoBTC>
        <infoETH v-if="id == 'LTC' "></infoETH>
        <infoLTC v-if="id == 'ETH' "></infoLTC>
      </transition>


    </div>
</template>
<script>
    import  infoBTC from  './informationPage/infoBTC'
    import  infoETH from  './informationPage/infoETH'
    import  infoLTC from  './informationPage/infoLTC'

    export default {
        name: "information",
        components:{
          infoBTC,
          infoETH,
          infoLTC
        },
        mounted:function () {
          if(this.$route.query.id){
            this.id = this.$route.query.id;
          }else{
            this.$router.replace({ name: 'information',query:{id:'BTC'}});
          }
        },
        data:function () {
          return{
            id:null
          }
        },
        watch:{
          $route(){
            this.id = this.$route.query.id;
          }
        }
    }
</script>

<style lang="scss">
  @media screen and (min-width: 1700px) {
    .infoContainer{
      width: 1566px;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 1700px) {
    .infoContainer{
      width: 1308px;
      margin: 0 auto;
      transform: scale(0.85, 0.85) translateY(-67px) !important;
    }
  }
.infoContainer:after{
  display: block;
  clear: both;
  content: " ";
  height: 0px;
}
</style>
