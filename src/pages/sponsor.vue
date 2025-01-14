<script setup>
  import sponsorItem from '../components/sponsors/sponsor-item.vue';
  import partners from '../components/Partners/partners.vue';
  import client from '../api/api';
  import {
    onMounted,
    ref
  } from 'vue'

  let sponsorResult = ref({})
  const GetPay = async () => {
    try {
      const response = await client.get('sponsor-list/')
      sponsorResult.value = response.data
    } catch (error) {
      console.log(error)
    }
  }

  onMounted(() => {
    GetPay()
  })
</script>

<template>
  <div class="containerMain mt-5">

    <table class="w-full">
      <thead>
        <div class="flex justify-between px-[15px]">
          <span>
            <ul class="text-[12px] text-[#B1B1B8] flex gap-[33px]">
              <li>#</li>
              <li>F.I.SH.</li>
            </ul>
          </span>

          <span>
            <ul class="text-[12px] text-[#B1B1B8] flex gap-[64px]">
              <li>TEL.RAQAMI</li>
              <li>HOMIYLIK SUMMASI</li>
              <li>SARFLANGAN SUMMA</li>
              <li>SANA</li>
              <li>HOLATI</li>
              <li>AMALLAR</li>
            </ul>
          </span>
        </div>
      </thead>

      <tbody class="flex flex-col gap-1">
        <sponsorItem v-for="(homiy, index) in sponsorResult.results" :key="homiy.id" :data="homiy" :index="index" />
      </tbody>
    </table>
        <div>
        <partners/>
        </div>
  </div>

</template>

<style scoped></style>