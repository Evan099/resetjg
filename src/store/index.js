import Vue from 'vue'
import Vuex from 'vuex'
import {reqCreatProFirst} from "../api";

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  state:{//状态,只有mutations才有权利直接修改state
    projectTypeArr:['0'],
    projectWriteStatus:0,
    companyId:null,

    initData:null,
    userInfo:JSON.parse(sessionStorage.getItem('userInfo'))
  },


  mutations:{//不能在此处做异步操作

    projectTypeArrChange(state,val){
      state.projectTypeArr = val
    },
    projectWriteStatusChange(state,val){
      state.projectWriteStatus = val
    },
    companyIdChange(state,val){
      state.companyId = val
    },

    initDataChange(state,val){
      state.initData = val
    },

    // userInfoChange(state,val){
    //   state.userInfo = val
    // }
  },


  actions:{//供做异步操作用，先提交到mutations，由mutations修改state,不能直接修改state
    addOne(context,val){
      setTimeout(()=>{
        context.commit('add',val)
      },1000)
    },

    async getArea(context){
      const rs = await reqCreatProFirst({})
      context.commit('initDataChange',rs.data)
    }

  },

  getters:{//1、可对store中的已有的数据交工处理之后形成新的数据，类似vue中的计算属性2、strore中数据发生变化，getter的数据也会跟着变化

  }


})

export default store
