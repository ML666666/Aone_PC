
<template>
    <div class="Interpretation">
      <tips>解读</tips>
      <template v-if="list.length>0">
        <vue-scroll>
          <template v-for="v in list">
            <router-link tag="a" :to="{name:'InterpretationDetail',query:{ id : v.id}}">
              <div class="InterpretationItem">
                <img v-if="!v.img" class="InterpretationItemImg" src="../../../assets/market/marketDefault.png" />
                <img v-if="v.img" class="InterpretationItemImg" :src="v.img" />
                <div class="textContainer">
                  <div class="title">
                    {{v.big_title}}
                  </div>
                  <p class="about">
                    <span style="float: left">{{v.cdate}}</span>
                    <span  style=" display:none; float: right; margin-right: 24px;">
                   <img style="margin-right: 5px" src="../../../assets/market/eyes.png" height="12" width="18"/>6320</span>
                  </p>
                </div>
              </div>
            </router-link>
          </template>
        </vue-scroll>
      </template>
      <template v-else>
        <Nothing></Nothing>
      </template>
    </div>
</template>

<script>
  import axios from "axios";
  import qs from "qs";
  import gob from "../../../store/config.js";
  import  tips from '../../AppCommon/tips'
  import Nothing from '../../AppCommon/Nothing_2'
  let timer_2 = null;
    export default {
       name: "interpretation",
       components:{
          tips,
          Nothing
        },
       data:function () {
          return{
            list:[],
            page:1,
          }
        },
       beforeDestroy:function () {
         clearInterval(timer_2);
       },
       mounted:function () {
           let _this = this;
          this.getData(1);

          timer_2 = setInterval(function () {

            var barHeight =  ($('.Interpretation .__bar-is-vertical').css('height'));
            var scorllTop =  ($('.Interpretation .__bar-is-vertical').css('transform'));
            var viewHeight = parseInt($('.Interpretation').height());
            scorllTop = scorllTop.toString().substring(scorllTop.lastIndexOf(',')+1,scorllTop.lastIndexOf(")"));
           // console.log((parseInt(scorllTop)+parseInt(barHeight)+viewHeight/20) +"/"+ viewHeight )
            if((parseInt(scorllTop)+parseInt(barHeight)+viewHeight/20)>viewHeight){
              _this.getData();
            }
          },500);
        },
       methods:{
          getData(index){
             if(index){
             var obj = {
               page:1,
               size:10,
               type:2,
               language:localStorage.getItem('language')
             }
             let newObj = gob.getSign(obj);
             let _this  = this;
             axios.post(gob.apiUrl + '/Api/News/news',qs.stringify(newObj)).then(function (res) {
               for (var i = 0;i<res.data.re.length;i++){
                 var index  = res.data.re[i].cdate.indexOf(" ");
                 res.data.re[i].cdate = res.data.re[i].cdate.substring(0,index);
                 if(res.data.re[i].img){
                   res.data.re[i].img = gob.webUrl + res.data.re[i].img;
                 }
               }
               _this.list = res.data.re;
               _this.$store.commit('setInterpreTationList',_this.list)
             });
           }else{
               var obj = {
                 page:this.page,
                 size:10,
                 type:2,
                 language:localStorage.getItem('language')
               }
               let newObj = gob.getSign(obj);
               let _this  = this;
               axios.post(gob.apiUrl + '/Api/News/news',qs.stringify(newObj)).then(function (res) {
                 for (var i = 0;i<res.data.re.length;i++){
                   var index  = res.data.re[i].cdate.indexOf(" ");
                   res.data.re[i].cdate = res.data.re[i].cdate.substring(0,index);
                   if(res.data.re[i].img){
                     res.data.re[i].img = gob.webUrl + res.data.re[i].img;
                   }
                   _this.list.push(res.data.re[i]);
                 }
                 _this.page++;
                 _this.$store.commit('setInterpreTationList',_this.list)
               });
           }
          }
        },
       computed:{
         getLanguageType:function () {
           return this.$store.getters.getLanguageType;
         },
       },
       watch:{
         getLanguageType:function (val) {
           this.getData(1);
         }
       }
    }
</script>

<style lang="scss">
  @media screen and (min-width: 1700px) {
    .Interpretation{
      width: 624px;
    }
  }
  @media screen and (max-width: 1700px) {
    .Interpretation{
      width: 600px;
      transform:scale(0.9,0.9) !important;
    }
  }
.Interpretation{
  height: 772px;
  background:rgba(23,30,38,1);
  margin: 0 auto;
  position: relative;
  float: right;
  padding-top: 14px;
  .InterpretationItem{
    width: 100%;
    height: 146px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    padding-left: 24px;
    padding-top: 25px;
    padding-bottom: 25px;
    .InterpretationItemImg{
      width:148px;
      height:96px;
      float: left;
      display: inline-block;
      margin-right: 24px;
    }
    .textContainer{
      width: 402px;
      height: 96px;
      float: left;
      .title{
        font-size: 16px;
        text-align: left;
        margin-bottom: 55px;
        height: 21px;
        padding-right: 10px;
      }
    }
  }
}
</style>
