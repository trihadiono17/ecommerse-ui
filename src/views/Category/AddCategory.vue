<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Add new Category</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0">
        <form @submit.prevent="addCategory">
          <div class="form-group">
            <label>Category Name</label>
            <input type="text" class="form-control" v-model="name" required />
          </div>
          <!-- <div class="form-group">
            <label>Description</label>
            <input
              type="text"
              class="form-control"
              v-model="description"
              required
            />
          </div> -->
          <div class="form-group">
            <label>ImageURL</label>
            <input type="url" class="form-control" v-model="image" required />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  data() {
    return {
      name: null,
      // description: null,
      image: null,
    };
  },
  props: ["baseURL", "categories"],
  methods: {
    async addCategory() {
      const newCategory = {
        name: this.name,
        image: this.image,
      };

      try {
        await axios.post(`${this.baseURL}categories`, newCategory, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        // Kirim event ke parent untuk memperbarui data
        this.$emit("fetchData");
        // Redirect ke halaman AdminCategory setelah berhasil menambahkan kategori
        this.$router.push({ name: "OurCategory" });
        // Tampilkan SweetAlert untuk memberi tahu pengguna bahwa kategori berhasil ditambahkan
        swal({
          text: "Category Added Successfully!",
          icon: "success",
          closeOnClickOutside: false,
        });
      } catch (err) {
        console.log(err.response); // Tampilkan detail respon error untuk debugging

        if (!err.response || err.response.status !== 200) {
          // Tampilkan pesan error jika terjadi kesalahan selama permintaan
          swal({
            text: "Failed to add category",
            icon: "error",
            closeOnClickOutside: false,
          });
        }
      }
    },
  },
};
</script>

<style scoped>
h4 {
  font-family: "Roboto", sans-serif;
  color: #484848;
  font-weight: 700;
}
</style>
