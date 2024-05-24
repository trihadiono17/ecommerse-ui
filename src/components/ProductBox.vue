<template>
  <div v-if="products" class="card h-100" style="margin-top: 10px">
    <div>
      <img class="card-img-top" :src="products.images" alt="Card image cap" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ products.title }}</h5>
      <p class="card-text">
        {{ products.description }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductBox",
  props: ["products"],
};
</script>
