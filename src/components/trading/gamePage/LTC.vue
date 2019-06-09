<template>
  <div>
    <div  class="InfoDetaillWrapper" style="float: left;margin-right: 60px">
      <EcharBlock></EcharBlock>
      <gameList></gameList>
    </div>
    <gameDetail></gameDetail>
  </div>
</template>

<script>
  import  EcharBlock from '../gameComponent/EcharBlock'
  import  gameDetail from '../gameComponent/gameDetail'
  import  gameList from '../gameComponent/gameList'
  export default {
    name: "l-t-c",
    components:{
      EcharBlock,
      gameList,
      gameDetail
    },
    mounted(){
      var obj = {
        status:"last_data HTltccny",
        isClose:false
      }
      this.$store.dispatch('actionGetGameStatus',obj);
    }
  }
</script>

<style scoped>

</style>
