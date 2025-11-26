<template>
  <div class="flex flex-col items-center justify-between bg-white rounded-3xl p-6 shadow-sm lg:max-w-115 lg:h-50">
    <div class="flex item-center justify-start mb-6 max-h-22">
      <!-- 左上角 icon -->
      <div class="flex justify-start mr-4">
        <div class="w-4.5 h-5 flex items-center justify-center">
          <img src="/images/user_review/user_review_card_icon.png" class="w-4.5 h-5 object-cover" />
        </div>
      </div>

      <!-- Content -->
      <p class="text-tertiary text-sm leading-relaxed max-h-22 overflow-hidden line-clamp-4">
        {{ content }}
      </p>
    </div>

    <!-- User info -->
    <div class="flex items-stretch justify-between w-full">
      <div class="flex items-center w-full">
        <!-- Avatar -->
        <div class="w-11 h-11 rounded-full mr-4 overflow-hidden">
          <img v-if="avatar" :src="avatar" :alt="name" class="w-full h-full object-cover" />
          <div v-else class="w-full h-full bg-gray-200"></div>
        </div>

        <div class="flex flex-col items-start justify-between flex-grow text-purple font-bold text-sm">
          <!-- User name and details -->
          <div class="">{{ name }} {{ age }}歲 </div>
          <div class="">{{ zodiac }} | {{ year }}</div>
        </div>
      </div>

      <!-- Match percentage -->
      <div class="text-right shrink-0 flex items-end justify-end">
        <div class="flex items-end text-sm font-bold text-primary">{{ $t(`testimonials.${gender === 'male' ? 'matchWithGirlfriend' : 'matchWithBoyfriend'}`) }} {{ matchPercentage }}%</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UserStory } from '../store/constants';

interface Props extends UserStory {}

defineProps<Props>()
</script>