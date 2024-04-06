//Router index.js

// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/projects",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Projects",
        component: () =>
          import(/* webpackChunkName: "shop" */ "@/views/Projects.vue"),
      },
    ],
  },
  {
    path: "/posts",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Posts",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Posts.vue"),
      },
    ],
  },
  {
    path: "/about",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "shop" */ "@/views/About.vue"),
      },
    ],
  },
  {
    path: "/other",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Other",
        component: () =>
          import(/* webpackChunkName: "shop" */ "@/views/Other.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
      },
      {
        path: "forgotPassword",
        name: "ForgotPassword",
        component: () =>
          import(
            /* webpackChunkName: "forgotPassword" */ "@/views/ForgotPassword.vue"
          ),
      },
      {
        path: "otp",
        name: "OTP",
        component: () =>
          import(/* webpackChunkName: "otp" */ "@/views/OTP.vue"),
      },
      {
        path: "resetPassword",
        name: "ResetPassword",
        component: () =>
          import(
            /* webpackChunkName: "resetPassword" */ "@/views/ResetPassword.vue"
          ),
      },
      {
        path: "/register",
        name: "Register",
        component: () =>
          import(
            /* webpackChunkName: "resetPassword" */ "@/views/Register.vue"
          ),
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;