<template>
  <AppNavbar />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view :baseURL="baseURL" :categories="categories" :products="products">
  </router-view>
</template>

<script>
import AppNavbar from "./components/AppNavbar";
import axios from "axios";
export default {
  components: { AppNavbar },
  data() {
    return {
      baseURL: "https://api.escuelajs.co/api/v1/",
      products: [],
      categories: [],
    };
  },
  methods: {
    async fetchData() {
      await axios
        .get(this.baseURL + "categories/")
        .then((res) => {
          this.categories = res.data;
        })
        .catch((err) => console.log("err", err));

      await axios
        .get(this.baseURL + "products/")
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => console.log("err", err));
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
