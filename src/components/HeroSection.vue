<template>
  <section class="relative w-screen flex min-h-[1000px] items-center desktop" style="
      background-image: url('/images/hero/bg.webp');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    ">
    <div
      class="w-full flex mt-[114px] mb-[164px] items-center justify-center pl-4 pr-2 md:pl-12 md:pr-8 lg:pl-28 lg:pr-20">
      <div class="flex flex-col items-start justify-center flex-grow text-left">
        <p class="text-6xl font-bold mb-6 text-white whitespace-normal leading-normal">
          {{ $t('hero.title') }}<br class="hidden sm:block xl:hidden"> {{ $t('hero.subtitle') }}
        </p>
        <p class="text-[28px] lg:mb-12 md:mb-8 mb-6 text-white">{{ $t('hero.description') }}</p>
        <div class="flex items-center lg:space-x-4 space-x-2 md:space-x-2 w-full">
          <custom-button :text="$t('hero.cta.join')" width="50%" :height="{ default: 48, md: 56, lg: 60 }"
            :gradientColors="['#FF6AB4', '#FF7DB3', '#FFB1B1']" textColor="#ffffff" :fontSize="{ md: 20, lg: 24 }"
            radius="99px" class="max-w-[230px]" fontWeight="900" />
          <custom-button :text="$t('hero.cta.explore')" width="50%" :height="{ default: 48, md: 52, lg: 60 }"
            :backgroundColor="'transparent'" :border="'3px solid #FF87B3'" textColor="white"
            :fontSize="{ md: 22, lg: 24 }" fontWeight="900" radius="99px" class="max-w-[230px]" />
        </div>
        <p class="text-xl mt-3 text-gray-200 font-normal">{{ $t('hero.support') }}</p>
      </div>
      <img src="/images/hero/phone.webp" alt="App Preview"
        class="w-full max-w-[40%] md:max-w-[45%] lg:max-w-[50%] h-auto object-contain" loading="lazy" />
    </div>
  </section>

  <section class="relative w-full flex items-center mobile" style="
      background-image: url('/images/hero/bg.webp');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    ">
    <div class="w-full flex flex-col mt-[140px] flex items-center justify-center px-6">
      <div class="flex flex-col items-center justify-center w-full break-words whitespace-normal text-center sm:text-5xl text-4xl">
        <p class="font-bold mb-6 text-white">
          {{ $t('hero.title') }}
        </p>
        <p class="font-bold mb-6 text-white">
          {{ $t('hero.subtitle') }}
        </p>
        <p class="text-lg mb-12 text-white">{{ $t('hero.description') }}</p>
        <div class="flex items-center justify-center space-x-4 w-full">
          <custom-button :text="$t('hero.cta.join')" :width="{ default: 150, sm: 260 }"
            :height="{ default: 52, sm: 58 }" :gradientColors="['#FF6AB4', '#FF7DB3', '#FFB1B1']" textColor="#ffffff"
            :fontSize="{ default: 18, sm: 24 }" fontWeight="900" radius="99px" />
          <custom-button :text="$t('hero.cta.explore')" :width="{ default: 150, sm: 260 }"
            :height="{ default: 52, sm: 58 }" :backgroundColor="'transparent'" :border="'3px solid #FF87B3'"
            textColor="white" :fontSize="{ default: 18, sm: 24 }" fontWeight="900" radius="99px" />
        </div>
        <p class="text-xl mt-8 text-gray-200 font-normal">{{ $t('hero.support') }}</p>
      </div>
      <img src="/images/hero/phone.webp" alt="App Preview" class="min-w-[300px] mt-6 h-auto object-contain"
        loading="lazy" />
    </div>
  </section>
</template>

<script setup lang="ts">
import CustomButton from "./CustomButton.vue";
import { onMounted } from 'vue';

// Preload critical hero background image
onMounted(() => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = '/images/hero/bg.webp';
  link.as = 'image';
  document.head.appendChild(link);
});
</script>
