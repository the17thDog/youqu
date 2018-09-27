<template lang="pug">
    .chart-container
        .chart
        .description
            .praise 有60%的人好评
            .assessment 有35%的人中评
            .bad-review 有5%的人差评
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.chart-container {
    display: flex;
    align-items: center;
    .chart {
        height: 120px;
        width: 120px;
        background-color: salmon;
        border-radius: 50%;
        margin: 20px 50px;
    }
    .description {
        font-size: 18px;
        
        .praise, .assessment {
            margin-bottom: 10px;
        }
    }
}
</style>

