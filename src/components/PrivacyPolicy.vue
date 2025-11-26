<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();
</script>

<template>
  <div class="min-h-screen bg-gray-900">
    <AppHeader />

    <main class="privacy-content">
      <h1>{{ t("privacyPolicy.title") }}</h1>
      <p class="updated">{{ t("privacyPolicy.lastUpdated") }}</p>

      <!-- Section 1 -->
      <section>
        <h2>{{ t("privacyPolicy.section1.title") }}</h2>
        <p>{{ t("privacyPolicy.section1.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('privacyPolicy.section1.items')"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Section 2 -->
      <section>
        <h2>{{ t("privacyPolicy.section2.title") }}</h2>
        <p>{{ t("privacyPolicy.section2.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('privacyPolicy.section2.items')"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Section 3 -->
      <section>
        <h2>{{ t("privacyPolicy.section3.title") }}</h2>
        <p>{{ t("privacyPolicy.section3.description") }}</p>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.privacy-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 20px 60px;
  color: white;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 8px;
  color: #f472b6;
}

.updated {
  color: #888;
  margin-bottom: 40px;
}

section {
  margin-bottom: 32px;
}

h2 {
  font-size: 1.4rem;
  margin-bottom: 12px;
  color: #f472b6;
}

p {
  color: #d1d5db;
  line-height: 1.7;
}

ul {
  margin-top: 12px;
  padding-left: 20px;
}

li {
  color: #9ca3af;
  margin-bottom: 8px;
  list-style-type: disc;
}
</style>
