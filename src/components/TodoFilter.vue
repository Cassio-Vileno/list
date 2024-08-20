<template>
  <div class="filter">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: "TodoFilter",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
