<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/">home</router-link>
    <button @click="home">home</button>
  </div>
</template>
<script>
export default {
  methods: {
    home() {
      this.$router.push("/");
    }
  }
}
</script>
<style>
.about {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: skyblue;
}
</style>
