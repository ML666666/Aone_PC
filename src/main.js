


import Vue from 'vue'
import App from './App'
import {router} from './router'
import Vuex from 'vuex'
import store from './store/store'
Vue.config.productionTip = false
Vue.use(Vuex);

//vuescroll
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';
Vue.use(vuescroll);
Vue.prototype.$vuescrollConfig = {
  vuescroll: {
    mode: 'native',
  },
  bar: {
    background: '#2B333C'
  }
};


// element-ui
import {
  Message,
  Progress,
  Slider,
  Loading,
  MessageBox,
  Dialog,
  Input,
  Button
} from 'element-ui'
Vue.use(Button);
Vue.use(Input);
Vue.use(Dialog);
Vue.component(Message.name, Message);
Vue.prototype.$message = Message;
Vue.use(Progress);
Vue.use(Slider);
Vue.use(Loading);
Vue.component(MessageBox.name, MessageBox);
Vue.prototype.$confirm = MessageBox.confirm;

//VideoPlayer
import 'video.js/dist/video-js.css'
import VueVideoPlayer from 'vue-video-player';
Vue.use(VueVideoPlayer);


import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
