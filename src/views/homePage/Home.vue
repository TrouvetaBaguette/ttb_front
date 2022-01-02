<template>
    <div>
        <div class="container">
            <img alt="patisserie" class="w-100 pt-4" :src="require('../../assets/image/pastries.jpg')"/>
        </div>
        <div class="container">
            <form class="d-flex form-inline my-2 my-lg-0 text">
                <input class="form-control font-weight-light border-radius-25" id="myInput1" type="search" onkeyup="filtreMyTable()" placeholder="Votre localisation, Le nom de la boulangerie, Le nom de produit" aria-label="Search">
            </form>
        </div>
        <div class="container py-3">
            <h3>Boulangerie prés de vous !</h3>
            <p>Trouve ta baguette te permet de trouver les meilleurs produits des boulangerie autour de chez toi, notes les produits que tu prends dans une boulangerie pour permettre une fiabilité des informations</p>
            <div class="d-flex align-items-center text-center" id="myTable">
                <div class="px-2 w-50" v-for="data in tableData" v-bind:key="data.nom">
                    <img :alt="data.nom" class="w-100" :src=data.src>
                    <h5 class="fw-bold pt-2">{{ data.nom }}</h5>
                    <h6>{{ data.localisation }}</h6>
                </div>
            </div>
        </div>


    </div>
</template>

<script>

export default {
    name: "Home",
    data: function() {
        return {
            info: {},
            tableData: [{
                nom: 'AUX PETITS DELICES',
                localisation: '95480 Pierrelaye',
                src: require('../../assets/image/boulangerie1.jpg')
            }, {
                nom: 'ATELIERS DES PAINS & CO',
                localisation: '92000 Nanterre',
                src: require('../../assets/image/boulangerie2.jpg')
            }, {
                nom: 'LES SAVEURS DE JOSEPH',
                localisation: '35000 Rennes',
                src: require('../../assets/image/boulangerie3.jpg')
            }],
        }
    },
    methods: {

    },
    mounted () {

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

/*.flex-container {*/
/*    display: flex;*/
/*    flex-wrap: wrap;*/
/*    background-color: #F0E9DE;*/
/*}*/

/*.flex-container > div {*/
/*    background-color: #F0E9DE;*/
/*    width: 100%;*/
/*    margin: 10px;*/
/*    text-align: center;*/
/*    line-height: 75px;*/
/*    font-size: 30px;*/
/*}*/

</style>