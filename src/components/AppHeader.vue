<template>
  <header
    class="fixed top-0 left-0 right-0 z-20 transition-all duration-300 ease-in-out"
    :class="{ 'bg-gradient-to-r from-[#331541] via-[#1f112e] to-[#150f29] backdrop-blur-md shadow-lg': isScrolled || isMobileMenuOpen, 'bg-transparent': !isScrolled }"
  >
    <nav class="w-[94%] mx-auto">
      <div class="flex justify-between items-center w-full" :class="menuPaddingY">
        <!-- Logo and App Name -->
        <div class="flex items-center lg:space-x-2 md:space-x-1 space-x-1">
          <img src="/images/icons/app_icon.webp" alt="NAME App Icon" class="lg:w-20 lg:h-20 md:w-16 md:h-16 w-20 h-20 object-contain" />
          <div class="text-3xl font-bold text-primary">{{ AppName }}</div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center lg:space-x-6 md:space-x-5 space-x-5 lg:ml-8 md:ml-4 text-secondary lg:text-2xl md:text-xl font-medium">
            <a href="#" class="attribute">{{ $t('header.nav.product') }}</a>
            <a href="#" class="attribute">{{ $t('header.nav.features') }}</a>
            <a href="#" class="attribute">{{ $t('header.nav.security') }}</a>
          </div>
        </div>

        <!-- Desktop Actions -->
        <div class="hidden md:flex items-center space-x-8">
          <custom-button
            :text="currentBreakPoint === 'lg' ? $t('header.language') : ''"
            backgroundColor="transparent"
            textColor="#E0E0E0"
            fontSize="1.5rem"
            :onClick="openLanguageSelector"
            class="transition-all duration-300"
          >
            <template #prefix>
              <svg class="w-8 h-8 transition-colors duration-300 #E0E0E0"  fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
              </svg>
            </template>
          </custom-button>
          <custom-button :text="$t('header.download')" :width="{lg:144, md:120}" :height="{lg: 52, md: 44}" :backgroundColor="'#FF87B3'"
            textColor="#ffffff" :fontSize="{lg: '1.5rem', md: '1.2rem'}" :onClick="handleButtonClick" radius="99px" />
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg transition-colors duration-300 text-white bg-gradient-to-r from-[#331541] via-[#1f112e] to-[#150f29]"
          aria-label="Toggle mobile menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              :class="{ 'opacity-0': isMobileMenuOpen }"
              class="transition-opacity duration-300"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              :class="{ 'opacity-0': !isMobileMenuOpen }"
              class="absolute transition-opacity duration-300"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        :class="{ 'opacity-100 translate-y-0': isMobileMenuOpen, 'opacity-0 -translate-y-2 pointer-events-none': !isMobileMenuOpen }"
        class="md:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-[#331541] via-[#1f112e] to-[#150f29] backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out"
      >
        <div class="px-4 py-6 space-y-4">
          <!-- Mobile Navigation Links -->
          <div class="space-y-3 text-secondary flex flex-col">
            <custom-button
              :text="$t('header.nav.product')"
              :backgroundColor="'transparent'"
              textColor="#ffffff"
              :fontSize="20"
              :onClick="handleButtonClick"
              class="mobile-menu-button active:scale-100"
            />
            <custom-button
              :text="$t('header.nav.features')"
              :backgroundColor="'transparent'"
              textColor="#ffffff"
              :fontSize="20"
              :onClick="handleButtonClick"
              class="mobile-menu-button active:scale-100"
            />
            <custom-button
              :text="$t('header.nav.security')"
              :backgroundColor="'transparent'"
              textColor="#ffffff"
              :fontSize="20"
              :onClick="handleButtonClick"
              class="mobile-menu-button active:scale-100"
            />
            <custom-button
              :text="$t('header.language')"
              backgroundColor="transparent"
              textColor="#ffffff"
              :fontSize="20"
              :onClick="openLanguageSelector"
              class="mobile-menu-button active:scale-100"
            >
            </custom-button>
            <custom-button
              :text="$t('header.download')"
              :backgroundColor="'transparent'"
              textColor="#ffffff"
              :fontSize="20"
              :onClick="handleButtonClick"
              class="mobile-menu-button active:scale-100"
            />
          </div>
        </div>
      </div>
    </nav>

    <!-- Language Selector Modal -->
    <LanguageSelector
      :isOpen="isLanguageSelectorOpen"
      @close="closeLanguageSelector"
    />
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import CustomButton from "./CustomButton.vue";
import LanguageSelector from "./LanguageSelector.vue";
import { AppName } from "../store/constants";
import { useDevice } from "../composables/useDevice";
const { isMobile, currentBreakPoint } = useDevice();
const menuPaddingY = computed(() => isMobile.value ? "py-2" : "py-4");

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const isLanguageSelectorOpen = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > (isMobile.value ? 10 : 100);
  // Close mobile menu when scrolling
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleResize = () => {
  // Update mobile status when window resizes
  isMobile.value = document.body.classList.contains("is-mobile");
  // Close mobile menu when resizing to desktop
  if (isMobile.value && isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
  }

  // handle resize 中辨別目前螢幕尺寸
  if (window.innerWidth < 1024) {
    currentBreakPoint.value = 'md'
  } else if (window.innerWidth < 768) {
    currentBreakPoint.value = 'sm'
  } else if (window.innerWidth < 480) {
    currentBreakPoint.value = 'xs'
  } else {
    currentBreakPoint.value = 'lg'
  }
};

const handleButtonClick = () => {
  console.log("Download button clicked");
};

const openLanguageSelector = () => {
  isLanguageSelectorOpen.value = true;
};

const closeLanguageSelector = () => {
  isLanguageSelectorOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});
</script>
