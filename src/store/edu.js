import gob from "./config";
import axios from "axios";
import qs from "qs";
const state = {
   allVideoList:[],
   TVideoList:[],
   eduObj:{},
   eduArticleList:[],
   eduArticleObj:null,
   eduStep:0,
   InterpreTationList:[],
}

const getters = {
   getEduVideoTlist:state=>state.TVideoList,
   geteEduVideoAllList:state=>state.allVideoList,
   getEduObj:state=>state.eduObj,
   getEduArticleList:state=>state.eduArticleList,
   getEduArticleObj:state=>state.eduArticleObj,
   getEduStep:state=>state.eduStep,
   getInterpreTationList:state=>state.InterpreTationList
}

const mutations = {
  setInterpreTationList:async ({ dispatch, commit, getters }, data) => {
      state.InterpreTationList  = data;
  },
  aboutAone:async ({ dispatch, commit, getters }, data) => {
    if(data){
      state.eduStep = 0;
    }else {
      state.eduStep++;
      if(state.eduStep == 9){
        state.eduStep = 0;
      }
    }
  },
  getEduVideoList:async ({ dispatch, commit, getters }, data) => {
    var obj = {
    }
    let newObj = gob.getSign(obj);
    axios.post(gob.apiUrl + '/Api/Video/index',qs.stringify(newObj)).then(function (res) {
      for(var i = 0; i<res.data.re.length;i++){
        var obj = res.data.re[i];
        if(obj.name.indexOf("_")>0){
          obj.name = obj.name.substring(0,obj.name.indexOf("_"));
        }else{
          obj.name = obj.name.substring(0,obj.name.lastIndexOf("."));
        }

      }
     state.allVideoList = res.data.re;
      if(data){
        state.TVideoList = state.allVideoList.slice(data.lndex,data.lastIndex);
      }else{
        state.TVideoList = state.allVideoList.slice(0,20);
      }
    });
  },
  changeEduVideoList:async ({ dispatch, commit, getters }, data) => {
    if(state.allVideoList.length){
      state.TVideoList = state.allVideoList.slice(data.lndex,data.lastIndex);
    }
  },
  setVideoObj:async ({ dispatch, commit, getters }, data) => {
    if(data){
      state.eduObj = data;
      localStorage.setItem('videoObj',JSON.stringify(data));
    }else{
      state.eduObj = JSON.parse(localStorage.getItem('videoObj'));
    }
  },
  getEduArticle:async ({ dispatch, commit, getters }, data) => {
    let obj = {
      type:1,
      language:localStorage.getItem('language')
    }
    let newObj = gob.getSign(obj);
    axios.post(gob.apiUrl + '/Api/News/news',qs.stringify(newObj)).then(function (res) {
      for(var i = 0; i<res.data.re.length;i++){
        if( res.data.re[i].img ){
          res.data.re[i].img = gob.apiUrl + res.data.re[i].img;
        }
      }
      state.eduArticleList = res.data.re;
    });
  },
  setEduArticle:async ({ dispatch, commit, getters }, data) => {
     if(data){
       for(var i = 0; i<state.eduArticleList.length;i++){
         if(state.eduArticleList[i].id == data){
           state.eduArticleObj = state.eduArticleList[i];
         }
       }
     }else {
       state.eduArticleObj = state.eduArticleList[0];
     }
  }
}

const actions = {
  actionEduVideoList(context,data){
    this.commit('getEduVideoList',data);
  },
  actionEduArticle(context,data){
    this.commit('getEduArticle',data);
  },
}
export default {
  state,
  getters,
  mutations,
  actions
}
