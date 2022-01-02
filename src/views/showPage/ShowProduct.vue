<template>
    <div class="container" style="padding-top: 13%">
        <div class="d-flex flex-wrap w-100 h-100 justify-content-between align-items-center text-center" id="myTable">
            <div class="pt-4 pb-3 px-3" style="background-color: #F0F4F8">
                <img :alt="info.label" class="w-50" :src=tableProductData[0].src>
                <h5 class="fw-bold pt-2">{{ info.label }}</h5>
                <h6>{{ info.price }} €</h6>
                <div class="d-flex justify-content-between pt-2">
                    <button class="px-0 bg-white btn col-5" @click="modifyProduct">Modifier</button>
                    <button class="px-0 bg-danger btn col-6" @click="deleteProduct">Supprimer</button>
                </div>
            </div>
        </div>
        <delete-product-modal v-if="displayModal" @close-modal-event="hideModal" />
    </div>

</template>

<script>

import axios from "axios";
import DeleteProductModal from "@/components/Modal/DeleteProductModal";

export default {
    name: "ShowProduct",
    components: {
        DeleteProductModal
    },
    data: function () {
        return {
            info :'',
            displayModal: false,
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
    methods : {
        modifyProduct: function (){
            this.$router.push({path: '/modifyProduct'});
        },
        deleteProduct: function (){
            this.displayModal = true;
        },
        hideModal() {
            this.displayModal = false;
        }
    },
    mounted () {
        axios
            .get('http://localhost:8080/product/galette')
            .then(response => (this.info = response.data))
            .catch(error => (console.log(error)))

    }
}
</script>

<style scoped>

</style>