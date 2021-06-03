import { createRouter, createWebHistory } from "vue-router";

import simple from "../views/simple.vue";
import complex from "../views/complex.vue";
const routes = [
  {
    path: "/",
    name: "simple",
    component: simple,
  },
  {
    path: "/complex",
    name: "complex",
    component: complex,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
