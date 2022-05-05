<template>
  <div class="container d-flex justify-content-center align-items-center">
    <form v-on:submit.prevent="reserveProduct">
      <h3 style="color: #4e3883" class="pt-3">Produit</h3>

      <div
        v-if="message.content"
        class="alert"
        :class="[message.failure ? 'alert-danger' : 'alert-success']"
      >
        {{ message.content }}
      </div>

      <small><span class="text-danger">*</span>champs requis</small>

      <div class="form-group my-2">
        <label for="exampleInputProductName" style="color: #707070"
          >Produit a reserver</label
        ><span class="text-danger">*</span>
        <select v-model="reservation.product.id">
          <option
            v-for="product in ourProducts"
            :key="product.id"
            :value="product.id"
          >
            {{ product.name }}
          </option>
        </select>
      </div>

      <div class="form-group my-2">
        <label for="exampleInputPrice" style="color: #707070">Quantite</label
        ><span class="text-danger">*</span>
        <input
          type="number"
          step="any"
          min="0"
          class="form-control"
          v-model="reservation.quantity"
          required
        />
      </div>
      <div class="form-group my-2">
        <label for="exampleInputPrice" style="color: #707070">Date</label
        ><span class="text-danger">*</span>
        <input
          type="date"
          class="form-control"
          v-model="reservation.pickupDay"
          required
        />
      </div>
      <div class="form-group my-2">
        <label for="exampleInputPrice" style="color: #707070">L'heur</label
        ><span class="text-danger">*</span>
        <input
          type="number"
          min="0"
          max="24"
          class="form-control"
          v-model="reservation.pickupHour"
          required
        />
      </div>

      <button type="submit" class="btn btn-light my-2 col-12">Reserver</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ReserveProduct",
  data: function () {
    return {
      message: {
        content: "",
        failure: false,
      },
      ourProducts: [],
      reservation: {
        product: {
          id: null,
        },
        quantity: 0,
        pickupDay: null,
        pickupHour: null,
      },
    };
  },
  methods: {
    loadProducts() {
      // todo: remove this fake data...
      this.ourProducts = [
        {
          id: 1,
          name: "Croissant avec Jambon",
          price: "1.2 euros",
        },
        {
          id: 2,
          name: "Pain de Francois",
          price: "2 euros",
        },
      ];

      // todo: server-side loading of products
      // Response from the server should be in this format:
      // {"products": [...]}

      axios
        .get("http://localhost:8080/products")
        .then(({ data }) => {
          this.ourProducts = data.products;
        })
        .catch(() => {
          // todo: enable these lines of code:
          // this.message.content = 'Could not load products'
          // this.message.failure = true;
        });

      // This is to show the first product as the default on "Produit a reserver"
      this.reservation.product.id = this.ourProducts[0].id;
    },
    reserveProduct: function () {
      this.message.failure = false;
      this.message.content = "Processing your reservation.....";

      axios
        .post(
          "http://localhost:8080/reserveProduct",
          {
            product_id: this.reservation.product.id,
            quantity: this.reservation.quantity,
            pickup_date: this.reservation.pickupDay,
            pickup_hour: this.reservation.pickupHour,
          },
          { useCredentails: true }
        )
        .then((res) => {
          // todo: data should contain a message that says "Your reservation has been considered. Thanks"
          this.message.content = res.data;

          console.log(res.data);
        })
        .catch((err) => {
          // todo: remove this timeout (used to fake the server-side loading)
          setTimeout(() => {
            this.message.content =
              err.response ?? "Your reservation has failed!";
            this.message.failure = true;
          }, 2 * 1000);

          console.log(err.response);
        });
    },
  },
  mounted() {
    this.loadProducts();
  },
};
</script>

<style scoped>
</style>