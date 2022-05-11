import {createRouter, createWebHistory} from 'vue-router'

import Home from "@/views/homePage/Home";
import AddProduct from "@/views/addPage/AddProduct";
import ShowProduct from "@/views/showPage/ShowProduct";
import ModifyProduct from "@/views/modifyPage/ModifyProduct";
import ShowComment from "@/views/showPage/ShowComment";
import ReserveProduct from "@/views/reserveProduct/index";
import ShowProductClient from "@/views/showPage/ShowProductClient";
import ShowProductInfo from "@/views/showPage/ShowProductInfo";
import Connexion from "@/views/connexion/Connexion";
import Register from "@/views/register/Register";

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
    {
        path:"/showProduct",
        name:"Affichage Produit",
        component: ShowProduct
    },
    {
        path:"/register",
        name:"Inscription Client",
        component: Register
    },
    {
        path:"/connexion",
        name:"Connexion Client",
        component: Connexion
    },
    {
        path:"/showProductClient",
        name:"Affichage Produit Client",
        component: ShowProductClient
    },
    {
        path:"/showProductInfo",
        name:"Affichage Information Produit",
        component: ShowProductInfo
    },
    {
        path:"/modifyProduct",
        name:"Modification Produit",
        component: ModifyProduct
    },
    {
        path:"/showComment",
        name:"Affichage Commentaire",
        component: ShowComment
    },
    {
        path:"/product/reserve",
        name:"Reserver un Produit",
        component: ReserveProduct
    }
]

const router = new createRouter({
    routes, // short for routes: routes
    history: createWebHistory(),
    linkActiveClass: "active"
});

export default router;
