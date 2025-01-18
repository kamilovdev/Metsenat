<script setup>
  import {
    onMounted,
    ref
  } from 'vue'
  import sponsorItem from '../components/sponsors/sponsor-item.vue';
  import Pagination from '../components/Partners/pagination.vue';

  import client from '../api/api';

  let partnerListResult = ref([])
  let partners = ref({})
  let page = ref(5)
  let page_size = ref(10)
  let search = ref('')
  let totalPages = ref(0)
  let sponsorResult = ref({})


 
const GetPartnersList = async () => {
  try {
    const { data } = await client.get('sponsor-list/', {
      params: {
        page: page.value,
        page_size: page_size.value,
        search: search.value
      }
    });
    console.log(data);
    partnerListResult.value = data.results
    totalPages.value = Math.ceil(data.count / 10)
    partners.value = data
  } catch (error) {
    console.log(error)
  }
}
  
  const onChangePageSize = (e) => {
  page_size.value = e
  GetPartnersList()
}

const onChangePage = (e) => {
  page.value = e
  GetPartnersList()

}
  onMounted(() => {
    GetPartnersList()
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
        <sponsorItem v-for="(homiy, index) in partnerListResult" :key="homiy.id" :data="homiy" :index="index" />
      </tbody>
    </table>
    <div>
      <Pagination
        :totalPages="totalPages"
        :partners="partners"
        :page_size="page_size"
        :page="page"
          @onChangePageSize="onChangePageSize"
          @onChangePage="onChangePage"
 >

 </Pagination>
    </div>


  </div>

</template>

<style scoped></style>