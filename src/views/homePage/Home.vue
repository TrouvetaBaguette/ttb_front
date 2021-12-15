<template>
    <div>
        <div class="container">
            <img alt="patisserie" class="w-100 pt-4" :src="require('../../assets/image/pastries.jpg')"/>
        </div>
        <div class="container">
            <form class="d-flex form-inline my-2 my-lg-0 text">
                <input class="form-control font-weight-light border-radius-25" type="search" placeholder="Votre localisation, Le nom de la boulangerie, Le nom de produit" aria-label="Search">
            </form>
        </div>
        <div class="container py-3">
            <h3>Boulangerie prés de vous !</h3>
            <p>Trouve ta baguette te permet de trouver les meilleurs produits des boulangerie autour de chez toi, notes les produits que tu prends dans une boulangerie pour permettre une fiabilité des informations</p>
            <div class="flex-container">
                <div class="row justify-content-start">
                    <img alt="patisserie" :src="require('../../assets/image/boulangerie1.jpg')"/>
                    <h5 class="fw-bold pt-1">AUX PETITS DELICES</h5>
                    <h6>95480 Pierrelaye</h6>
                </div>
                <div class="row justify-content-center align-items-center">
                    <img alt="patisserie" :src="require('../../assets/image/boulangerie2.jpg')"/>
                    <h5 class="fw-bold pt-1">ATELIERS DES PAINS & CO</h5>
                    <h6>92000 Nanterre</h6>
                </div>
                <div class="row justify-content-center align-items-center">
                    <img alt="patisserie" :src="require('../../assets/image/boulangerie3.jpg')"/>
                    <h5 class="fw-bold pt-1">LES SAVEURS DE JOSEPH</h5>
                    <h6>35000 Rennes</h6>
                </div>
            </div>
        </div>


    </div>
</template>

<script>

import axios from "axios";

export default {
    name: "Home",
    data: function() {
        return {
            info: {},
        }
    },
    mounted () {
        axios
            .get('http://localhost:8081/')
            .then(response => (this.info = response))
            .catch(error => (console.log(error)))
    }
}
</script>

<style scoped>

.container .text {
    z-index: 1;
    position: absolute;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 31%;
    color: white;
    width: 50%;
}

.font-weight-light {
    font-weight: lighter;
}

.border-radius-25 {
    border-radius: 25px;
}

.flex-container {
    display: flex;
    flex-wrap: nowrap;
    background-color: #F0E9DE;
}

.flex-container > div {
    background-color: #F0E9DE;
    width: 100%;
    margin: 10px;
    text-align: center;
    line-height: 75px;
    font-size: 30px;
}

</style>