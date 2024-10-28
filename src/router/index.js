import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SumOutput from "../views/SumOutput.vue";
import SecretPage from "../views/SecretPage.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/login", component: LoginView },
  { path: "/sumOutput", component: SumOutput },
  {
    path: "/secretPage",
    name: "SecretPage",
    component: SecretPage,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem("authenticated");
      if (isAuthenticated) {
        next();
      } else {
        next({ name: "Login" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
