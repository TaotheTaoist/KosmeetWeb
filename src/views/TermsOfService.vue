<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import { useI18n } from "vue-i18n";
const { t, tm } = useI18n();
</script>

<template>
  <div class="min-h-screen bg-gray-900 flex flex-col">
    <AppHeader />
    <main class="terms-content flex-1">
      <h1>{{ t("termsOfService.title") }}</h1>
      <p class="updated">{{ t("termsOfService.lastUpdated") }}</p>
      <p class="intro">{{ t("termsOfService.intro") }}</p>

      <!-- Section 1: Service Description -->
      <section>
        <h2>{{ t("termsOfService.section1.title") }}</h2>
        <p>{{ t("termsOfService.section1.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section1.items')"
            :key="'s1-' + index"
          >
            {{ item }}
          </li>
        </ul>
        <p class="note">{{ t("termsOfService.section1.note") }}</p>
      </section>

      <!-- Section 2: Eligibility -->
      <section>
        <h2>{{ t("termsOfService.section2.title") }}</h2>
        <p>{{ t("termsOfService.section2.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section2.items')"
            :key="'s2-' + index"
          >
            {{ item }}
          </li>
        </ul>
        <p class="warning">{{ t("termsOfService.section2.violation") }}</p>
      </section>

      <!-- Section 3: Account Registration and Security -->
      <section>
        <h2>{{ t("termsOfService.section3.title") }}</h2>
        <p>{{ t("termsOfService.section3.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section3.items')"
            :key="'s3-' + index"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Section 4: User Conduct -->
      <section>
        <h2>{{ t("termsOfService.section4.title") }}</h2>

        <h3>{{ t("termsOfService.section4.subtitle1") }}</h3>
        <p>{{ t("termsOfService.section4.description1") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section4.items1')"
            :key="'s4i1-' + index"
          >
            {{ item }}
          </li>
        </ul>

        <h3>{{ t("termsOfService.section4.subtitle2") }}</h3>
        <p>{{ t("termsOfService.section4.description2") }}</p>
        <ul class="prohibited">
          <li
            v-for="(item, index) in tm('termsOfService.section4.items2')"
            :key="'s4i2-' + index"
          >
            {{ item }}
          </li>
        </ul>
        <p class="warning">{{ t("termsOfService.section4.enforcement") }}</p>
      </section>

      <!-- Section 5: User Content -->
      <section>
        <h2>{{ t("termsOfService.section5.title") }}</h2>

        <h3>{{ t("termsOfService.section5.subtitle1") }}</h3>
        <p>{{ t("termsOfService.section5.description1") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section5.items1')"
            :key="'s5i1-' + index"
          >
            {{ item }}
          </li>
        </ul>

        <h3>{{ t("termsOfService.section5.subtitle2") }}</h3>
        <p>{{ t("termsOfService.section5.description2") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section5.items2')"
            :key="'s5i2-' + index"
          >
            {{ item }}
          </li>
        </ul>
        <p class="note">{{ t("termsOfService.section5.removal") }}</p>
      </section>

      <!-- Section 6: Paid Services -->
      <section>
        <h2>{{ t("termsOfService.section6.title") }}</h2>

        <h3>{{ t("termsOfService.section6.subtitle1") }}</h3>
        <p>{{ t("termsOfService.section6.description1") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section6.items1')"
            :key="'s6i1-' + index"
          >
            {{ item }}
          </li>
        </ul>

        <h3>{{ t("termsOfService.section6.subtitle2") }}</h3>
        <p>{{ t("termsOfService.section6.description2") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section6.items2')"
            :key="'s6i2-' + index"
          >
            {{ item }}
          </li>
        </ul>

        <h3>{{ t("termsOfService.section6.subtitle3") }}</h3>
        <p>{{ t("termsOfService.section6.description3") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section6.items3')"
            :key="'s6i3-' + index"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Section 7: Compatibility Analysis Disclaimer -->
      <section>
        <h2>{{ t("termsOfService.section7.title") }}</h2>
        <p>{{ t("termsOfService.section7.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section7.items')"
            :key="'s7-' + index"
          >
            {{ item }}
          </li>
        </ul>
        <p class="note">{{ t("termsOfService.section7.acknowledgment") }}</p>
      </section>

      <!-- Section 8: Safety and Risks -->
      <section>
        <h2>{{ t("termsOfService.section8.title") }}</h2>

        <h3>{{ t("termsOfService.section8.subtitle1") }}</h3>
        <p>{{ t("termsOfService.section8.description1") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section8.items1')"
            :key="'s8i1-' + index"
          >
            {{ item }}
          </li>
        </ul>

        <h3>{{ t("termsOfService.section8.subtitle2") }}</h3>
        <p>{{ t("termsOfService.section8.description2") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section8.items2')"
            :key="'s8i2-' + index"
          >
            {{ item }}
          </li>
        </ul>
        <p class="warning">{{ t("termsOfService.section8.disclaimer") }}</p>
      </section>

      <!-- Section 9: Intellectual Property -->
      <section>
        <h2>{{ t("termsOfService.section9.title") }}</h2>
        <p>{{ t("termsOfService.section9.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section9.items')"
            :key="'s9-' + index"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Section 10: Disclaimers -->
      <section>
        <h2>{{ t("termsOfService.section10.title") }}</h2>
        <p>{{ t("termsOfService.section10.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section10.items')"
            :key="'s10-' + index"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Section 11: Limitation of Liability -->
      <section>
        <h2>{{ t("termsOfService.section11.title") }}</h2>
        <p>{{ t("termsOfService.section11.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section11.items')"
            :key="'s11-' + index"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Section 12: Indemnification -->
      <section>
        <h2>{{ t("termsOfService.section12.title") }}</h2>
        <p>{{ t("termsOfService.section12.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section12.items')"
            :key="'s12-' + index"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Section 13: Account Termination -->
      <section>
        <h2>{{ t("termsOfService.section13.title") }}</h2>

        <h3>{{ t("termsOfService.section13.subtitle1") }}</h3>
        <p>{{ t("termsOfService.section13.description1") }}</p>

        <h3>{{ t("termsOfService.section13.subtitle2") }}</h3>
        <p>{{ t("termsOfService.section13.description2") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section13.items2')"
            :key="'s13-' + index"
          >
            {{ item }}
          </li>
        </ul>
        <p class="note">{{ t("termsOfService.section13.effect") }}</p>
      </section>

      <!-- Section 14: Dispute Resolution -->
      <section>
        <h2>{{ t("termsOfService.section14.title") }}</h2>
        <p>{{ t("termsOfService.section14.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section14.items')"
            :key="'s14-' + index"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Section 15: Modifications -->
      <section>
        <h2>{{ t("termsOfService.section15.title") }}</h2>
        <p>{{ t("termsOfService.section15.description") }}</p>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section15.items')"
            :key="'s15-' + index"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Section 16: General Terms -->
      <section>
        <h2>{{ t("termsOfService.section16.title") }}</h2>
        <ul>
          <li
            v-for="(item, index) in tm('termsOfService.section16.items')"
            :key="'s16-' + index"
          >
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Section 17: Contact Us -->
      <section class="contact-section">
        <h2>{{ t("termsOfService.section17.title") }}</h2>
        <p>{{ t("termsOfService.section17.description") }}</p>
        <div class="contact-info">
          <p>
            <strong>{{ t("termsOfService.section17.company") }}</strong>
          </p>

          <p>Email: {{ t("termsOfService.section17.email") }}</p>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.terms-content {
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

ul.prohibited li {
  color: #f87171;
}

.note {
  color: #9ca3af;
  font-style: italic;
  font-size: 0.95rem;
}

.warning {
  color: #f59e0b;
  font-size: 0.95rem;
  background: rgba(245, 158, 11, 0.1);
  padding: 12px;
  border-radius: 8px;
  border-left: 4px solid #f59e0b;
  margin-top: 16px;
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
  .terms-content {
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
