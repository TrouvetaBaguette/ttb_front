<template>
    <div class="d-flex flex-wrap w-100 h-100 justify-content-between align-items-center text-center" id="myTable">
        <div class="pt-4 pb-3 px-3" style="background-color: #F0F4F8" v-for="data in tableProductData" v-bind:key="data.nom">
            <img :alt="data.nom" class="w-50" :src=data.src>
            <h5 class="fw-bold pt-2">{{ data.nom }}</h5>
            <h6>{{ data.prix }} €</h6>
            <div class="d-flex justify-content-between pt-2">

            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: "ShowProductClient",
    components: {

    },
    data: function () {
        return {
            info :'',
            tableProductData: [{
                nom: 'Flan',
                prix: '1.75',
                src: require('../../assets/image/flan.png')
            }, {
                nom: 'Baguette',
                prix: '1.5',
                src: require('../../assets/image/baguette.png')
            }],
        }
    },
    methods : {

    },
    mounted () {

    }
}
</script>

<style scoped>

</style>