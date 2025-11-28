import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: () => import("../views/PrivacyPolicy.vue"),
    },
    {
      path: "/terms-of-service",
      name: "terms-of-service",
      component: () => import("../views/TermsOfService.vue"),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
