<template>
  <section>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center lg:mb-8 sm:mb-0 mb-6">
        <h2 class="md:text-4xl lg:text-5xl sm:text-3xl text-3xl font-extrabold text-purple">
          {{ $t('whyChoose.title', { appName: AppName }) }}
        </h2>
      </div>

      <div class="w-full flex flex-col justify-start items-center overflow-visible relative">
        <OverlapLayout image="/images/why_choose/phone1.webp" :title="$t('whyChoose.items[0].title')" :subtitle="$t('whyChoose.items[0].description')"
          image-position="right" layout-class="lg:top-5 md:top-10 sm:top-5"
          image-class="relative lg:left-[0] md:left-10 sm:left-15 lg:top-10 md:top-10 sm:top-10 right-4"
          text-class="relative lg:left-10 md:left-5 sm:left-10">
          <template #subtitle>
            <span v-html="$t('whyChoose.items[0].description').replace(/\n/g, '<br>')" />
          </template>
        </OverlapLayout>
        <OverlapLayout image="/images/why_choose/phone2.webp" :title="$t('whyChoose.items[1].title')" :subtitle="$t('whyChoose.items[1].description')"
          image-position="left" layout-class="lg:top-5 md:top-15"
          image-class="relative lg:right-40 md:right-20 sm:right-20"
          text-class="relative lg:left-[25%] md:left-30 lg:w-[62%] md:w-[70%] sm:w-[70%] sm:left-25">
          <template #subtitle>
            {{ $t('whyChoose.items[1].description') }}
          </template>
        </OverlapLayout>
        <OverlapLayout image="/images/why_choose/phone3.webp" :title="$t('whyChoose.items[2].title')" subtitle="" image-position="right"
          layout-class="lg:top-[-20px] md:top-10" image-class="relative lg:left-15 md:left-20 sm:left-25 left-18"
          text-class="relative lg:left-10 md:left-10 lg:top-[-20px] sm:left-10 top-[-25px] text-center lg:text-left md:text-left sm:text-left">
          <template #subtitle>
            <span v-html="$t('whyChoose.items[2].description').replace(/\n/g, '<br>')" />
          </template>
        </OverlapLayout>
        <OverlapLayout image="/images/why_choose/phone4.webp" :title="$t('whyChoose.items[3].title')" subtitle="" image-position="left"
          layout-class="lg:top-[-80px] md:top-[-40px] top-[-20px]"
          image-class="relative lg:right-40 md:right-20 sm:right-20 sm:h-90"
          text-class="relative lg:left-35 md:left-20 sm:left-20 sm:w-[90%]">
          <template #feature>
            <div class="bg-[#FFB1BE] py-1.5 px-4 rounded-full text-white text-center lg:mb-4 w-fit font-bold text-xl lg:mx-0 md:mx-0 sm:mx-0 mx-auto mb-4">
              {{ $t('whyChoose.items[3].badge') }}
            </div>
          </template>
          <template #subtitle>
            <div class="text-center lg:text-left md:text-left sm:text-left w-full">
              <span v-html="$t('whyChoose.items[3].description').replace(/\n/g, '<br>')" />
            </div>

          </template>
        </OverlapLayout>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { AppName } from '../store/constants';
import OverlapLayout from './OverlapLayout.vue';
</script>
