<template>
  <div  style="z-index: 2000" class="MaskShow" >
    <p>{{language.Processing_System}}....</p>
    <el-progress :percentage="percentage"></el-progress>
  </div>
</template>

<script>
    export default {
        name: "echar-mask",
        mounted:function () {
          if(this.getTime){
            this.gametime = this.getTime;
          }else{
            this.gametime = 10;
          }

          // switch (this.gametime){
          //   case 1:
          //     this.speech = 10;
          //     break;
          //   case 2:
          //     this.speech = 20;
          //     break;
          //   case 3:
          //     this.speech = 30;
          //     break;
          //   case 4:
          //     this.speech = 40;
          //     break;
          //   case 5:
          //     this.speech = 50;
          //     break;
          //   case 6:
          //     this.speech = 60;
          //     break;
          //   case 7:
          //     this.speech = 70;
          //     break;
          //   case 8:
          //     this.speech = 80;
          //     break;
          //   case 9:
          //     this.speech = 90;
          //     break;
          //   case 10:
          //     this.speech = 100;
          //     break;
          // }
          var _this = this;
          this.timer = setInterval(function () {
             _this.percentage++;
          },this.gametime*10);
        },
        data:function () {
          return{
            timer:null,
            percentage:0,
            speech:0,
            gametime:0
          }
        },
       computed:{
         getTime:function () {
           return this.$store.getters.getTime
         },
         language:function () {
           if(this.$store.getters.getLanguage)
             return this.$store.getters.getLanguage.MainPahe;
         },
       },
      watch:{
        percentage:function (val,oldval) {
          if(val == 99){
            this.percentage++;
            clearInterval(this.timer);
          }
        }
      }
    }
</script>

<style lang="scss">

  @media screen and (min-width: 1700px) {
    .MaskShow{
      width:834px;
    }
  }

  @media screen and (max-width: 1700px) {
    .MaskShow{
      width: 595px;
    }
  }


  .MaskShow{
    height:400px;
    position: absolute;
    top:0px;
    left: 0px;
    display: block;
    background: rgba(23,30,38,1);
    padding: 0 80px;
    text-align: center;
    p{
      color: #409eff;
      margin-top:180px;
      margin-bottom: 5px;
    }
    .el-progress__text{
      color: #409eff;
    }
  }
</style>
