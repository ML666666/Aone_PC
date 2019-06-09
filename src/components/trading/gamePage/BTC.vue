<template>
    <div>
      <div style="float: left;margin-right: 60px">
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
        name: "b-t-c",
        components:{
          EcharBlock,
          gameList,
          gameDetail
        },
        mounted(){
          var obj = {
            status:"last_data HTbtccny",
            isClose:false
          }
          this.$store.dispatch('actionGetGameStatus',obj);
        }
    }
</script>

<style scoped>

</style>
