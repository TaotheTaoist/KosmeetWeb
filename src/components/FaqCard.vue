<template>
  <div class="rounded-[20px] px-10 py-4 max-w-150 max-h-50" :style="bgColorStyle">
    <h3 class="font-bold text-purple mb-4 text-3xl">
      {{ question }}
    </h3>
    <p class="text-black text-regular">
      {{ answer }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
interface Props {
  question: string
  answer: string
  bgColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  bgColor: 'white'
})

const bgColorStyle = computed(() => {
  return {
    backgroundColor: props.bgColor
  }
})
</script>