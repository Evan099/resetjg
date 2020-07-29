import Vue from 'vue'
import Vuex from 'vuex'
//挂载Vuex
Vue.use(Vuex)

import {reqCreatProFirst} from "../api";
import {reqShowProvance} from "../api";

//创建VueX对象
const store = new Vuex.Store({
  state:{//状态,只有mutations才有权利直接修改state
    projectType:[],//项目类型数组
    projectWriteStatus:'0',//用于显示基本/重点/竣工模块
    companyId:null,//公司id
    basicId:null,//项目id(==projectId)
    oneProjectInfo:{},//单个项目信息

    insertProSkipData:{},//初始化各种select option数据和申报年度申报状态等信息[通用]
    userInfo:JSON.parse(sessionStorage.getItem('userInfo')),//用户信息[通用]
    enterpriseConditionData:{},//市州列表数据[通用]
    enterpriseConditionCountyOneDate:{},//市州变化获取的一条区县[通用]
    buttonControl:{}
  },


  mutations:{//不能在此处做异步操作

    projectTypeChange(state,val){
      state.projectType = val
    },
    projectWriteStatusChange(state,val){
      state.projectWriteStatus = val
    },
    companyIdChange(state,val){
      state.companyId = val
    },

    insertProSkipChange(state,val){
      state.insertProSkipData = val
    },

    enterpriseConditionDataChange(state,val){
      state.enterpriseConditionData = val
    },

    enterpriseConditionCountyDataChange(state,val){
      state.enterpriseConditionCountyOneDate = val
    },

    basicIdChange(state,val){
      state.basicId = val
    },

    oneProjectInfoChange(state,val){
      state.oneProjectInfo = val
    },

    buttonControlChange(state,val){
      state.buttonControl = val
    }

  },


  actions:{//供做异步操作用，先提交到mutations，由mutations修改state,不能直接修改state

    async getInsertProSkip(context){//获取下拉select等通用数据
      const rs = await reqCreatProFirst({})
      context.commit('insertProSkipChange',rs.data)
    },

    async getPriseConditionData(context){//获取市州
      const rs = await reqShowProvance({})
      context.commit('enterpriseConditionDataChange',rs.data)
    },

    async getPriseConditionCountyData(context,code){//获取区县
      const rs = await reqShowProvance({code})
      context.commit('enterpriseConditionCountyDataChange',rs.data)
    }


  },

  getters:{//1、可对store中的已有的数据交工处理之后形成新的数据，类似vue中的计算属性2、strore中数据发生变化，getter的数据也会跟着变化

  }



})



export default store
