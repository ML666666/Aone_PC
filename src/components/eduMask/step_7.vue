<template>
<div class="step_1Wrapper step_7_C" >

  <!--中文-->
  <template v-if="index == 0 || index == 2">
  <div class="step_1">
    C2C
    <img src="../../assets/AppCommon/guideLine_2.png" height="155" width="88"/>
    <p style="text-align: left;left: 286px; width: 270px;">{{language[0]}}
      <span style="position: absolute; top: -120px; right: -10px;">
         <close></close>
      </span>
    </p>
  </div>
  <div style="margin-left:384px">
    <makeSureBtn></makeSureBtn>
  </div>
</template>

  <template v-else>

    <div class="step_1">
      C2C
      <img src="../../assets/AppCommon/guideLine_2.png" height="155" width="88"/>
      <p style="text-align: left;     left: 286px;">{{language[0]}}
        <span style="position: absolute; top: -120px; right: -10px;">
         <close></close>
      </span>
      </p>
    </div>
    <div style="margin-left:384px">
      <makeSureBtn></makeSureBtn>
    </div>
  </template>

</div>
</template>

<script>
  import  close from './close'
  import makeSureBtn from './makeSureBtn'
    export default {
        name: "step_1",
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
          _this.fixable();
        });
      },
      methods:{
        fixable:function () {
          if($(window).width()<1700){
            var left = parseInt($('.BarItem_4 ').css('left'));
            var top  = parseInt($('.BarItem_4 ').css('top'));
            $(".step_7_C").css('top',top-160).css('left',left-10);
          }else{
            var left = parseInt($('.BarItem_4 ').css('left'));
            var top  = parseInt($('.BarItem_4 ').css('top'));
            $(".step_7_C").css('top',top).css('left',left+10);
          }
        }
      },
      computed: {
        language: function () {
          return this.$store.getters.getLanguage.eduMask.step_7
        },
      }
    }
</script>

<style lang="scss">
  @media screen and (min-width: 1700px) {
    .step_7_C{
      top: 710px;
    }
  }
  @media screen and (max-width: 1700px) {
    .step_7_C{
      top: 539px;
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
