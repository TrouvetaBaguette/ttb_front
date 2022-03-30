<template>
    <div class="container d-flex justify-content-center align-items-center">
        <form v-on:submit.prevent="addProduct">
            <h3 style="color: #4E3883" class="pt-3">Produit</h3>

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
              <label for="exampleInputQuantite" style="color: #707070">Quantité</label><span class="text-danger">*</span>
              <input type="number" step="any" min="0" class="form-control" v-model.number="Product.price" id="exampleInputQuantite" required>
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