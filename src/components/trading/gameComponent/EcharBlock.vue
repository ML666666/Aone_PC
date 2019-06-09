
<template>
  <div class="EcharBlockWrapper">
    <div
      v-loading="true"
      element-loading-text="loading..."
      element-loading-background="rgba(23,30,38,1)"
      class="CanvasMask">
    </div>

    <transition name="vux-pop-nor"  mode="out-in">
      <EchartMask v-if="isMaskShow"></EchartMask>
    </transition>

    <div id="Canvas" ref="myEchart">
    </div>
    <span class="time_0 time">1<b>s</b></span>
    <span class="time_1 time">30<b>s</b></span>
    <span class="time_2 time">90<b>s</b></span>
  </div>
</template>

<script>
  import EchartMask from './EcharMask'
  import  ErrorTips from '../../../store/ErrorTips.js';
  let echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/line');
  require('echarts/lib/component/tooltip');
  var base = +new Date(2014, 9, 3);
  var oneDay = 24 * 3600 * 1000;
  var date = [];

  var data = [];
  var now = new Date(base);

  for (var i = 1; i <=90; i++) {
    date.push(i+'s');
  }
  export default {
    name: "echart-block",
    components:{
      EchartMask
    },
    beforeCreate:function () {

    },
    mounted:function () {
    },
    methods:{
      panStart:function () {
      },
      panEnd:function () {
      }
    },
    watch:{
      getGameTips:function (val,oldval) {
        if(val ==  ErrorTips.getErrorTipsObj().System_processing){
          this.isMaskShow = true;
        }else{
          this.isMaskShow = false;
        }
      },
      Echartdata:function(val,oldval){
        if(this.isFrist){
          this.option.series[0].data = val.toString().split(",");
          let dom =  document.getElementById('Canvas');
          this.myChart = echarts.init(dom);
          this.myChart.setOption(this.option);
          this.isFrist = false;
          this.myChart.setOption({
            series: [{
              data: val.toString().split(",")
            },
            ]
          });
        }else{
          if(this.getGameTips ==  ErrorTips.getErrorTipsObj().In_the_order){
           this.$store.dispatch('actionTransactionList');
           this.$store.dispatch('actionWinningPercentage');
          }
          this.myChart.setOption({
            series: [{
              data: val.toString().split(",")
            },
            ]
          });
        }
      },
      getHistory:function(val,oldval){
        if(val.length){
          var obj = {
            status:"last_data HT"+this.$router.nowPage.toLowerCase()+"cny",
            isClose:false
          }
          this.$store.dispatch('actiongetEchartData',obj);
        }
      },
    },
    data:function () {
      return{
        isMaskShow:false,
        size:60,
        isFrist:true,
        isFrist_2:true,
        time:1,
        myChart:[],
        option:{
          animation:'true',
          backgroundColor:"#171E26",
          grid:{
            width:'85%',
            height:'88%',
            top:'4%',
            left:'13%'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#777'
              },
            },
            backgroundColor: 'rgba(245, 245, 245, 0.8)',
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            textStyle: {
              align:'left',
              color: '#000'
            },
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date,
            splitLine:{
              show:true,
              lineStyle:{
                color:"RGBA(255, 255, 255, 0)",
              }
            },
            axisLine:{
              lineStyle:{
                color:'RGBA(255, 255, 255, 1)'
              }
            },
            axisLabel:{
              show:false,
              color:'#fff',
              formatter: function (value, index) {
                return value;
              }
            }
          },
          yAxis: {
            boundaryGap: [0, '50%'],
            type: 'value',
            splitLine:{
              show:true,
              lineStyle:{
                color:"RGBA(255, 255, 255, 0.1)",
              }
            },
            axisLine:{
              lineStyle:{
                color:'RGBA(255, 255, 255, 1)'
              }
            },
            axisLabel:{
              color:'#fff',
              fontSize:12,
              padding:[0,10,0,0]
            },
            max: function(value) {
              return (value.max * 1.001).toFixed(0);
            },
            min: function(value) {
              return (value.min * 0.999).toFixed(0);
            }
          },
          series: [
            {
              name:'Price',
              type:'line',
              smooth:true,
              symbol: 'none',
              stack: 'a',
              itemStyle: {
                normal: {
                  color:'RGBA(26, 119, 248, 1)'
                }
              },
              areaStyle: {
                animation:'true',
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                      offset: 0, color: 'RGBA(32, 97, 190, 1)' // 0% 处的颜色
                    }, {
                      offset: 1, color: 'RGBA(32, 97, 190, 1)' // 100% 处的颜色
                    }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                }
              },
              data:null
            },
          ]
        }
      }
    },
    computed:{
      Echartdate:function () {
        return this.$store.getters.getEchartdate;
      },
      Echartdata:function () {
        return this.$store.getters.getEchartdata;
      },
      getGameTips:function () {
        return this.$store.getters.getGameTips;
      },
      getHistory:function () {
        return this.$store.getters.getHistory
      },
    },
  }
</script>

<style lang="scss">

  @media screen and (min-width: 1700px) {
    .EcharBlockWrapper{
      width:834px;
      .CanvasMask{
        width:834px;
      }
      #Canvas{
        width:794px;
        height:300px;
        float: right;
        margin-right: 30px;
      }
      .time_0{
        left: 106px !important;
      }
      .time_1{
        left: 329px !important;
      }
      .time_2{
        left: 779px !important;
      }
    }
  }

  @media screen and (max-width: 1700px) {
    .EcharBlockWrapper{
      width: 595px;
      .CanvasMask{
        width: 595px;
      }
      #Canvas{
        width:535px;
        height:300px;
        float: right;
        margin-right: 30px;
      }
      .time_0{
        left: 98px !important;
      }
      .time_1{
        left: 244px !important;
      }
      .time_2{
        left: 541px !important
      }
    }
  }



  .EcharBlockWrapper{
  height:400px;
  background:rgba(23,30,38,1);
  margin-bottom: 60px;
  padding-top: 60px;
  position: relative;
  .el-loading-mask{
    background: rgba(23,30,38,1);
  }
  .CanvasMask{
    height:400px;
    position: absolute;
    top:0px;
    left: 0px;
    display: block;
  }
  .time{
    position: absolute;
    bottom: 30px;
    color: #fff;
    font-size:12px;
    b{
      font-weight: 100;
    }
  }
}
</style>
