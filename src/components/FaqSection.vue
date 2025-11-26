<template>
  <section class="py-20 bg-white">
    <div class="md:px-20 lg:px-25">
      <div class="text-center mb-16">
        <h2 class="text-5xl lg:text-5xl font-bold text-purple">{{ $t('faq.title') }}</h2>
      </div>

      <div class="grid grid-cols-2 gap-10 items-center justify-items-center">
        <FaqCard
          v-for="(item) in faqList"
          :key="item.id"
          v-bind="item"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FaqCard from './FaqCard.vue'

const faqList = [
  {
    id: 1,
    question: '如果我不知道確切出生時辰怎麼辦？',
    answer: '沒有關係！系統會根據你提供的其他資訊和個性特質問卷，推算最可能的命盤。你也可以選擇使用我們的「時辰推算功能」，通過回答一系列關於生命經歷的問題來輔助確認。',
    bgColor: '#DED2E8'
  },
  {
    id: 2,
    question: '八字真的有科學根據嗎？',
    answer: '八字學說作為中華文化傳承數千年的智慧結晶，確實包含對人類性格與行為模式的深刻洞察。我們的系統結合了傳統八字理論與現代心理學、行為科學，創造出一套完整的匹配體系，不僅符合古老智慧，也符合現代科學對人際關係的認知。',
    bgColor: 'white'
  },
  {
    id: 3,
    question: '這個 APP 支援多元性向嗎？',
    answer: '是的，我們相信關係的契合不侷限於性別。八字配對以能量與特質平衡為基礎，讓每一種關係形式都能找到屬於自己的連結方式。',
    bgColor: 'white'
  },
  {
    id: 4,
    question: '會顯示我的八字給別人看嗎？',
    answer: '不會。我們非常重視用戶隱私，你的詳細八字資料只用於系統內部計算配對度，其他用戶只能看到經過處理的基本資訊（如五行特質、大致性格等）。你可以在隱私設置中隨時調整資訊顯示範圍。',
    bgColor: '#DED2E8'
  }
]
</script>
