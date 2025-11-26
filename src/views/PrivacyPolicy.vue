<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import { useI18n } from "vue-i18n";
const { t, tm } = useI18n();
</script>

<template>
  <div class="min-h-screen bg-gray-900 flex flex-col">
    <AppHeader />
    <main class="privacy-content flex-1">
      <h1>{{ t("privacyPolicy.title") }}</h1>
      <p class="updated">{{ t("privacyPolicy.lastUpdated") }}</p>
      <p class="intro">{{ t("privacyPolicy.intro") }}</p>

      <!-- Section 1 -->
      <section>
        <h2>{{ t("privacyPolicy.section1.title") }}</h2>

        <h3>{{ t("privacyPolicy.section1.subtitle1") }}</h3>
        <p>{{ t("privacyPolicy.section1.description1") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('privacyPolicy.section1.items1')"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>

        <h3>{{ t("privacyPolicy.section1.subtitle2") }}</h3>
        <p>{{ t("privacyPolicy.section1.description2") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('privacyPolicy.section1.items2')"
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
        <ul>
          <li
            v-for="(item, index) in tm('privacyPolicy.section3.items')"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Add remaining sections 4-10 -->
      <section>
        <h2>{{ t("privacyPolicy.section4.title") }}</h2>
        <p>{{ t("privacyPolicy.section4.description") }}</p>
      </section>

      <section>
        <h2>{{ t("privacyPolicy.section5.title") }}</h2>
        <p>{{ t("privacyPolicy.section5.description") }}</p>
      </section>

      <section>
        <h2>{{ t("privacyPolicy.section6.title") }}</h2>
        <p>{{ t("privacyPolicy.section6.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('privacyPolicy.section6.items')"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <section>
        <h2>{{ t("privacyPolicy.section7.title") }}</h2>
        <p>{{ t("privacyPolicy.section7.description") }}</p>
      </section>

      <section>
        <h2>{{ t("privacyPolicy.section8.title") }}</h2>
        <p>{{ t("privacyPolicy.section8.description") }}</p>
      </section>

      <section>
        <h2>{{ t("privacyPolicy.section9.title") }}</h2>
        <p>{{ t("privacyPolicy.section9.description") }}</p>
      </section>

      <!-- <section>
        <h2>{{ t("privacyPolicy.section10.title") }}</h2>
        <p>{{ t("privacyPolicy.section10.description") }}</p>
        <p class="contact-info">
          <strong>{{ t("privacyPolicy.section10.company") }}</strong
          ><br />
          {{ t("privacyPolicy.section10.location") }}<br />
          {{ t("privacyPolicy.section10.email") }}
        </p>
      </section> -->
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.privacy-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 60px; /* Increased top padding */
  color: white;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 8px;
  color: #f472b6;
}

.updated {
  color: #888;
  margin-bottom: 20px;
}

.intro {
  color: #d1d5db;
  line-height: 1.7;
  margin-bottom: 40px;
}

section {
  margin-bottom: 48px; /* Increased spacing */
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  margin-top: 24px;
  color: #f472b6;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 12px;
  margin-top: 20px;
  color: #ec4899;
}

p {
  color: #d1d5db;
  line-height: 1.7;
  margin-bottom: 12px;
}

ul {
  margin-top: 12px;
  margin-bottom: 16px;
  padding-left: 24px;
}

li {
  color: #9ca3af;
  margin-bottom: 8px;
  list-style-type: disc;
  line-height: 1.6;
}

.contact-info {
  background: rgba(244, 114, 182, 0.1);
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid #f472b6;
}
</style>
