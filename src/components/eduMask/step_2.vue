<template>
  <div class="step_2Wrapper">

    <div style="position: fixed; right: 30px; top: 35px">
      <close></close>
    </div>
    <!--中文-->
   <template v-if="index == 0 || index == 2">
     <div style="transform: translateX(0px)" class="step_2">{{language[0]}}
       <img src="../../assets/AppCommon/guideLine_1.png" />
       <p style="
             position: absolute;
             top: 66px;
              right: 27px;
          ">{{language[1]}}</p>
       <div style="position: absolute;
             right: 100px;
             top: 300px;">
         <makeSureBtn></makeSureBtn>
       </div>
     </div>
   </template>

    <!--英文-->
    <template v-if="index == 1">
      <div style="" class="step_2">{{language[0]}}
        <img src="../../assets/AppCommon/guideLine_1.png" />
        <p style="
             position: absolute;
             top: 66px;
              right: 27px;
          ">{{language[1]}}</p>
        <div style="position: absolute;
             right: 100px;
             top: 300px;">
          <makeSureBtn></makeSureBtn>
        </div>
      </div>
    </template>

    <!--日文-->
    <template v-if="index == 3">
      <div style="transform: translateX(0px)" class="step_2">{{language[0]}}
        <img src="../../assets/AppCommon/guideLine_1.png" />
        <p style="
             position: absolute;
             top: 66px;
              right: 27px;
          ">{{language[1]}}</p>
        <div style="position: absolute;
             right: 100px;
             top: 300px;">
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
    name: "step_2",
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
          var left = parseInt($('#changeLanguage').offset().left);
          var top  = parseInt($('#changeLanguage').offset().top);
          $(".step_2").css('marginTop',top-5).css('marginLeft',left-50);
        }else{
          var left = parseInt($('#changeLanguage').offset().left);
          var top  = parseInt($('#changeLanguage').offset().top);
          $(".step_2").css('marginTop',top).css('marginLeft',left-170);
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
        return this.$store.getters.getLanguage.eduMask.step_2
      },
    }
  }
</script>

<style lang="scss">
  @media screen and (min-width: 1700px) {
    .step_2Wrapper{
      width: 1580px;
    }
  }
  @media screen and (max-width: 1700px) {
    .step_2Wrapper{
      width: 1280px;
      transform: scale(0.8, 0.8)  !important;
    }
  }
  .step_2Wrapper{
    margin: 0 auto;
    position: relative;
    .step_2{
      width:78px;
      height:60px;
      border:1px solid rgba(255,255,255,1);
      border-radius: 51%;
      text-align: center;
      line-height: 60px;
      /*margin-left: 941px;*/
      /*margin-top: 5px;*/
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
      width: 250px;
      height: 24px;
      font-size: 20px;
      font-family: HYShiGuangTiW;
      color: white;
      line-height: 24px;
      text-align: left;
      margin-left:  760px;
    }
  }
</style>
