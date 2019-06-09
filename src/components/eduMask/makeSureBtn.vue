<template>
<div @click="aboutMe" class="MakeSureBtn">
    {{language.gotIt}}
</div>
</template>

<script>
    export default {
        name: "make-sure-btn",
        methods:{
          aboutMe:function () {
            this.$store.commit('aboutAone');
          },
        },
       computed: {
         language: function () {
           return this.$store.getters.getLanguage.eduMask
         },
       }
    }
</script>

<style scoped>
.MakeSureBtn{
  width:106px;
  height:38px;
  border-radius:20px;
  border:1px solid rgba(255,255,255,1);
  line-height: 38px;
  cursor: pointer;
}
</style>
