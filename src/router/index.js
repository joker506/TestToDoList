import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "All",
    component: () => import(/* webpackChunkName: "home" */ "../views/All.vue"),
  },
  {
    path: "/active",
    name: "Active",
    component: () =>
      import(/* webpackChunkName: "active" */ "../views/Active.vue"),
  },
  {
    path: "/completed",
    name: "Completed",
    component: () =>
      import(/* webpackChunkName: "completed" */ "../views/Completed.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
