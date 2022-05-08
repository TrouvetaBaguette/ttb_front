<template>
<div>
    <div v-if="this.$route.query['id'] == 1">
        hello
    </div>
    <div v-else>
        ciao
    </div>
</div>

</template>

<script>
export default {
name: "ShowProductInfo"
}
</script>

<style scoped>

</style>