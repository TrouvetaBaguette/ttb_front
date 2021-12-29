<template>
    <div class="container d-flex justify-content-center align-items-center">
        <form v-on:submit.prevent="addProduct">
            <h3 style="color: #4E3883" class="pt-3">Produit {{info}}</h3>

            <small><span class="text-danger">*</span>champs requis</small>

            <div class="form-group my-2">
                <label for="exampleInputProductName" style="color: #707070">Nom du produit</label><span
                class="text-danger">*</span>
                <input type="text" class="form-control" v-model="Product.name" id="exampleInputProductName" required>
            </div>

            <div class="form-group my-2">
                <label for="exampleInputPrice" style="color: #707070">Prix</label><span class="text-danger">*</span>
                <input type="number" step="any" min="0" class="form-control" v-model.number="Product.price" id="exampleInputPrice" required>
            </div>

            <div class="form-group my-2">
                <label for="exampleInputIngredient1" style="color: #707070">Ingredients</label>
                <input type="text" class="form-control" v-model="Product.ingredients" id="exampleInputIngredient1">
            </div>

            <h3 style="color: #4E3883" class="pt-3">Informations Nutritionnelles</h3>

            <small><em>optionnel</em></small>

            <div class="form-group my-2">
                <label for="exampleInputSize" style="color: #707070">Taille</label>
                <input type="number" step="any" min="0" class="form-control" v-model="Product.size" id="exampleInputSize">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputCalories" style="color: #707070">Calories</label>
                <input type="number" step="any" min="0" class="form-control" v-model="Product.calories" id="exampleInputCalories">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputProtein" style="color: #707070">Proteine</label>
                <input type="number" step="any" min="0" class="form-control" v-model="Product.protein" id="exampleInputProtein">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputSugar" style="color: #707070">Sucre</label>
                <input type="number" step="any" min="0" class="form-control" v-model="Product.sugar" id="exampleInputSugar">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputFiber" style="color: #707070">Fibre</label>
                <input type="number" step="any" min="0" class="form-control" v-model="Product.fiber" id="exampleInputFiber">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputFat" style="color: #707070">Gras</label>
                <input type="number" step="any" min="0" class="form-control" v-model="Product.fat" id="exampleInputFat">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputCalcium" style="color: #707070">Calcium</label>
                <input type="number" step="any" min="0" class="form-control" v-model="Product.calcium" id="exampleInputCalcium">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputCholesterol" style="color: #707070">Cholesterol</label>
                <input type="number" step="any" min="0" class="form-control" v-model="Product.cholesterol" id="exampleInputCholesterol">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputSodium" style="color: #707070">Sodium</label>
                <input type="number" step="any" min="0" class="form-control" v-model="Product.sodium" id="exampleInputSodium">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputPotassium" style="color: #707070">Potassium</label>
                <input type="number" step="any" min="0" class="form-control" v-model="Product.potassium" id="exampleInputPotassium">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputVitaminA" style="color: #707070">Vitamine A</label>
                <input type="number" step="any" min="0" class="form-control" v-model="Product.vitaminA" id="exampleInputVitaminA">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputVitaminC" style="color: #707070">Vitamine C</label>
                <input type="number" step="any" min="0" class="form-control" v-model="Product.vitaminC" id="exampleInputVitaminC">
            </div>

            <button type="submit" class="btn btn-light my-2 col-12">Ajouter</button>

        </form>
    </div>
</template>

<script>

import axios from "axios";

export default {
    name: "AddProduct",
    data: function() {
        return {
            info: '',
            Product: {
                name: '',
                price: '',
                ingredients: '',
                size: '',
                calories: '',
                protein: '',
                sugar: '',
                fiber: '',
                fat: '',
                calcium: '',
                cholesterol: '',
                sodium: '',
                potassium: '',
                vitaminA: '',
                vitaminC: '',
            },
        }
    },
    methods: {
        addProduct: function (){
            axios
                .post('http://localhost:8080/addProduct', {label : this.Product.name, price: this.Product.price}, {useCredentails: true})
                .then(res => {console.log(res.data);})
                .catch(err => {console.log(err.response);
                });
            this.$router.push({path: '/'});
        }
    }
}
</script>

<style scoped>

</style>