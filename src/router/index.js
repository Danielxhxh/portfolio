import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/home.vue"),
    },
    {
      path: "/projects",
      component: () => import("../views/projects.vue"),
    },
    {
      path: "/about",
      component: () => import("../views/about.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/404.vue"),
    },
  ],
});
