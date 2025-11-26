<script setup lang="ts">
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
</script>

<template>
  <div class="min-h-screen">
    <AppHeader />

    <main class="privacy-content">
      <h1>Privacy Policy</h1>
      <p class="updated">Last updated: November 2025</p>

      <section>
        <h2>1. Information We Collect</h2>
        <p>Your content here...</p>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>Your content here...</p>
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
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 8px;
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
}
</style>
