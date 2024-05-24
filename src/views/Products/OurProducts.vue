<template>
  <div class="container">
    <div class="row">
      <h4>Our Products</h4>
    </div>
    <div class="row">
      <div v-for="products of products" :key="products.id">
        <ProductBox :products="products" />
      </div>
    </div>
  </div>
</template>
<script>
import ProductBox from "@/components/ProductBox.vue";

export default {
  components: { ProductBox },
  props: ["products"],
};
</script>
