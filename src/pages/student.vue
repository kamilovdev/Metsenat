<script setup>
    import {
        onMounted,
        ref
    } from 'vue'
    import client from '../api/api';
    import Cbutton from '../components/Button/Cbutton.vue';
    import studentItem from '../components/students/student-item.vue';
    let studentListResult = ref([])
    let partners = ref({})
    let page = ref(5)
    let page_size = ref(10)
    let search = ref('')
    let totalPages = ref(0)



    const GetStudentList = async () => {
        try {
            const {
                data
            } = await client.get('student-list/', {
                params: {
                    page: page.value,
                    page_size: page_size.value,
                    search: search.value
                }
            });
            console.log(data);
            studentListResult.value = data.results
            totalPages.value = Math.ceil(data.count / 10)
            partners.value = data
        } catch (error) {
            console.log(error)
        }
    }
    onMounted(() => {
        GetStudentList()
    })
</script>

<template>
    <div class="containerMain my-5 flex flex-col gap-7">
        <div class="flex justify-end">
            <Cbutton variant="addStudent" title="Talaba qo‘shish">
                <template #prefix>
                    <i class="icon-plus text-[20px] text-[#FFFFFF]"></i>
                </template>
            </Cbutton>
        </div>

        <div>
            <table>
                <thead>
                    <div class="flex justify-between">
                        <span>
                            <ul class="flex gap-8 text-[#B1B1B8] text-[12px] font-medium">
                                <li>#</li>
                                <li>F.I.SH.</li>
                            </ul>
                        </span>

                        <span>
                            <ul class="flex gap-[133px] text-[#B1B1B8] text-[12px] font-medium">
                                <li>TALABALIK TURI</li>
                                <li>OTM</li>
                                <li>AJRATILINGAN SUMMA</li>
                                <li>KONTRAKT MIQDORI</li>
                                <li>AMALLAR</li>
                            </ul>
                        </span>
                    </div>
                </thead>
            </table>
            <tbody class="flex flex-col gap-1">
                <studentItem v-for="(student, index) in studentListResult" :key="student.id" :data="student"
                    :index="index" />
            </tbody>
            <div>
                <Pagination :totalPages="totalPages" :partners="partners" :page_size="page_size" :page="page"
                    @onChangePageSize="onChangePageSize" @onChangePage="onChangePage"
                    @onChangePageMinus="onChangePageMinus" @onChangePagePlus="onChangePagePlus">
                </Pagination>
            </div>
        </div>
    </div>
</template>

<style scoped></style>