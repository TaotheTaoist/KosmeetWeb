<template>
  <div class="example-container">
    <!-- 图片在左侧的示例 -->
    <OverlapLayout
      image="/path/to/phone-image.png"
      title="精準八字排盤系統"
      image-position="left"
      image-class="phone-mockup"
    >
      <template #subtitle>
        運用傳統命理精粹，<br>
        全自動生成準確精細的專業排盤結果
      </template>
    </OverlapLayout>

    <!-- 图片在右侧的示例 -->
    <OverlapLayout
      image="/path/to/phone-image-2.png"
      title="智能配對"
      image-position="right"
      image-class="phone-mockup"
    >
      <template #subtitle>
        結合傳統命理與現代AI技術，<br>
        為您匹配各種人格特質進行配對分析
      </template>
    </OverlapLayout>

    <!-- 戀愛建議提醒示例 -->
    <OverlapLayout
      image="/path/to/phone-image-3.png"
      title="戀愛建議提醒"
      image-position="left"
      image-class="phone-mockup rounded-phone"
    >
      <template #subtitle>
        智能推手好運、如意的戀人，對象！<br>
        上傳，你擔憂或負能量狀況即時提醒。
      </template>
    </OverlapLayout>
  </div>
</template>

<script setup lang="ts">
import OverlapLayout from '../components/OverlapLayout.vue'
</script>

<style scoped>
.example-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* 自定義圖片樣式，可以通過 imageClass 傳入 */
:deep(.phone-mockup) {
  width: 280px;
  height: 560px;
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  background: linear-gradient(145deg, #1a1a2e, #16213e);
  padding: 10px;
}

:deep(.rounded-phone) {
  border-radius: 40px;
}

/* 響應式調整 */
@media (max-width: 768px) {
  :deep(.phone-mockup) {
    width: 200px;
    height: 400px;
  }
}

@media (max-width: 480px) {
  .example-container {
    padding: 1rem;
  }
}
</style>