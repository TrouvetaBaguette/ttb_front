<template>
    <div>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "./components/header/Header";
export default {
    name: 'App',
    components: {
        Header
    }
}
</script>

<style>
*{
    --bs-body-bg: #F0E9DE;
}
</style>
