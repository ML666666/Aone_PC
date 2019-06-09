<template>
  <div class="step_3Wrapper">

    <div style="position: fixed; right: 30px; top: 35px">
      <close></close>
    </div>
    <!--中文-->
    <template v-if="index == 0 || index == 2">
      <div style="width: 140px; margin-left: 1230px;" class="step_3">{{language[0]}}
        <img src="../../assets/AppCommon/guideLine_1.png" />
        <p style="position: absolute;top: 100px;right: 0px">{{language[1]}}</p>
        <div style="position: absolute;top: 380px;right: 160px">
          <makeSureBtn></makeSureBtn>
        </div>
      </div>
    </template>


    <!--英文-->
    <template v-if="index == 1">
      <div style="width: 140px; margin-left: 1230px;" class="step_3">{{language[0]}}
        <img src="../../assets/AppCommon/guideLine_1.png" />
        <p style="position: absolute;top: 100px;right: 0px">{{language[1]}}</p>
        <div style="position: absolute;top: 380px;right: 160px">
          <makeSureBtn></makeSureBtn>
        </div>
      </div>
    </template>


    <!--日文-->
    <template v-if="index == 3">
      <div style="width: 140px; margin-left: 1230px;" class="step_3">{{language[0]}}
        <img src="../../assets/AppCommon/guideLine_1.png" />
        <p style="position: absolute;top: 100px;right: 0px">{{language[1]}}</p>
        <div style="position: absolute;top: 380px;right: 160px">
          <makeSureBtn></makeSureBtn>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
  import close from './close'
  import makeSureBtn from './makeSureBtn'
  export default {
    name: "step_3",
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
          var left = parseInt($('#toGetApp').offset().left);
          var top  = parseInt($('#toGetApp').offset().top);
          $(".step_3").css('marginTop',top).css('marginLeft',left+40);
        }else{
          var left = parseInt($('#toGetApp').offset().left);
          var top  = parseInt($('#toGetApp').offset().top);
          $(".step_3").css('marginTop',top).css('marginLeft',left-170);
        }
      }
    },
    data:function () {
      return{
        index:localStorage.getItem('languageIndex'),
      }
    },
    computed: {
      language: function () {
        return this.$store.getters.getLanguage.eduMask.step_3
      },
    }
  }
</script>

<style lang="scss">
  @media screen and (min-width: 1700px) {
    .step_3Wrapper{
    }
  }
  @media screen and (max-width: 1700px) {
    .step_3Wrapper{
      transform: scale(0.8, 0.8)  !important;
    }
  }
  .step_3Wrapper{
    width: 1580px;
    margin: 0 auto;
    position: relative;
    .step_3{
      width:78px;
      height:60px;
      border:1px solid rgba(255,255,255,1);
      border-radius: 51%;
      text-align: center;
      line-height: 60px;
      margin-left: 1300px;
      margin-top: 5px;
      position: relative;
      background: RGBA(6, 6, 6, 1);
      img{
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
      margin-left: 996px;
    }
  }
</style>
