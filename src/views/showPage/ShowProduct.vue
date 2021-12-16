<template>
    <div class="container" style="padding-top: 13%">
        <div class="d-flex flex-wrap w-100 h-100 justify-content-between align-items-center text-center" id="myTable">
            <div class="pt-4 pb-3 px-3" style="background-color: #F0F4F8" v-for="data in tableProductData" v-bind:key="data.nom">
                <img :alt="data.nom" class="w-50" :src=data.src>
                <h5 class="fw-bold pt-2">{{ data.nom }}</h5>
                <h6>{{ data.prix }}</h6>
                <div class="d-flex justify-content-between pt-2">
                    <button class="px-0 bg-white btn col-5">Modifier</button>
                    <button class="px-0 bg-danger btn col-6">Supprimer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShowProduct",
    data: function () {
        return {
            tableProductData: [{
                nom: 'Flan',
                prix: '1.75 €',
                src: require('../../assets/image/flan.png')
            }, {
                nom: 'Baguette',
                prix: '1.5 €',
                src: require('../../assets/image/baguette.png')
            },
                {
                    nom: 'Baguette1',
                    prix: '1.25 €',
                    src: require('../../assets/image/baguette.png')
                },
                {
                    nom: 'Flan1',
                    prix: '2.55 €',
                    src: require('../../assets/image/flan.png')
                }

            ],
        }
    },
}
</script>

<style scoped>

</style>