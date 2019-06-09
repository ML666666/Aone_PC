<template>
  <div class="step_8WrapperContainer">
    <div class="step_8Wrapper">
      <div style="position: absolute; left: 50%; transform: translateX(-50%);  top: 280px;">
        <makeSureBtn></makeSureBtn>
      </div>
    <span style="position: absolute;top: -50px; right: -60px"><close></close></span>
    <p class="tips">{{language[0]}}</p>
    <img class="line" src="../../assets/AppCommon/guideLine_3.png" height="80" width="51"/>
    <div class="setHandItem">2{{language[1]}}</div>
    <div class="setHandItem">20{{language[1]}}</div>
    <div class="setHandItem">50{{language[1]}}</div>
    <div class="setHandItem">{{language[2]}}</div>
    </div>
  </div>

</template>

<script>
  import  close from './close'
  import makeSureBtn from './makeSureBtn'
  export default {
    name: "step_8",
    components:{
      makeSureBtn,
      close
    },
    computed: {
      // setHandWrapper
      language: function () {
        return this.$store.getters.getLanguage.eduMask.step_8
      },
    },
    mounted:function () {
      var _this = this;
      this.fixable();
      $(window).resize(function () {
        _this.fixable();
      });
    },
    methods:{
      fixable:function () {
        if($(window).width()<1700){
          var left = parseInt($('.setHandWrapper ').offset().left);
          var top  = parseInt($('.setHandWrapper ').offset().top);
          $(".step_8Wrapper").css('marginTop',top-40).css('marginLeft',left);
        }else{
          var left = parseInt($('.setHandWrapper ').offset().left);
          var top  = parseInt($('.setHandWrapper ').offset().top);
          $(".step_8Wrapper").css('marginTop',top-30).css('marginLeft',left+40);
        }
      }
    },
  }
</script>

<style lang="scss">

  @media screen and (min-width: 1700px) {
   .step_8Wrapper{
     /*margin-top: 601px;*/
     /*margin-right: 227px;*/
   }
  }

  @media screen and (max-width: 1700px) {
    .step_8Wrapper{
      /*margin-top: 281px;*/
      /*margin-right: 100px;*/
      transform: scale(0.8, 0.8)  !important;
    }
  }
  .step_8WrapperContainer{
    position: relative;
  }
  .step_8WrapperContainer:after{
    display: block;
    content: " ";
    height: " ";
    clear: both;
  }
.step_8Wrapper{
  width: 574px;
  height: 106px;
  border: 1px solid white;
  float: right;
  border-radius: 51%;
  padding: 34px;
  padding-left: 38px;
  background: RGBA(12, 14, 17, 1);
  position: absolute;
  .tips{
    position: absolute;
    top: 211px;
    left: 50%;
    width:722px;
    height:24px;
    font-size:20px;
    font-family:HYShiGuangTiW;
    color:rgba(255,255,255,1);
    line-height:24px;
    transform: translateX(-50%);
    text-align: left;
  }
  .line{
    position: absolute;
    top: 109px;
    left: 287px;
    margin-left: -30px;
  }
   .setHandItem{
      display: inline-block;
      float: left;
      width:80px;
      height:40px;
      border-radius:20px;
      border:1px solid rgba(255,255,255,0.8);
      margin-right: 57px;
      line-height: 40px;
      font-size: 14px;
      transition: 0.3s;
    }
   .setHandItem:last-child{
     margin-right: 0px;
   }
}
</style>
