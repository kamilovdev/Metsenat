<script setup>
    import { ref } from 'vue';

    const series = ref([
        {
            name: 'Homiylar',
            data: [1 , 8 , 8, 1 , 17 , 12 , 1]
        },
        {
            name: 'Talabalar',
            data: [5, 9, 9, 7, 6 ,9, 15]
        }
    ])

    const chartOptions = ref({
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0,
                opacityFrom: 0,
                opacityTo: 0,
                stops: [0,0,0]
            }
        },
        fill: {
            type: 'pattern',
            pattern: {
                style: '',
                width: 6,
                height: 6 ,
                strokeWidth: 2
            }
        },
        colors: ['#36F' ,'#F591B3'],
        chart: {
            height: 10,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: { 
            type: 'month',
            categories: [
                'Fevral',
                'Mart',
                'Aprel',
                'May',
                'Iyun',
                'Iyul',
                'Avgust',
                'Sentabr',
                'Oktabr',
                'Noyabr',
                'Dekabr',
            ]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        }
    })
</script>   

<template>
    <div id="chart">
        <apexchart
            class="apexchart-style"
            type="area"
            :options="chartOptions"
            :series="series"
            width="100%"
            height="264px"
        >
        </apexchart>
    </div>
</template>

<style scoped>
   .apexchart-style ::v-deep(.apexcharts-toolbar) {
  display: none !important;
}

.apexchart-style ::v-deep(.apexcharts-legend) {
  display: none !important;
}

.apexchart-style ::v-deep(.apexcharts-tooltip) {
  border-radius: 8px !important;
  border: 1px solid #dfe6fe !important;
  background: linear-gradient(180deg, #f3f4fe 0%, rgba(243, 244, 254, 0) 100%) !important;
  backdrop-filter: blur(5px) !important;
  width: 128px !important;
}

.apexchart-style ::v-deep(.apexcharts-tooltip-title) {
  background-color: transparent !important;
  font-family: 'Rubik' !important;
}

</style>