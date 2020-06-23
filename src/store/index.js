import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
  state:{//状态,只有mutations才有权利直接修改state
    name:'999',
    num:0
  },


  mutations:{//不能在此处做异步操作
    changeSelect(state,val){
      state.name = val
    },
    add(state,val){
      state.num+=val
    }
  },


  actions:{//供做异步操作用，先提交到mutations，由mutations修改state,不能直接修改state
    addOne(context,val){
      setTimeout(()=>{
        context.commit('add',val)
      },1000)
    }
  },

  getters:{//1、可对store中的已有的数据交工处理之后形成新的数据，类似vue中的计算属性2、strore中数据发生变化，getter的数据也会跟着变化

  }


})

export default store
