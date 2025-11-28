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

      <!-- Section 1: Information We Collect -->
      <section>
        <h2>{{ t("privacyPolicy.section1.title") }}</h2>

        <h3>{{ t("privacyPolicy.section1.subtitle1") }}</h3>
        <p>{{ t("privacyPolicy.section1.description1") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('privacyPolicy.section1.items1')"
            :key="'s1i1-' + index"
          >
            {{ item }}
          </li>
        </ul>

        <h3>{{ t("privacyPolicy.section1.subtitle2") }}</h3>
        <p>{{ t("privacyPolicy.section1.description2") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('privacyPolicy.section1.items2')"
            :key="'s1i2-' + index"
          >
            {{ item }}
          </li>
        </ul>

        <h3>{{ t("privacyPolicy.section1.subtitle3") }}</h3>
        <p>{{ t("privacyPolicy.section1.description3") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('privacyPolicy.section1.items3')"
            :key="'s1i3-' + index"
          >
            {{ item }}
          </li>
        </ul>

        <h3>{{ t("privacyPolicy.section1.subtitle4") }}</h3>
        <p>{{ t("privacyPolicy.section1.description4") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('privacyPolicy.section1.items4')"
            :key="'s1i4-' + index"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Section 2: How We Use Your Information -->
      <section>
        <h2>{{ t("privacyPolicy.section2.title") }}</h2>
        <p>{{ t("privacyPolicy.section2.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('privacyPolicy.section2.items')"
            :key="'s2-' + index"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Section 3: How We Share Your Information -->
      <section>
        <h2>{{ t("privacyPolicy.section3.title") }}</h2>
        <p>{{ t("privacyPolicy.section3.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('privacyPolicy.section3.items')"
            :key="'s3-' + index"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Section 4: Cookies and Tracking -->
      <section>
        <h2>{{ t("privacyPolicy.section4.title") }}</h2>
        <p>{{ t("privacyPolicy.section4.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('privacyPolicy.section4.items')"
            :key="'s4-' + index"
          >
            {{ item }}
          </li>
        </ul>
        <p>{{ t("privacyPolicy.section4.choices") }}</p>
        <p class="note">{{ t("privacyPolicy.section4.doNotTrack") }}</p>
      </section>

      <!-- Section 5: Data Storage and Security -->
      <section>
        <h2>{{ t("privacyPolicy.section5.title") }}</h2>
        <p>{{ t("privacyPolicy.section5.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('privacyPolicy.section5.items')"
            :key="'s5-' + index"
          >
            {{ item }}
          </li>
        </ul>
        <p class="disclaimer">{{ t("privacyPolicy.section5.disclaimer") }}</p>
      </section>

      <!-- Section 6: Data Retention -->
      <section>
        <h2>{{ t("privacyPolicy.section6.title") }}</h2>
        <p>{{ t("privacyPolicy.section6.description") }}</p>
        <p>{{ t("privacyPolicy.section6.inactive") }}</p>
        <p>{{ t("privacyPolicy.section6.retention") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('privacyPolicy.section6.items')"
            :key="'s6-' + index"
          >
            {{ item }}
          </li>
        </ul>
        <p class="note">{{ t("privacyPolicy.section6.banned") }}</p>
      </section>

      <!-- Section 7: Your Rights and Choices -->
      <section>
        <h2>{{ t("privacyPolicy.section7.title") }}</h2>
        <p>{{ t("privacyPolicy.section7.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('privacyPolicy.section7.items')"
            :key="'s7-' + index"
          >
            {{ item }}
          </li>
        </ul>
        <p>{{ t("privacyPolicy.section7.portabilityNote") }}</p>
        <p>{{ t("privacyPolicy.section7.exercise") }}</p>
        <p>{{ t("privacyPolicy.section7.appeal") }}</p>
        <p>{{ t("privacyPolicy.section7.complaints") }}</p>
      </section>

      <!-- Section 8: Age Restriction -->
      <section>
        <h2>{{ t("privacyPolicy.section8.title") }}</h2>
        <p>{{ t("privacyPolicy.section8.description") }}</p>
      </section>

      <!-- Section 9: International Data Transfers -->
      <section>
        <h2>{{ t("privacyPolicy.section9.title") }}</h2>
        <p>{{ t("privacyPolicy.section9.description") }}</p>
      </section>

      <!-- Section 10: Region-Specific Rights -->
      <section>
        <h2>{{ t("privacyPolicy.section10.title") }}</h2>
        <p>{{ t("privacyPolicy.section10.california") }}</p>
        <p>{{ t("privacyPolicy.section10.uk") }}</p>
        <p>{{ t("privacyPolicy.section10.other") }}</p>
      </section>

      <!-- Section 11: Cookie Policy -->
      <section>
        <h2>{{ t("privacyPolicy.section11.title") }}</h2>
        <p>{{ t("privacyPolicy.section11.description") }}</p>
      </section>

      <!-- Section 12: Third-Party Links -->
      <section>
        <h2>{{ t("privacyPolicy.section12.title") }}</h2>
        <p>{{ t("privacyPolicy.section12.description") }}</p>
      </section>

      <!-- Section 13: Children's Privacy -->
      <section>
        <h2>{{ t("privacyPolicy.section13.title") }}</h2>
        <p>{{ t("privacyPolicy.section13.description") }}</p>
      </section>

      <!-- Section 14: Changes to This Policy -->
      <section>
        <h2>{{ t("privacyPolicy.section14.title") }}</h2>
        <p>{{ t("privacyPolicy.section14.description") }}</p>
      </section>

      <!-- Section 15: Contact Us -->
      <section class="contact-section">
        <h2>{{ t("privacyPolicy.section15.title") }}</h2>
        <p>{{ t("privacyPolicy.section15.description") }}</p>
        <div class="contact-info">
          <p>
            <strong>{{ t("privacyPolicy.section15.company") }}</strong>
          </p>
          <p>{{ t("privacyPolicy.section15.location") }}</p>
          <p>Email: {{ t("privacyPolicy.section15.email") }}</p>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.privacy-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 60px;
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
  padding-bottom: 20px;
  border-bottom: 1px solid #374151;
}

section {
  margin-bottom: 48px;
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

.note {
  color: #9ca3af;
  font-style: italic;
  font-size: 0.95rem;
}

.disclaimer {
  color: #f59e0b;
  font-size: 0.95rem;
  background: rgba(245, 158, 11, 0.1);
  padding: 12px;
  border-radius: 8px;
  border-left: 4px solid #f59e0b;
}

.contact-section {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid #374151;
}

.contact-info {
  background: rgba(244, 114, 182, 0.1);
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #f472b6;
  margin-top: 16px;
}

.contact-info p {
  margin-bottom: 4px;
}

.contact-info strong {
  color: #f472b6;
}

@media (max-width: 640px) {
  .privacy-content {
    padding: 100px 16px 40px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  h3 {
    font-size: 1.1rem;
  }
}
</style>
