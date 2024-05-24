<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our Category</h3>
        <RouterLink :to="{ name: 'AddCategory' }">
          <button class="btn btn primary">Add Category</button>
        </RouterLink>
      </div>
    </div>
    <div class="row">
      <div
        v-for="category of categories"
        :key="category.id"
        class="col-md-4 mb-4"
      >
        <CategoryBox :category="category" />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryBox from "@/components/Category/CategoryBox.vue";

export default {
  name: "OurCategory",
  props: ["categories"],
  components: { CategoryBox },
  data() {
    return {
      baseURL: "https://api.escuelajs.co/api/v1/categories",
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped></style>
