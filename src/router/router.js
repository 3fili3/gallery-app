import Route from "vue-router";
import Vue from "vue";
Vue.use(Route);

import ViewMain from "../views/ViewMain.vue";
import SaveImage from "../views/saveImage.vue";
export default new Route({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "view-main",
      component: ViewMain,
    },
    {
      path: "/save-image",
      name: "save-image",
      component: SaveImage,
    },
  ],
});
