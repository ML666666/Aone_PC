<template>
  <div class="commomWrapper moneyKLine">
    <div class="changeEchartbar">
      <div class="changeEchartbarItemWrapper">
        <div @click="index = 0" class="changeEchartbarItem active">
          1d
          <div class="activeBlock">1d</div>
        </div>
        <div @click="index = 1" class="changeEchartbarItem">
          1w
          <div class="activeBlock">1w</div>
        </div>
        <div @click="index = 2"class="changeEchartbarItem">
          1mon
          <div class="activeBlock">1mon</div>
        </div>
        <div @click="index = 3"class="changeEchartbarItem">
          all
          <div class="activeBlock">all</div>
        </div>
      </div>
      <div id="canvasWrapper">
        <oneday v-if="index == 0" :type="$route.query.id"></oneday>
        <oneWeek  v-if="index == 1" :type="$route.query.id"></oneWeek>
        <oneMonth  v-if="index == 2" :type="$route.query.id"></oneMonth>
       <oneAll  v-if="index == 3" :type="$route.query.id"></oneAll>
      </div>
    </div>
  </div>
</template>

<script>
  import oneday from './chartBlock_k_Wrapper/chartBlock_k_1d'
  import oneWeek from './chartBlock_k_Wrapper/chartBlock_k_1w'
  import oneMonth from './chartBlock_k_Wrapper/chartBlock_k_1m'
  import oneAll from './chartBlock_k_Wrapper/chartBlock_k_1All'
  let ws = null;
  export default {
    name: "info-chart-block",
    components:{
      oneday,
      oneWeek,
      oneMonth,
      oneAll
    },
    data:function () {
      return{
        index:0,
        type:null
      }
    },
    methods:{
      panStart:function () {
      },
      panEnd:function () {
      }
    },
    mounted:function () {
      $('.changeEchartbarItem').click(function () {
        $('.changeEchartbarItem').removeClass('active');
        $(this).addClass('active');
      })

    },
    beforeDestroy:function () {

    },
  }
</script>

<style lang="scss">
  @media screen and (min-width: 1700px) {
    .moneyKLine{
      width:834px;
    }
    .changeEchartbar #canvasWrapper{
      height: 300px;
      width: 760px;
      margin: 0 auto;
      margin-top: 26px;
    }
  }
  @media screen and (max-width: 1700px) {
    .moneyKLine{
      width: 687px;
    }
    .changeEchartbar #canvasWrapper{
      height: 300px;
      width: 630px;
      margin: 0 auto;
      margin-top: 26px;
    }
  }



  .moneyKLine{
    height:400px;
    float: right;
    margin-bottom: 66px;
    .changeEchartbar{
      height:34px;
      border-radius:20px;
      margin: 0 auto;
      .changeEchartbarItemWrapper{
        width:375px;
        height:34px;
        border-radius:20px;
        margin: 0 auto;
        background:rgba(8,8,8,0.4);
        .changeEchartbarItem{
          display: inline-block;
          width: 25%;
          float: left;
          color: #fff;
          line-height:34px;
          height:34px;
          font-size:12px;
          position: relative;
          cursor: pointer;
          .activeBlock{
            position: absolute;
            width:94px;
            height:34px;
            background:linear-gradient(90deg,rgba(121,173,245,1) 0%,rgba(26,121,255,1) 100%);
            border-radius:20px;
            line-height: 34px;
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
            display: none;
          }
        }
        .active{
          .activeBlock{
            display: block !important;
          }
        }
      }
    }
  }

</style>

