<script setup lang="ts">
import { useDevice } from "./composables/useDevice";

// Initialize device detection (if needed globally)
useDevice();
</script>

<template>
  <router-view />
</template>
