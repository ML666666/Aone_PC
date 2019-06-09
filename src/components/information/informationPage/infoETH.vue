<template>
  <div>
    <moneyDetail></moneyDetail>
    <moneyKLine></moneyKLine>
    <info></info>
    <introduction></introduction>
    <news></news>
  </div>
</template>

<script>
  import info from '../infoComponent/info'
  import introduction from '../infoComponent/introduction'
  import moneyDetail from '../infoComponent/moneyDetail'
  import news from '../infoComponent/news'
  import moneyKLine from '../infoComponent/moneyKLine'
  export default {
    name: "info-e-t-h",
    components:{
      info,
      introduction,
      moneyDetail,
      news,
      moneyKLine,
    }
  }
</script>

<style scoped>

</style>
