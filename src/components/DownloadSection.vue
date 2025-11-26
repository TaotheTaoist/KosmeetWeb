<template>
  <section class="py-15 px-22 bg-[#4B164C]">
    <div class="mx-auto flex items-center justify-between w-full text-white">
      <div class="flex items-center justify-center w-full">
        <div>
          <h2 class="text-4xl lg:text-[40px] font-bold mb-6">
            {{ $t('download.title') }}
          </h2>
          <p class="text-2xl mb-1 text-light-purple">
            {{ $t('download.subtitle') }}
          </p>
          <p class="text-2xl text-light-purple">
            {{ $t('download.description') }}
          </p>
          <div class="flex flex-col items-center justify-between sm:flex-row gap-4 mt-11">
            <CustomButton text="Download for iOS" background-color="#FF87B3" text-color="#ffffff" height="48px"
              radius="12px" font-weight="700" class="px-6 py-4 flex items-center justify-center">
              <template #prefix>
                <img src="/images/icons/ios_icon.png" alt="iOS" class="w-5 h-6 object-contain" />
              </template>
            </CustomButton>
            <CustomButton text="Download for Android" background-color="#FF87B3" text-color="#ffffff" height="48px"
              radius="12px" font-weight="700" class="px-6 py-4 flex items-center justify-center">
              <template #prefix>
                <img src="/images/icons/andriod_icon.png" alt="Android" class="w-5 h-6 object-contain" />
              </template>
            </CustomButton>
          </div>
        </div>

        <div class="ml-10 w-full h-96 max-w-165 max-h-100 bg-cover bg-center bg-no-repeat flex items-end"
          style="background-image: url('/images/footer/bg.png')">
          <div class="w-full h-84 max-w-80 max-h-84 bg-cover bg-center bg-no-repeat ml-[12%]"
            style="background-image: url('/images/footer/phone_preview.png')">

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CustomButton from './CustomButton.vue'
</script>
