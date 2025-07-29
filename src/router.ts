import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./pages/Introduction.vue"),
  },
  {
    path: "/alert",
    component: () => import("./pages/AlertDoc.vue"),
  },
  {
    path: "/button",
    component: () => import("./pages/ButtonDoc.vue"),
  },
  {
    path: "/input",
    component: () => import("./pages/InputDoc.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
