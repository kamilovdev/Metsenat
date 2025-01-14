<script setup>
import { ref , onMounted} from 'vue';
import Pagination from '../Partners/pagination.vue';
import client from '../../api/api';
let partnerListResult = ref([])
let partners = ref({})
let page = ref(1)
let page_size = ref(10)
let search = ref('')
let totalPages = ref(0)

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

onMounted(() => {
  GetPartnersList()
})
</script>


<template>
 <Pagination
 :totalPages="totalPages"
 :partners="partners"
 :page_size="page_size"
 :page="page"
 >

 </Pagination>
</template>

<style scoped></style>