<template>
<div class="step_1Wrapper step_6_C">

  <!--英文-->
  <template v-if="index == 1">
    <div style="width: 105px;" class="step_1">
      {{language[0]}}
      <img style="left: 119px;" src="../../assets/AppCommon/guideLine_2.png" height="155" width="88"/>
      <p style="width: 448px;">{{language[1]}}
        <span style="position: absolute; top: -120px; right: -10px;">
         <close></close>
       </span>
      </p>
    </div>
    <div style="margin-left: 468px">
      <makeSureBtn></makeSureBtn>
    </div>
  </template>

  <!--中文-->
  <template v-if="index == 0 || index == 2">
    <div  class="step_1">
      {{language[0]}}
      <img src="../../assets/AppCommon/guideLine_2.png" height="155" width="88"/>
      <p style="width: 200px;">{{language[1]}}
        <span style="position: absolute; top: -120px; right: -10px;">
         <close></close>
       </span>
      </p>
    </div>
    <div style="margin-left: 356px;">
      <makeSureBtn></makeSureBtn>
    </div>
  </template>

  <!--日文-->
  <template v-if="index == 3">
    <div  class="step_1">
      {{language[0]}}
      <img src="../../assets/AppCommon/guideLine_2.png" height="155" width="88"/>
      <p>{{language[1]}}
        <span style="position: absolute; top: -120px; right: -10px;">
         <close></close>
       </span>
      </p>
    </div>
    <div style="margin-left: 468px">
      <makeSureBtn></makeSureBtn>
    </div>
  </template>
</div>
</template>

<script>
  import  close from './close'
  import makeSureBtn from './makeSureBtn'
    export default {
        name: "step_6",
        components:{
          makeSureBtn,
          close
        },
      data:function () {
        return{
          index:localStorage.getItem('languageIndex'),
        }
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
            var left = parseInt($('.BarItem_3 ').css('left'));
            var top  = parseInt($('.BarItem_3 ').css('top'));
            $(".step_6_C").css('top',top-120).css('left',left-10);
          }else{
            var left = parseInt($('.BarItem_3 ').css('left'));
            var top  = parseInt($('.BarItem_3 ').css('top'));
            $(".step_6_C").css('top',top).css('left',left+10);
          }
        }
      },
      computed: {
        language: function () {
          return this.$store.getters.getLanguage.eduMask.step_6
        },
      }
    }
</script>

<style lang="scss">
  @media screen and (min-width: 1700px) {
    .step_6_C{;
    }
  }
  @media screen and (max-width: 1700px) {
    .step_6_C{
      transform: scale(0.8, 0.8)  !important;
    }
  }
.step_1Wrapper{
  width:156px;
  height:120px;
  position: fixed;
  left: 8px;
  .step_1{
    background: RGBA(6, 6, 6, 1);
    position: relative;
    width:78px;
    height:60px;
    border:1px solid rgba(255,255,255,1);
    border-radius: 51%;
    text-align: center;
    line-height: 60px;
    margin-bottom: 64px;
    img{
      position: absolute;
      width: 176px;
      height: auto;
      top: 18px;
      left: 87px;
    }
    p{
      text-align: left;
      width:520px;
      font-size:20px;
      font-family:HYShiGuangTiW !important;
      color:rgba(255,255,255,1);
      line-height:24px;
      position: absolute;
      top: 24px;
      left: 280px;
    }
  }
}
</style>
