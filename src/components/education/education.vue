<template>
<div class="educationWrapper">
  <Article_1></Article_1>
  <Video_1></Video_1>
</div>
</template>

<script>
    import Article_1 from './eduComponent/Article'
    import Video_1 from './eduComponent/Video'
    export default {
        name: "education",
        components:{
          Article_1,
          Video_1
        }
    }
</script>

<style scoped>
  @media screen and (min-width: 1700px) {
    .educationWrapper{
      height:700px;
      width: 1308px;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 1700px) {
    .educationWrapper{
      height:700px;
      width: 1250px;
      margin: 0 auto;
      transform:scale(0.85, 0.85) translateY(-117px) !important
    }
  }

</style>
