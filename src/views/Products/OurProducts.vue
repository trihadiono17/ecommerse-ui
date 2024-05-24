<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our Products</h3>
        <RouterLink :to="{ name: 'AddProducts' }"
          ><button class="btn" style="float: right">
            Add New Product
          </button></RouterLink
        >
      </div>
    </div>
    <div class="row">
      <div
        v-for="products of products"
        :key="products.id"
        class="col-md-4 mb-4"
      >
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
