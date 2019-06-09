<template>
    <div v-if="language" class="AppLeftBar">


      <div
           v-bind:class="{ 'heightLight': $router.nowPage == 'information'  }"
           @click="changePage(0)"
           class="BarItem_1 AppLeftBarItem BarItem">
        <router-link tag="span" :to="{name:'information',query:{id:'BTC'}}">{{language.appBar.market}}</router-link>
        <div @click="toInfo" class="heightLightItem"></div>
        <div class="TypeBlock" id="info">
          <div v-bind:class="{ 'ItemHeight': $route.query.id == 'BTC' || $route.query.id == null }"  class="TypeBlockItem">
            <router-link tag="span" :to="{name:'information',query:{id:'BTC'}}">BTC</router-link>
          </div>
          <div v-bind:class="{ 'ItemHeight': $route.query.id == 'LTC' }"  class="TypeBlockItem">
            <router-link tag="span"  :to="{name:'information',query:{id:'LTC'}}">LTC</router-link>
          </div>
          <div v-bind:class="{ 'ItemHeight': $route.query.id == 'ETH' }"  class="TypeBlockItem">
            <router-link tag="span"  :to="{name:'information',query:{id:'ETH'}}">ETH</router-link>
          </div>
        </div>
      </div>


      <div
           v-bind:class="{ 'heightLight': $router.nowPage == 'education' || $router.nowPage == 'eduVideoDetail' || $router.nowPage == 'educationDetail' }"
           class="AppLeftBarItem BarItem BarItem_2"
           @click="toEdu()" >
        <router-link tag="span" :to="{name:'education'}">{{language.appBar.education}}</router-link>
        <div class="heightLightItem"></div>
      </div>


      <div
            @click="tomarket()"
            v-bind:class="{ 'heightLight': $router.nowPage == 'market' }"
            class="AppLeftBarItem BarItem BarItem_3">
        <router-link tag="span" :to="{name:'market'}">{{language.appBar.information}}</router-link>
        <div class="heightLightItem"></div>
      </div>


      <div
           v-bind:class="{ 'heightLight': $router.nowPage == 'BTC' || $router.nowPage == 'LTC' || $router.nowPage == 'ETH' }"
           class="AppLeftBarItem BarItem BarItem_4">
        <router-link tag="span" :to="{name:'BTC'}">C2C</router-link>
        <div @click="toBtc()" class="heightLightItem"></div>
        <div class="TypeBlock" id="game">
          <div  v-bind:class="{ 'ItemHeight': $router.nowPage == 'BTC' }" class="TypeBlockItem gameItem">
            <router-link tag="span" :to="{name:'BTC'}">BTC</router-link>
          </div>
          <div  v-bind:class="{ 'ItemHeight': $router.nowPage == 'LTC' }" class="TypeBlockItem gameItem">
            <router-link tag="span" :to="{name:'LTC'}">LTC</router-link>
          </div>
          <div  v-bind:class="{ 'ItemHeight': $router.nowPage == 'ETH' }" class="TypeBlockItem gameItem">
            <router-link tag="span" :to="{name:'ETH'}">ETH</router-link>
          </div>
        </div>
      </div>
    </div>


</template>

<script>
    export default {
    // <!--@media screen and (max-width: 1300px){-->
    // <!--.AppLeftBar{-->
    // <!--transform: scale(0.75,0.75) !important;-->
    // <!--.TypeBlock{-->
    // <!--right: -40px;-->
    // <!--}-->
    // <!--.BarItem_1{-->
    // <!--top: 216px !important;;-->
    // <!--}-->
    // <!--.BarItem_2{-->
    // <!--top: 383px !important;-->
    // <!--}-->
    // <!--.BarItem_3{-->
    // <!--top: 541px !important;-->
    // <!--}-->
    // <!--.BarItem_4{-->
    // <!--top: 718px !important;-->
    // <!--}-->
    // <!--}-->
    // <!--}-->
        name: "app-left-bar",
        mounted:function () {

          $('.gameItem').click(function () {
            $('.gameItem').removeClass('ItemHeight');
            $(this).addClass('ItemHeight');
          });

          $('#info .TypeBlockItem').click(function () {
            $('#info .TypeBlockItem').removeClass('ItemHeight');
            $(this).addClass('ItemHeight');
          })

        },
        methods:{
          toInfo:function () {
            this.$router.push({name:'information',query:{id:'BTC'}})
          },
          tomarket:function () {
            this.$router.push({'name':'market'})
          },
          toEdu:function () {
             this.$router.push({'name':'education'})
          },
          toBtc:function () {
            this.$router.push({'name':'BTC'})
          },
          changePage:function (index) {
            // $('.BarItem').removeClass('heightLight');
            // $('.BarItem').eq(index).addClass('heightLight');
          }
        },
        computed:{
         language:function () {
           return this.$store.getters.getLanguage;
         },
       },
    }
</script>

<style lang="scss">

  @media screen and (min-width: 1700px){
    .AppLeftBar{
      .TypeBlock{
        right: -47px !important;
      }
      .BarItem_1{
        top: 216px !important;
      }
      .BarItem_2{
        top: 393px !important;
      }
      .BarItem_3{
        top: 571px !important;
      }
      .BarItem_4{
        top: 748px !important;
      }
    }
  }
  @media screen and (max-width: 1700px) {
    .AppLeftBar{
      transform: scale(0.8,0.8) !important;
      .TypeBlock{
        right: -40px;
      }
      .BarItem_1{
        top: 186px !important;;
      }
      .BarItem_2{
        top: 353px !important;
      }
      .BarItem_3{
        top: 511px !important;
      }
      .BarItem_4{
        top: 688px !important;
      }
    }
  }
.AppLeftBar{
  position: fixed;
  left: 0px;
  top:0px;
  z-index: 6000;
  .AppLeftBarItem{
    cursor: pointer;
    position: absolute;
    left: 0px;
    top: 266px;
    height:24px;
    font-size:16px;
    line-height:24px;
    width: 72px;
    text-align: right;
    padding-right: 8px;
    .heightLightItem{
      position: absolute;
      width: 14px;
      height: 16px;
      border-left: 2px solid transparent;
      right: -4px;
      top: 50%;
      /* background: #fff; */
      -webkit-transform: translateY(-45%);
      transform: translateY(-45%);
      -webkit-transition: 0.3s;
      transition: 0.3s;
      display: block;
    }

    .TypeBlock{
      height: 130px;
      /* width: 75px; */
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      display: none;
      left: 64px;
      .TypeBlockItem{
        font-size: 14px;
        transition: 0.3s;
      }
      .TypeBlockItem:hover{
        color: #1A79FF;
      }
      .ItemHeight{
        color: #1A79FF;
        text-decoration: underline;
      }
      .TypeBlockItem:nth-child(2){
        margin: 33px auto;
      }
    }
  }
  .heightLight:hover{
    .TypeBlock{
      display: block;
    }
  }
  .heightLight{
    .heightLightItem{
      border-right:2px solid rgba(26,121,255,1);
    }
  }
}
</style>
