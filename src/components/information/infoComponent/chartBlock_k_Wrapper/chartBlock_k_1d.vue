<template>
  <div id="ECanvas">

  </div>
</template>

<script>
  let echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/line');
  require('echarts/lib/chart/bar');
  require('echarts/lib/component/tooltip');
  let ws = null;
    export default {
        name: "chart-block_k_1d",
      mounted:function () {
        var _this = this;
        ws = new WebSocket('wss://t9.senhet.com:8890');
        ws.onopen = () => {
          var status = "last_kdata2 HT"+this.type.toLowerCase()+"cny 30";
          ws.send(status);
        }
        ws.onmessage = evt => {
          if(JSON.parse(evt.data).length){
            for(var i = 0; i<48; i++){
               var data = JSON.parse(evt.data)[i];
               this.Tlist.unshift(data.Close);
               // var s = data.Date.substring(data.Date.indexOf(" "));
               // this.Date.unshift(s.substring(0,s.lastIndexOf(":")));
              this.Date.unshift(data.Date);
               var t = [];
               t.push(i);
               t.push(data.Volume);
               var isUp = data.Open>data.Close?1:-1;
               t.push(isUp);
               this.Volume.unshift(t);
            }
          }
          this.list = this.Tlist;
        }
        ws.onclose = function () {
        }
      },
      beforeDestroy:function () {
        ws.close();
      },
      computed: {
        language:function () {
          return this.$store.getters.getLanguage.infoPageDetail;
        }
      },
      watch:{
        list:function (val) {
          if(val.length){
            this.option.series[0].name = this.language.name;
            this.option.series[1].name = this.language.Volume;
            this.option.series[0].data = val;
            this.option.series[1].data = this.Volume;
            this.option.xAxis[0].data = this.Date;
            this.option.xAxis[1].data = this.Date;
            let dom =  document.getElementById('ECanvas');
            this.myChart = echarts.init(dom);
            this.myChart.setOption(this.option);
          }
        }
      },
      data:function () {
       return{
         Tlist:[],
         list:[],
         Date:[],
         Volume:[],
         option:{
           backgroundColor:"#171E26",
           grid: [
             {
               width:"92%",
               left: '0%',
               right: '8%',
               height: '90%',
               top:'5%'
             },
             {
               width:"91%",
               left: '0%',
               right: '0%',
               top: '69.5%',
               height: '25%'
             }
           ],
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
             xAxis: [{
             type: 'category',
             boundaryGap: false,
             data: null,
             splitLine:{
               show:false,
               lineStyle:{
                 color:"RGBA(255, 255, 255, 1)",
               }
             },
             axisLine:{
               lineStyle:{
                 color:'RGBA(255, 255, 255, 1)'
               }
             },
             axisLabel:{
               color:'#fff',
               rotate:"65",
               // formatter: function (value, index) {
               //   var s = value.substring(value.indexOf(" "));
               //   return s.substring(0,s.lastIndexOf(":"));
               // }
               formatter: function (value, index) {
                 // return value.substring(0,value.lastIndexOf("-"))
                 return " ";
               }
             },
           },
             {
               type: 'category',
               gridIndex: 1,
               data: null,
               scale: true,
               boundaryGap : false,
               lineStyle:{
                 color:"RGBA(255, 255, 255, 0.2)",
               },
               axisLine: {
                 onZero: false,
                 lineStyle:{
                   color:'RGBA(255, 255, 255, 0.5)'
                 }
               },
               axisTick: {show: false},
               splitLine: {show: false},
               axisLabel: {show: false},
               splitNumber: 20,
               min: 'dataMin',
               max: 'dataMax'
             }
             ],
           yAxis: [{
             position:"right",
             boundaryGap: [0, '50%'],
             type: 'value',
             splitLine:{
               show:true,
               lineStyle:{
                 color:"RGBA(255, 255, 255, 0.6)",
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
               padding:[0,0,0,10]
             },
             max: function(value) {
               return (value.max * 1.1).toFixed(0);
             },
             min: function(value) {
               return (value.min * 0.9).toFixed(0);
             }
           },
             {
               scale: true,
               gridIndex: 1,
               splitNumber: 2,
               axisLabel: {show: false},
               axisLine: {show: false},
               axisTick: {show: false},
               splitLine: {show: false}
             }
             ],
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
                 normal: {
                   color: {
                     type: 'linear',
                     x: 0,
                     y: 0,
                     x2: 0,
                     y2: 1,
                     colorStops: [{
                       offset: 0, color: 'RGBA(32, 97, 190, 1)' // 0% 处的颜色
                     }, {
                       offset: 1, color: 'RGBA(32, 97, 190, 1)' // 100% 处的颜色
                     }],
                     globalCoord: false // 缺省为 false
                   }
                 }
               },
               data:null
             },
             {
               name: 'Volume',
               type: 'bar',
               xAxisIndex: 1,
               yAxisIndex: 1,
               data: null,
               itemStyle:{
                 color:["RGBA(57, 63, 77, 1"]
               }
             }
           ]
         }

      }
      },
      props: ['type'],
    }
</script>

<style scoped>
  #ECanvas{
    width: 100%;
    height: 100%;
  }
  #ECanvas >>>　div{
    position: absolute !important;
    overflow: auto !important;
  }
  #ECanvas div{
    position: absolute !important;
    overflow: auto !important;
  }
</style>
