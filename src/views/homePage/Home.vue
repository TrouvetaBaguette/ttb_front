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
            <p>{{ info }}</p>
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
            .get('https://api.adviceslip.com/advice')
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

</style>