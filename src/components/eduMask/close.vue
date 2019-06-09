<template>
  <img @click="close" class="closeEduMaskBtn" src="../../assets/AppCommon/close.png" />
</template>

<script>
    export default {
        name: "close",
        methods:{
          close:function () {
            this.$store.commit('aboutAone',1);
          }
        }
    }
</script>

<style scoped>
.closeEduMaskBtn{
  display: block;
  width:35px !important;
  height:35px !important;
  cursor: pointer;
}
</style>
