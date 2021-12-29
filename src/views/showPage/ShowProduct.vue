<template>
    <div class="container" style="padding-top: 13%">
        <div class="d-flex flex-wrap w-100 h-100 justify-content-between align-items-center text-center" id="myTable">
            <div class="pt-4 pb-3 px-3" style="background-color: #F0F4F8" v-for="data in info" v-bind:key="data.id">
                <img :alt="data.label" class="w-50" :src=tableProductData[0].src>
                <h5 class="fw-bold pt-2">{{ data.label }}</h5>
                <h6>{{ data.price }}</h6>
                <div class="d-flex justify-content-between pt-2">
                    <button class="px-0 bg-white btn col-5">Modifier</button>
                    <button class="px-0 bg-danger btn col-6">Supprimer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    name: "ShowProduct",
    data: function () {
        return {
            info :'',
            tableProductData: [{
                nom: 'Flan',
                prix: '1.75 €',
                src: require('../../assets/image/flan.png')
            }, {
                nom: 'Baguette',
                prix: '1.5 €',
                src: require('../../assets/image/baguette.png')
            }],
        }
    },
    mounted () {
        axios
            .get('http://localhost:8080/product/galette')
            .then(response => (this.info = response))
            .catch(error => (console.log(error)))

    }
}
</script>

<style scoped>

</style>