import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/banner",
    component: () => import("./pages/BannerDoc.vue"),
  },
  {
    path: "/button",
    component: () => import("./pages/ButtonDoc.vue"),
  },
  {
    path: "/input",
    component: () => import("./pages/InputDoc.vue"),
  },
  {
    path: "/",
    redirect: "/button", // or whichever should be the default
  },
];

export const router = createRouter({
  history: createWebHistory("/REGO/"),
  routes,
});
