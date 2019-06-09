<template>
  <div class="step_4Wrapper">

    <div style="position: fixed; right: 30px; top: 35px">
      <close></close>
    </div>

    <div class="step_4">
      <img style="margin-top: 9px;" src="../../assets/AppCommon/header_1.png" height="40" width="40"/>
      <img class="line" src="../../assets/AppCommon/guideLine_1.png" />
      <p style="position: absolute;
         right: -61px;
         top: 91px;">{{language[0]}}</p>
      <div style="position: absolute;
           top: 353px;
           right: 114px;">
        <makeSureBtn></makeSureBtn>
      </div>
    </div>
  </div>
</template>

<script>
  import close from './close'
  import makeSureBtn from './makeSureBtn'
  export default {
    name: "step_4",
    components:{
      makeSureBtn,
      close
    },
    mounted:function () {
      var _this = this;
      this.fixable();
      $(window).resize(function () {
        _this.fixable()
      });
    },
    methods:{
      fixable:function () {
        if($(window).width()<1700){
          var left = parseInt($('#toMembers').offset().left);
          var top  = parseInt($('#toMembers').offset().top);
          $(".step_4").css('marginTop',top-0).css('marginLeft',left+80);
        }else{
          var left = parseInt($('#toMembers').offset().left);
          var top  = parseInt($('#toMembers').offset().top);
          $(".step_4").css('marginTop',top).css('marginLeft',left-170);
        }
      }
    },
    computed: {
      language: function () {
        return this.$store.getters.getLanguage.eduMask.step_4
      },
    }
  }
</script>

<style lang="scss">
  @media screen and (min-width: 1700px) {
    .step_4Wrapper{
    }
  }
  @media screen and (max-width: 1700px) {
    .step_4Wrapper{
      transform: scale(0.8, 0.8)  !important;
    }
  }
  .step_4Wrapper{
    width: 1580px;
    margin: 0 auto;
    position: relative;
    .step_4{
      width:78px;
      height:60px;
      border:1px solid rgba(255,255,255,1);
      border-radius: 51%;
      text-align: center;
      line-height: 60px;
      margin-left: 1469px;
      margin-top: 5px;
      position: relative;
      background: RGBA(6, 6, 6, 1);
      .line{
        position: absolute;
        top: 47px;
        left: -87px;
      }
    }
    p{
      margin-top: 160px;
       width: 400px;
      height: 24px;
      font-size: 20px;
      font-family: HYShiGuangTiW;
      color: white;
      line-height: 24px;
      text-align: left;
      margin-left: 1133px;
    }
  }
</style>
