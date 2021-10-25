<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light static-top shadow">
        <a class="navbar-brand">
            <img class="w-50" :src="require('../../assets/image/brandLogo.svg')" />
        </a>
        <ul>
            <li>
                <router-link to="/">Accueil</router-link>
            </li>
            <li>
                <router-link to="/addProduct">Ajout Produit</router-link>
            </li>
        </ul>
        <button class="ms-auto btn px-4">Connexion</button>
    </nav>
</template>

<script>


export default {
    name: "Header",
    components: {

    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    text-align: center;
    margin: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
    padding: 6px 8px;
}

nav {
    background: #fff;
    padding: 14px 0;
}

.router-link-exact-active {
    background: #D4BE9E;
    color: #000;
}

button {
    background: #D4BE9E;
    color: #000;
    margin-right: 13px;
    border-radius: 23px;
}
</style>