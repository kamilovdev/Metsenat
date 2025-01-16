<script setup>
   defineProps({
    singleSponsor: {
        type: Object,
        required: true
    }
  })
</script>

<template>
    <div class="bg-white h-[88px] flex items-center">
      <div class=" containerMain ">
          <div class="flex gap-4 items-center">
            <button class="icon-arrow-left text-[28px]" @click="$router.go(-1)"></button>
            <h1 class="text-[24px] font-bold text-[#28293D]">{{ singleSponsor.full_name }}</h1>
            <p class="text-[12px] font-normal text-[#00CF83]">{{ singleSponsor.get_status_display }}</p>
          </div>
      </div>
    </div>
</template>

<style scoped></style>