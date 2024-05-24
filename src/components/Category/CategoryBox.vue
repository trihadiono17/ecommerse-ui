<template>
  <div v-if="category" class="card h-100" style="margin-top: 10px">
    <div>
      <img class="card-img-top" :src="category.image" alt="Card image cap" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ category.name }}</h5>
      <!-- <p class="card-text">
        {{ category.description }}
      </p> -->
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryBox",
  props: ["category"],
  mounted() {
    console.log("CategoryBox prop:", this.category); // Debug: log the category prop
  },
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
}
</style>
