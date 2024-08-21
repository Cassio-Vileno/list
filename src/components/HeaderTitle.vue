<template>
  <header>
    <div>
      <router-link to="/"
        ><img src="../assets/icons/arrowLeft.svg" alt="Voltar"
      /></router-link>
      <h1>{{ title }}</h1>
    </div>
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
  justify-content: center;
  background-color: #9395d3;
}

header > div {
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 600px;
  gap: 40px;
  padding: 0 28px;
}

header > div > h1 {
  color: #fff;
  font-size: 1.8rem;
}
</style>
