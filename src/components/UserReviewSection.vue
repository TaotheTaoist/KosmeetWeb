<template>
  <section class="py-20 bg-[#FFF0F0]">
    <div class="w-full mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-5xl lg:text-5xl font-bold text-purple">
          {{ $t('testimonials.title') }}
        </h2>
        <p class="text-tertiary text-2xl mt-4">{{ $t('testimonials.subtitle') }}</p>
      </div>

      <div class="flex w-full items-center justify-center space-x-6">
          <UserReviewCard
            v-for="item in testimonials"
            :key="item.id"
            v-bind="item"
          />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UserReviewCard from './UserReviewCard.vue'
import type { UserStory } from '../store/constants';

const testimonials: UserStory[] = [
  {
    id: 1,
    content: '我們一開始只是好奇，結果真的超合！系統分析出我們互補的特質，特別是我的火太旺容易急躁，而他的水能夠平衡我。認識三個月後我們決定交往，現在已經一年多，比之前任何一段感情都穩定。',
    name: '小雯',
    age: 28,
    zodiac: '金牛座',
    year: '甲午年',
    gender: 'female',
    matchPercentage: 88,
    avatar: '/images/user_review/user1.png',
  },
  {
    id: 2,
    content: '我原本不相信八字，但它講的太準了...而且我們交往到現在真的很順。最神奇的是能量提醒功能，每次高能量主動約他，真的成功率大增！ ',
    name: '志明',
    age: 35,
    zodiac: '天秤座',
    year: '戊辰年',
    gender: 'male',
    matchPercentage: 92,
    avatar: '/images/user_review/user2.png',
  },
  {
    id: 3,
    content: '用命格搜尋找到喜用神互補的對象，感覺超穩！我們都是事業導向的人，但五行上剛好互補，理解對方又不會互相消耗。',
    name: '雅芳',
    age: 31,
    zodiac: '射手座',
    year: '丁丑年',
    gender: 'female',
    matchPercentage: 82,
    avatar: '/images/user_review/user3.png',
  }
]
</script>
