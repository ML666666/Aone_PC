<template>
<div class="tradingWrapper">
  <transition name="vux-pop-nor"  mode="out-in">
    <router-view/>
  </transition>
</div>
</template>

<script>
    export default {
        name: "trading"
    }
</script>

<style lang="scss">

  @media screen and (min-width: 1700px) {
    .tradingWrapper{
      width: 1566px;
      height: 772px;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 1700px) {
    .tradingWrapper{
      width: 1308px;
      height: 772px;
      margin: 0 auto;
      transform:scale(0.85, 0.85) translateY(-67px) !important
    }
  }


</style>
