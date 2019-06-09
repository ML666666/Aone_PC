<template>
  <div v-if="language" id="changeLanguage" style="display: none" class="tradingMask animated bounceIn" >
    <div class="MakeSureTrading">
      <div class="MakeSureTradingTop">
        <template>{{language.changeLanguage.title}}</template>
        <img @click="hide" src="../../assets/info/close.png" height="30" width="30"/>
      </div>
      <div class="MakeSureTradingTopBody">
        <div class="setLanguage"  v-bind:class="{ 'active': getLanguageType == 'English' }" @click="setLanguage(0,1)">
          EN
          <div class="radius"><div class="innert"></div></div>
        </div>
        <div class="setLanguage" v-bind:class="{ 'active': getLanguageType == 'chinese' }"  @click="setLanguage(1,0)">
          简体中文
          <div class="radius"><div class="innert"></div></div>
        </div>
        <div class="setLanguage" v-bind:class="{ 'active': getLanguageType == 'upChinese' }"  @click="setLanguage(2,2)">
          繁體中文
          <div class="radius"><div class="innert"></div></div>
        </div>
        <div class="setLanguage"  v-bind:class="{ 'active': getLanguageType == 'Japanese' }"   @click="setLanguage(3,3)">
          日本语
          <div class="radius"><div class="innert"></div></div>
        </div>
      </div>
      <div  class="MakeSureTradingButtom" @click="changeLanguage">
        <template>{{language.changeLanguage.Sava}}</template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed:{
      isChinese:function () {
        return this.$store.getters.getIsChinese
      }
    },
    data:function () {
      return{
        LanguageType:this.isChinese?"0":"1"
      }
    },
    computed:{
      language:function () {
        return this.$store.getters.getLanguage
      },
      getLanguageType:function () {
        return this.$store.getters.getLanguageType;
      },
    },
    methods:{
      setLanguage:function (index,TypeInde) {
        $('.setLanguage').removeClass('active');
        $('.setLanguage').eq(index).addClass('active');
        this.LanguageType = TypeInde;
      },
      hide:function () {
        $('.tradingMask').fadeOut();
        // $('html').css('overflow','scroll');
      },
      changeLanguage:function () {
        $('.tradingMask').fadeOut();
        // $('html').css('overflow','scroll');
        this.$store.dispatch('actionsSetLanguage',this.LanguageType)
      },
      Login:function () {
        this.$router.push('trading');
      }
    }
  }
</script>

<style scoped>
  .tradingMask{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background:rgba(0,0,0,0.85);
    z-index: 4000;
  }
  .tradingMask .MakeSureTrading{
    width:500px;
    background:RGBA(23, 30, 38, 1);
    position: absolute;
    top: 210px;
    left: 50%;
    margin-left: -250px;
  }
  .MakeSureTradingButtom{
    width:200px;
    height:42px;
    background:linear-gradient(90deg,rgba(121,173,245,1) 0%,rgba(26,121,255,1) 100%);
    border-radius:21px;
    display: block;
    margin: 0 auto;
    text-align: center;
    line-height: 42px;
    margin-top:50px;
    color: #fff;
    margin-bottom: 128px;
    cursor: pointer;
  }
  .tradingMask .MakeSureTrading .MakeSureTradingTop{
    height:74px;
    position: relative;
    font-size: 16px;
    line-height: 74px;
    color: #fff;
    background:RGBA(41, 46, 50, 1);
    text-align: center;
  }
  .MakeSureTradingTop img{
    position: absolute;
    top:22px !important;
    right: 22px;
    width: 30px;
    height: auto;
    cursor: pointer;
  }
  .MakeSureTradingTopBody{
  }
  .MakeSureTradingTopBody .setLanguage{
    height: 70px;
    border-bottom: 1px solid RGBA(243, 241, 241, 1);
    text-align: left;
    line-height: 70px;
    position: relative;
    color: #fff;
    font-size:16px;
    padding-left: 60px;
    padding-right: 60px;
    cursor: pointer;
  }
  .MakeSureTradingTopBody .setLanguage .radius{
    width: 1rem;
    height:1rem;
    border-radius: 50%;
    border: 1px solid RGBA(151, 151, 151, 1);
    position: absolute;
    top: 50%;
    right: 60px;
    transform: translateY(-50%);
  }
  .MakeSureTradingTopBody .setLanguage .radius .innert{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0.6rem;
    height: 0.6rem;
    transform: translate(-50%,-50%);
    background: RGBA(151, 151, 151, 0);
    border-radius: 50%;
  }
  .MakeSureTradingTopBody .active .radius{
    border:1px solid RGBA(26, 121, 255, 1);
  }
  .MakeSureTradingTopBody .active .radius .innert{
    background: RGBA(26, 121, 255, 1);
  }
  .MakeSureTradingTopBody .setLanguage:last-child{
    border:none;
  }
</style>
