import Vue from "vue";
import Router from "vue-router";

import AuthLayout from "@/layout/AuthLayout";
import Login from "./views/authView/Login.vue";

import MainLayout from "./layout/MainLayout.vue";
import HomePage from "./views/mainView/HomePage.vue";
import Inquiry from "./views/mainView/Registration/Registration.vue";

Vue.use(Router);
export default new Router({
  linkExactActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "login",
      component: AuthLayout,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem("user") != null) {
          next("/home");
        } else {
          next();
        }
      },
      children: [
        {
          path: "/login",
          name: "Login",
          component: Login,
          props: true,
        },
      ],
    },
    {
      path: "/home",
      redirect: "home",
      component: MainLayout,
      beforeEnter: (to, from, next) => {
        console.log(sessionStorage.getItem("username"));
        if (sessionStorage.getItem("user") === null) {
          next("/login");
        } else {
          next();
        }
      },
      children: [
        {
          path: "/home",
          component: HomePage,
        },
        {
          path: "/registration",
          component: Inquiry,
        },
      ],
    },
  ],
});
