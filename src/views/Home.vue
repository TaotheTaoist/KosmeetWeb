<script setup lang="ts">
import AppHeader from "../components/AppHeader.vue";
import HeroSection from "../components/HeroSection.vue";
import FeaturesSection from "../components/FeaturesSection.vue";
import WhyChooseSection from "../components/WhyChooseSection.vue";
import AppFooter from "../components/AppFooter.vue";
import UserReviewSection from "../components/UserReviewSection.vue";
import FaqSection from "../components/FaqSection.vue";
import DownloadSection from "../components/DownloadSection.vue";
import { useDevice } from "../composables/useDevice";

// Initialize device detection
useDevice();
</script>

<template>
  <div class="min-h-screen">
    <AppHeader />
    <main>
      <HeroSection />
      <FeaturesSection />
      <WhyChooseSection />
      <UserReviewSection />
      <FaqSection />
      <DownloadSection />
    </main>
    <AppFooter />
  </div>
</template>
