<template>
  <RouterLink :to="{ name: 'OurCategory' }">
    <button class="btn btn-primary btn-lg">Admin Category</button>
  </RouterLink>

  <br />
  <RouterLink :to="{ name: 'OurProducts' }">
    <button class="btn btn-primary btn-lg">Admin Product</button>
  </RouterLink>
</template>
<script>
export default {};
</script>
<style>
.btn {
  margin-bottom: 20px;
}
</style>
