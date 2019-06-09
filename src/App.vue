
<!--<script src="components/AppCommon/w.js"></script>-->
<template>
  <div class="app">
  <!--<vue-scroll>-->
  <div id="app">
      <AppTopBar v-if="$router.isBottomShow"></AppTopBar>
      <AppLeftBar v-if="$router.isBottomShow"></AppLeftBar>
      <transition name="vux-pop-nor"  mode="out-in">
        <router-view/>
      </transition>
  </div>
    <changeLanguageBlock></changeLanguageBlock>
  <!--</vue-scroll>-->
  </div>
</template>

<script>
import AppTopBar from './components/AppCommon/AppTopBar'
import AppLeftBar from './components/AppCommon/AppLeftBar'
import changeLanguageBlock from './components/AppCommon/changeLanguageBlock'
export default {
  name: 'App',
  components:{
    AppTopBar,
    AppLeftBar,
    changeLanguageBlock
  },
  mounted:function () {
    if(!localStorage.getItem('language')){
      setTimeout(function () {
        $('.tradingMask').fadeIn();
      },200)
    }
    this.$store.commit('SetLanguage');
  },
}
</script>

<style lang="scss">
  @media screen and (min-width: 1700px) {
    #app {
      min-width: 1580px;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 1700px) {
    html{
      overflow-x: hidden;
    }
    #app {
      min-width: 1243px;
      margin: 0 auto;
      min-height: 800px;
    }
  }
*{
  margin: 0px;
  padding: 0px;
  font-family:MicrosoftYaHei;
}
body{
  background: #080808;
}
#app {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  .__vuescroll .__panel.__native{
    background: #171E26;
  }
  a{
    color: #fff;
    text-decoration: none;
  }
}
#app *{
  box-sizing: border-box;
}
.commomWrapper{
  background:rgba(23,30,38,1);
  position: relative;
}
.__vuescroll .__panel.__native{
  background: #000000;
}

.vux-pop-in-enter-active,
.vux-pop-in-leave-active,
.vux-up-out-enter-active,
.vux-up-out-leave-active,
.vux-pop-nor-enter-active,
.vux-pop-nor-leave-active,
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 250ms;
}

.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%,0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%,0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%,0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%,0, 0);
}

.vux-up-out-enter {
  transform: translate3d(0,-100%, 0);
}

.vux-up-out-leave-active {
  transform: translate3d(0, 100%, 0);
}

.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%,0, 0);
}

.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%,0, 0);
}

.vux-pop-nor-enter {
  will-change: transform;
  opacity: 0;
}

.vux-pop-nor-leave-active {
  will-change: transform;
  opacity: 0;
}

</style>
