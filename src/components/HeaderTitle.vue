<template>
  <header>
    <router-link to="/"
      ><img src="../assets/icons/arrowLeft.svg" alt="Voltar"
    /></router-link>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "HeaderTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  gap: 40px;
  background-color: #9395d3;
  padding: 0 28px;
}

header > h1 {
  color: #fff;
  font-size: 1.8rem;
}
</style>
