// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store";


Vue.use(Vuex)
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.config.productionTip = false


let token = sessionStorage.getItem("token")
axios.defaults.headers.common['authorization'] = token
axios.defaults.headers.common['systemLable'] = 'scjg'



//定义一个监听本地sessionStrong实时变化的全局方法
Vue.prototype.resetSetItem = function (key, newVal) {
  if (key === 'watchStorage') {

    // 创建一个StorageEvent事件
    var newStorageEvent = document.createEvent('StorageEvent');
    const storage = {
      setItem: function (k, val) {
        sessionStorage.setItem(k, val);

        // 初始化创建的事件
        newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);

        // 派发对象
        window.dispatchEvent(newStorageEvent)
      }
    }
    return storage.setItem(key, newVal);
  }
}





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
