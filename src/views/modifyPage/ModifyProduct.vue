<template>
    <div class="container d-flex justify-content-center align-items-center">
        <form v-on:submit.prevent="addProduct">
            <h3 style="color: #4E3883" class="pt-3">Produit</h3>

            <small><span class="text-danger">*</span>champs requis</small>

            <div class="form-group my-2">
                <label for="exampleInputProductName" style="color: #707070">Nom du produit</label><span
                class="text-danger">*</span>
                <input type="text" class="form-control" v-model="info.label" id="exampleInputProductName" required>
            </div>

            <div class="form-group my-2">
                <label for="exampleInputPrice" style="color: #707070">Prix</label><span class="text-danger">*</span>
                <input type="number" step="any" min="0" class="form-control" v-model.number="info.price" id="exampleInputPrice" required>
            </div>

            <div class="form-group my-2">
                <label for="exampleInputIngredient1" style="color: #707070">Ingredients</label>
                <input type="text" class="form-control" v-model="info.ingredients" id="exampleInputIngredient1">
            </div>

            <h3 style="color: #4E3883" class="pt-3">Informations Nutritionnelles</h3>

            <small><em>optionnel</em></small>

            <div class="form-group my-2">
                <label for="exampleInputSize" style="color: #707070">Taille</label>
                <input type="number" step="any" min="0" class="form-control" v-model="info.weight" id="exampleInputSize">
            </div>

            <button type="submit" class="btn btn-light my-2 col-12">Ajouter</button>

        </form>
    </div>
</template>

<script>

import axios from "axios";

export default {
    name: "ModifyProduct",
    data: function() {
        return {
            info: '',
        }
    },
    methods: {
        addProduct: function (){
            axios
                .post('http://localhost:8080/product/update', {id: this.info.id, label : this.info.label, price: this.info.price})
                .then(res => {console.log(res.data);})
                .catch(err => {console.log(err.response);
                });
            this.$router.push({path: '/showProduct'});
        }
    },
    mounted() {
        axios
            .get('http://localhost:8080/product/galette')
            .then(response => (this.info = response.data))
            .catch(error => (console.log(error)))
    }
}
</script>

<style scoped>

</style>