import Vue from 'vue'
import Vuex from 'vuex'
import mainPage from './mainPage'
import Language from './Language'
import information from  './information'
import Login from  './Login'
import memberCenter from  './memberCenter'
import edu from  './edu'
Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    mainPage: mainPage,
    Language: Language,
    Login: Login,
    memberCenter:memberCenter,
    information:information,
    edu:edu
  }
})
