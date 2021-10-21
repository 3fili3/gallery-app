import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/router"
import store from "./store/store"
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
