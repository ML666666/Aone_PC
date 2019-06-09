<template>
<div class="gameDetail">
  <gameDetailTop>
  </gameDetailTop>
  <gameDetailTading>
  </gameDetailTading>
</div>
</template>

<script>
  import gameDetailTop from './gameDetail/gameDetailTop'
  import gameDetailTading from './gameDetail/gameDetailTading'
    export default {
        name: "game-detail",
        components:{
          gameDetailTop,
          gameDetailTading
        }
    }
</script>

<style scoped>
  @media screen and (min-width: 1700px) {
    .gameDetail{
      width:672px;
      height:772px;
      background:rgba(23,30,38,1);
      float: right;
    }
  }
  @media screen and (max-width: 1700px) {
    .gameDetail{
      width:653px;
      height:772px;
      background:rgba(23,30,38,1);
      float: right;
    }
  }
</style>
