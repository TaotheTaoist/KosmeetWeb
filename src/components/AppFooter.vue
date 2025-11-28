<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Logo 區域 -->
        <div>
          <div class="text-2xl font-bold text-pink-400 mb-4">{{ AppName }}</div>
          <p class="text-gray-400 text-sm">{{ $t("footer.tagline") }}</p>
          <div class="flex space-x-4 mt-4">
            <div class="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div class="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div class="w-8 h-8 bg-gray-700 rounded-full"></div>
          </div>
        </div>

        <!-- 探索 -->
        <div>
          <h4 class="font-bold mb-4">
            {{ $t("footer.sections.explore.title") }}
          </h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li
              v-for="(item, index) in $tm('footer.sections.explore.items')"
              :key="index"
            >
              <a href="#" class="hover:text-white">{{ item }}</a>
            </li>
          </ul>
        </div>

        <!-- 支援 -->
        <div>
          <h4 class="font-bold mb-4">
            {{ $t("footer.sections.support.title") }}
          </h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li
              v-for="(item, index) in $tm('footer.sections.support.items')"
              :key="index"
            >
              <a href="#" class="hover:text-white">{{ item }}</a>
            </li>
          </ul>
        </div>

        <!-- 法律聲明 -->
        <div>
          <h4 class="font-bold mb-4">
            {{ $t("footer.sections.legal.title") }}
          </h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <!-- Privacy Policy - working link -->
            <li>
              <router-link to="/privacy-policy" class="hover:text-white">
                {{ $t("footer.sections.legal.items.0") }}
              </router-link>
            </li>
            <!-- Terms of Service - coming soon -->
            <li>
              <span class="text-gray-600 cursor-not-allowed">
                {{ $t("footer.sections.legal.items.1") }}
              </span>
            </li>
            <!-- Cookie Policy - coming soon -->
            <li>
              <span class="text-gray-600 cursor-not-allowed">
                {{ $t("footer.sections.legal.items.2") }}
              </span>
            </li>
            <!-- Community Guidelines - coming soon -->
            <li>
              <router-link to="/terms-of-service" class="hover:text-white">
                {{ $t("footer.sections.legal.items.1") }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400"
      >
        <p>{{ $t("footer.copyright") }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { AppName } from "../store/constants";
</script>
