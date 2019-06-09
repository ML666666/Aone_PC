<template>
    <div v-if="language" class="Nothing_2">
      <img style="display:block;
      margin: 0 auto;
      margin-top: 250px;
      margin-bottom: 20px;
      " src="../../assets/AppCommon/Nothing.png" height="124" width="160"/>
      <p style="text-align: center"> ～{{language.MainPahe.No_data}}～</p>
    </div>
</template>

<script>
    export default {
        name: "nothing",
      computed: {
        getTransactionList: function () {
          return this.$store.getters.getTransactionList;
        },
        language:function () {
          return this.$store.getters.getLanguage
        },
      },
    }
</script>

<style lang="scss">
.Nothing_2{
  background:rgba(23,30,38,1);

}
</style>
