import {createRouter, createWebHistory} from 'vue-router'

import Home from "@/views/Home";
import AddProduct from "@/views/AddProduct";


const routes = [
    {
        path:"/",
        name:"Accueil",
        component: Home
    },
    {
        path:"/addProduct",
        name:"Ajout Produit",
        component: AddProduct
    },
]

const router = new createRouter({
    routes, // short for routes: routes
    history: createWebHistory(),
    linkActiveClass: "active"
});

export default router;
