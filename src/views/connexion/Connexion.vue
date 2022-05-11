<template>
    <html>
    <head>
        <meta charset="utf-8"/>
        <!-- importer le fichier de style -->
        <link rel="stylesheet" href="style.css" media="screen" type="text/css"/>
    </head>
    <body>
    <div id="container">
        <!-- zone de connexion -->

        <form v-on:submit.prevent="login">
            <h1 class="d-flex justify-content-center align-items-center">Connexion</h1>

            <label><b>Adresse email</b></label>
            <input
                type="text"
                placeholder="Entrer l'address email"
                name="email"
                v-model="User.email"
                required
            />

            <label><b>Mot de passe</b></label>
            <input
                type="password"
                placeholder="Entrer le mot de passe"
                name="password"
                v-model="User.password"
                required
            />

            <input type="submit" id="submit" value="Connexion"/>

            <a href="#" class="link">Mot de passe oublié ?</a>
            <br/>
            <br/>
            <router-link to="/register">
                Je n'ai pas de <span>compte</span>. Je m'en <span>crée</span> un.
            </router-link>
        </form>
    </div>
    </body>
    </html>
</template>

<script>
import axios from "axios";

export default {
    name: "Connexion",
    data: function () {
        return {
            User: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        login: function () {
            axios
                .post("http://localhost:8080/login", {
                    email: this.User.email,
                    password: this.User.password,
                })
                .then((res) => {
                    console.log(res.data);
                    localStorage.setItem("user", JSON.stringify(res.data));
                    this.$emit("set-user", res.data);
                    this.$router.push({path: "/"});
                })
                .catch((err) => {
                    console.log(err.response);
                });
        },
    },
};
</script>

<style scoped>
#container {
    width: 400px;
    margin: 0 auto;
    margin-top: 6%;
}

/* Bordered form */
form {
    width: 100%;
    padding: 30px;
    padding-top: 15px;
    border: 1px solid #f1f1f1;
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#container h1 {
    width: 38%;
    margin: 0 auto;
    padding-bottom: 10px;
}

/* Full-width inputs */
input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

/* Set a style for all buttons */
input[type="submit"] {
    background-color: #785104;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

input[type="submit"]:hover {
    background-color: white;
    color: #b99316;
    border: 1px solid #382817;
}</style
>>
