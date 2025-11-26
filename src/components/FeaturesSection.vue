<template>
  <section class="relative w-screen flex py-16 items-center desktop min-h-[800px]">
    <div class="w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-18">
      <p class="text-purple text-5xl font-extrabold lg:mb-12 md:mb-10 mb-10">
        {{ $t('features.title') }}
      </p>
      <div class="flex items-start justify-center w-full">
        <img src="/images/features/phone.webp" loading="lazy" alt="App Preview"
          class="w-full max-w-[35%] md:max-w-[40%] lg:max-w-[45%] h-auto object-contain ml-2 md:ml-4 lg:ml-6" />

        <div
          class="flex flex-col space-y-6 text-[#303030] font-bold text-[28px] items-start justify-start mt-2 ml-8 md:mt-2 md:ml-12 lg:mt-10 lg:ml-16 flex-grow">
          <ul
            class="flex flex-col lg:space-y-8 md:space-y-4 space-y-4 list-disc list-inside items-start justify-start custom-bullets"
            style="color: #4B164C;">
            <li v-for="(problem, index) in $tm('features.problems')" :key="index">{{ problem }}</li>
          </ul>
          <div class="lg:mt-8 mt-4 md:mt-4 bg-[#FFF0F0] rounded-2xl p-6">
            <h3 class="font-extrabold text-purple mb-4 text-3xl">{{ $t('features.solution.title') }}</h3>
            <div class="flex items-center justify-between">
              <img src="/images/features/card.webp" loading="lazy" alt="App Preview"
                class="lg:w-32 lg:h-32 w-20 h-20 md:w-20 md:h-20  object-contain ml-2" />
              <p class="text-medium text-purple text-2xl ml-6 whitespace-normal">{{ $t('features.solution.description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative w-screen flex py-10 items-center mobile">
    <div class="w-full flex flex-col items-center justify-center px-4">
      <p class="text-purple text-3xl font-extrabold mb-4 text-center">
        {{ $t('features.title') }}
      </p>

      <ul
        class="flex flex-col space-y-2 list-disc list-inside items-start justify-start custom-bullets mb-8 text-[#303030] font-bold text-lg"
        style="color: #4B164C;">
        <li v-for="(problem, index) in $tm('features.problems')" :key="index">{{ problem }}</li>
      </ul>

      <img src="/images/features/phone.webp" alt="App Preview" loading="lazy" class="w-3/4 max-w-sm h-auto object-contain mb-8" />

      <div class="bg-[#FFF0F0] rounded-2xl p-6 w-full flex flex-col items-center justify-center">
        <p class="font-extrabold text-purple mb-4 text-2xl text-left w-full">{{ $t('features.solution.title') }}</p>
        <div class="flex items-center justify-center space-y-4 space-x-4">
          <img src="/images/features/card.webp" alt="App Preview" loading="lazy" class="w-16 h-16 ml-2 my-auto object-contain" />
          <p class="text-medium text-purple text-lg text-left">{{ $t('features.solution.description') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.custom-bullets li::marker {
  font-size: 36px;
  margin: auto;
}
</style>
