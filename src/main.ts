import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { i18n, initializeI18n } from "./i18n";
import router from "./router";

console.log("Starting app initialization...");

// Initialize i18n and mount app
initializeI18n()
  .then(() => {
    console.log("i18n initialized successfully");
    const app = createApp(App);
    app.use(i18n);
    app.use(router);
    app.config.globalProperties.$t = i18n.global.t;
    app.mount("#app");
    console.log("App mounted successfully");
  })
  .catch((error) => {
    console.error("Failed to initialize app:", error);
  });
