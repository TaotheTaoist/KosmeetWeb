<template>
  <div class="overlap-layout lg:w-[90%] md:w-[92%] sm:w-[95%] w-[98%] lg:h-116 md:h-105 sm:h-90 lg:px-4 md:px-3 sm:px-2 px-2" :class="layoutClasses">
    <div class="image-container" :class="imageContainerClasses">
      <img
        :src="image"
        :alt="title"
        class="layout-image  lg:h-138 md:h-120 sm:h-92"
        :class="imageClass"
        loading="lazy"
      />
    </div>

    <div class="content-container lg:px-6 md:px-5 sm:px-4 px-1" :class="contentContainerClasses">
      <div class="content-inner" :class="textClass">
        <slot name="feature"></slot>
        <div class="title-section">
          <p class="layout-title">{{ title }}</p>
        </div>

        <div class="subtitle-section">
          <div class="layout-subtitle">
            <slot name="subtitle"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  image: string
  title: string
  imagePosition?: 'left' | 'right'
  imageClass?: string
  textClass?: string
  layoutClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  imagePosition: 'left',
  imageClass: '',
  textClass: 'w-full',
  layoutClass: ''
})

const layoutClasses = computed(() => [
  'overlap-layout',
  `image-${props.imagePosition}`,
  props.layoutClass
])

const imageContainerClasses = computed(() => [
  'image-container',
  props.imagePosition === 'left' ? 'left-image' : 'right-image'
])

const contentContainerClasses = computed(() => [
  'content-container',
  props.imagePosition === 'left' ? 'left-content' : 'right-content'
])
</script>

<style scoped>
.overlap-layout {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}

.image-container {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.layout-image {
  object-fit: contain;
}

.content-container {
  position: absolute;
  z-index: 2;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: normal;
}

.title-section {
  margin-bottom: 0.5rem;
}

.layout-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
  margin: 0;
  line-height: 1.2;
}

.layout-subtitle {
  font-size: 1.2rem;
  font-weight: 400;
  color: #000000;
  margin: 0;
  line-height: 1.5;
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: normal;
  width: 100%;
}

.image-left .left-image {
  left: 0;
}

.image-left .left-content {
  right: 0;
  text-align: left;
}

.image-right .right-image {
  right: 0;
}

.image-right .right-content {
  left: 0;
  text-align: left;
}

@media (max-width: 768px) {
  /* .overlap-layout {
    height: auto;
    flex-direction: column;
  }

  .image-container {
    position: relative;
    width: 150%;
  }

  .content-container {
    position: relative;
    width: 100%;
    text-align: center !important;
    justify-content: center;
    margin: 0 0 1rem 0;
  }

  .layout-title {
    font-size: 1.8rem;
  }

  .layout-subtitle {
    font-size: 1rem;
  } */
}

@media (max-width: 640px) {
  .overlap-layout {
    height: auto;
    flex-direction: column;
  }

  .image-container {
    position: relative;
    width: 150%;
  }

  .content-container {
    position: relative;
    width: 100%;
    text-align: center !important;
    justify-content: center;
    padding: 0.5rem;
  }

  .title-section {
    margin-bottom: 0.75rem;
  }

  .layout-title {
    font-size: 2rem;
  }

  .layout-subtitle {
    font-size: 1.1rem;
  }
}
</style>