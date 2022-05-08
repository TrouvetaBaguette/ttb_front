<template>
    <div class="container" id="main-container">
        <div class="row p-2">
            <div class="col-md-6 col-xl-3 py-2" v-for="data in tableProductData" v-bind:key="data.nom">
                <div class="card h-100 border-dark" style="width: 18rem;">
                    <div class="card-header bg-transparent">
                        <div class="w-50 m-auto d-block">
                            <img :src=data.src class="rounded bg-transparent border-dark img-fluid">
                        </div>
                    </div>
                    <div class="d-flex justify-content-between py-3 px-5">
                        <p class="card-title">{{data.nom}}</p>
                        <p class="card-text text-justify">{{data.prix}} €</p>
                    </div>
                    <div class="card-footer">
                        <div class="pull-right btn-group btn-group-sm d-flex justify-content-center align-items-center">
                            <button class="px-0 bg-white btn col-5" @click="this.$router.push({path: '/showProductInfo', query: { id: data.id }})">Voir</button>
                        </div>
                    </div>
                </div>
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
                id: 1,
                nom: 'Flan',
                prix: '1.75',
                src: require('../../assets/image/flan.jpg')
            }, {
                id: 2,
                nom: 'Macaron',
                prix: '1.5',
                src: require('../../assets/image/macaron.jpg')
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