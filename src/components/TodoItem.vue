<template>
  <div class="item">
    <div class="container-title">
      <h2>TODO TITLE</h2>
      <p>TODO SUB TITLE</p>
    </div>
    <div class="container-icons">
      <a>
        <img src="../assets/icons/pencil.svg" alt="editar" />
      </a>
      <a href="">
        <img src="../assets/icons/trash.svg" alt="excluir" />
      </a>
      <a href="">
        <img src="../assets/icons/checkCircle.svg" alt="concluido" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.item {
  display: flex;
  padding: 22px 25px 22px 19px;
  border-radius: 15px;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
}

.container-title h2,
p {
  padding: 0;
  margin: 0;
}

.container-title > h2 {
  font-size: 0.813;
  color: #9395d3;
}

.container-title > p {
  font-size: 0.625;
}

.container-icons > a > img {
  height: 34px;
}

.container-icons {
  display: flex;
  gap: 5px;
}
</style>
