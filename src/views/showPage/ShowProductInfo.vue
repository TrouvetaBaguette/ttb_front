<template>
<div>
    <div v-if="this.$route.query['id'] == 1">
        <div class="container pt-3">
            <div class="row">
                <div class="col">
                    <h4 style="color: #748A9D">Flan</h4>
                </div>
                <div class="col">
                    <div class="d-flex justify-content-center align-items-center p-1" style="background-color: #F0F4F8; border-radius: 5px; color: #707070">Aux Petits Delices</div>
                </div>
                <div class="w-100 pt-2"></div>
                <div class="col">
                    <h6 style="color: #7BED8D">Ingredients</h6>
                    <div v-for="ing in ingredient" v-bind:key="ing.quantité">
                        ️<span class="p-0 m-0">✅ {{ing.quantité}} {{ing.nom}}</span>
                    </div>
                    <div class="w-50 pt-2 mx-auto d-block">
                        <img src="../../assets/image/flan.jpg" class="rounded bg-transparent border-dark img-fluid">
                    </div>
                </div>
                <div class="col">
                    <h6 style="color: #7BED8D">Informations Nutritionnelles</h6>
                    <div class="row px-2 pb-1" v-for="infN in infoNutritionnelles" v-bind:key="infN.donnee">
                        ️<span class="p-0 m-0 col" style="color:#748A9D;">{{infN.info}}</span>
                        <span class="p-0 m-0 col" style="color:#A6BCD0;">{{infN.donnee}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="container pt-3">
            <div class="row">
                <div class="col">
                    <h4 style="color: #748A9D">Macaron</h4>
                </div>
                <div class="col">
                    <div class="d-flex justify-content-center align-items-center p-1" style="background-color: #F0F4F8; border-radius: 5px; color: #707070">Boulangerie de Nanterre</div>
                </div>
                <div class="w-100 pt-2"></div>
                <div class="col">
                    <h6 style="color: #7BED8D">Ingredients</h6>
                    <div v-for="ing in ingredient" v-bind:key="ing.quantité">
                        ️<span class="p-0 m-0">✅ {{ing.quantité}} {{ing.nom}}</span>
                    </div>
                    <div class="w-50 pt-2 mx-auto d-block">
                        <img src="../../assets/image/macaron.jpg" class="rounded bg-transparent border-dark img-fluid">
                    </div>
                </div>
                <div class="col">
                    <h6 style="color: #7BED8D">Informations Nutritionnelles</h6>
                    <div class="row px-2 pb-1" v-for="infN in infoNutritionnelles" v-bind:key="infN.donnee">
                        ️<span class="p-0 m-0 col" style="color:#748A9D;">{{infN.info}}</span>
                        <span class="p-0 m-0 col" style="color:#A6BCD0;">{{infN.donnee}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex align-items-center justify-content-center">
        <button style="background-color: #F0F4F8; border-radius: 30px" class="px-5 bg-white btn" @click="this.$router.push({path: '/showProductClient'})"> Retour </button>
    </div>
</div>

</template>

<script>
export default {
    name: "ShowProductInfo",
    data: function () {
        return {
            ingredient: [{
                nom: 'Oeuf',
                quantité: '2'
            }, {
                nom: 'Lait',
                quantité: '150ml'
            }, {
                nom: 'Farine',
                quantité: '150g'
            }, {
                nom: 'Citron',
                quantité: '1/2 cuillere'
            }, {
                nom: 'Sucre',
                quantité: '175g'
            }
            ],
            infoNutritionnelles: [{
                info: 'Taille',
                donnee: '250g'
            }, {
                info: 'Calories',
                donnee: '455 Kcal'
            }, {
                info: 'Proteine',
                donnee: '10g'
            }, {
                info: 'Sucre',
                donnee: '5g'
            }, {
                info: 'Fibre',
                donnee: '2g'
            }, {
                info: 'Gras',
                donnee: '5g'
            }, {
                info: 'Calcium',
                donnee: '16mg'
            }, {
                info: 'Cholesterol',
                donnee: '2mg'
            }, {
                info: 'Sodium',
                donnee: '18mg'
            }, {
                info: 'Potassium',
                donnee: '15mg'
            }, {
                info: 'Vitamin A',
                donnee: '5mg'
            }, {
                info: 'Vitamin C',
                donnee: '2mg'
            }
            ]
        }
    }
}
</script>

<style scoped>

</style>