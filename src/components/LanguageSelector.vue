<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center"
      @click="closeModal"
    >
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"></div>

      <!-- Modal -->
      <div
        class="relative bg-gradient-to-br from-[#331541] via-[#1f112e] to-[#150f29] rounded-2xl shadow-2xl p-6 mx-4 max-w-md w-full transform transition-all duration-300 border border-purple-400/20"
        @click.stop
      >
        <!-- Header -->
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-2xl font-bold text-white">{{ $t('languageSelector.title') }}</h3>
          <button
            @click="closeModal"
            class="p-2 rounded-lg transition-colors duration-200 hover:bg-white/10 text-gray-300 hover:text-white"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Language List -->
        <div class="space-y-2">
          <button
            v-for="language in languages"
            :key="language.code"
            @click="selectLanguage(language.code)"
            class="w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 hover:bg-white/10 group cursor-pointer"
            :class="{
              'bg-gradient-to-r from-[#FF87B3]/20 to-[#FF87B3]/10 border border-[#FF87B3]/30': currentLanguage === language.code,
              'hover:scale-[1.02] hover:shadow-lg': currentLanguage !== language.code
            }"
          >
            <!-- Flag -->
            <span class="text-2xl">{{ language.flag }}</span>

            <!-- Language Info -->
            <div class="flex-1 text-left">
              <div class="text-white font-medium text-lg">{{ language.name }}</div>
              <!-- <div class="text-gray-400 text-sm">{{ language.code.replace('_', '-').toUpperCase() }}</div> -->
            </div>

            <!-- Current Language Indicator -->
            <div
              v-if="currentLanguage === language.code"
              class="w-3 h-3 rounded-full bg-[#FF87B3] shadow-lg"
            ></div>

            <!-- Hover Arrow -->
            <!-- <svg
              v-else
              class="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg> -->
          </button>
        </div>

        <!-- Footer -->
        <div class="mt-6 pt-4 border-t border-gray-600/30">
          <p class="text-center text-gray-400 text-sm">
            {{ $t('languageSelector.footer') }}
          </p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LANGUAGES } from '../i18n/locales'
import { changeLanguage } from '../i18n'

// Props
defineProps<{
  isOpen: boolean
}>()

// Emits
const emit = defineEmits<{
  close: []
  languageChanged: [language: string]
}>()

// Composables
const { locale } = useI18n()

// Reactive data
const languages = SUPPORTED_LANGUAGES
const currentLanguage = computed(() => locale.value)

// Methods
const closeModal = () => {
  emit('close')
}

const selectLanguage = async (languageCode: string) => {
  if (languageCode === currentLanguage.value) {
    closeModal()
    return
  }

  const success = await changeLanguage(languageCode)
  if (success) {
    emit('languageChanged', languageCode)
    closeModal()
  }
}
</script>

<style scoped>
/* Custom animations */
@keyframes modalIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-enter-active {
  animation: modalIn 0.3s ease-out;
}
</style>