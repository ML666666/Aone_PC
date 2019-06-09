<template>
    <div class="Nothing">
      <img style="margin-top: 250px; margin-bottom: 20px" src="../../assets/AppCommon/Nothing.png" height="124" width="160"/>
      <p> ～{{language.MainPahe.No_data}}～</p>
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
.Nothing{
  width:880px;
  height:700px;
  background:rgba(23,30,38,1);
}
</style>
