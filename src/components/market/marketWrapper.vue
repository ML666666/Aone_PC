<template>
  <div class="marketWrapperContainer">
    <market></market>
    <Interpretation></Interpretation>
  </div>
</template>

<script>
  import market from './marketComponents/market'
  import Interpretation from './marketComponents/Interpretation'
  export default {
    name: "market-wrapper",
    components:{
      market,
      Interpretation
    }
  }
</script>

<style lang="scss">

  @media screen and (min-width: 1700px) {
    .marketWrapperContainer{
      width: 1338px;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 1700px) {
    .marketWrapperContainer{
      width: 1250px;
      margin: 0 auto;
      transform:scale(0.85, 0.85) translateY(-117px) !important
    }
  }

.marketWrapperContainer:after{
  display: block;
  clear: both;
  height: 0px;
  content: " ";
}
</style>
