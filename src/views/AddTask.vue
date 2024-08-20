<template>
  <div class="add-task">
    <HeaderTitle :title="title" />
    <form>
      <input type="text" placeholder="Titulo" />
      <textarea placeholder="Detalhes da tarefa" name="" id=""></textarea>
      <button>Adicionar</button>
    </form>
  </div>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle.vue";

export default {
  name: "AddTask",
  components: {
    HeaderTitle,
  },
  data() {
    return {
      title: "Adicionar tarefa",
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding: 0 15px;
}

form > input {
  font-size: 0.813;
  background-color: #fff;
  padding: 15px 20px;
  border: none;
  border-radius: 8px;
}

form > textarea,
::placeholder {
  font-size: 17px;
}

form > textarea {
  font-size: 0.813;
  height: 500px;
  background-color: #fff;
  padding: 15px 20px;
  border-radius: 8px;
  border: none;
}

button {
  border: none;
  background-color: #9395d3;
  padding: 18px;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
}
</style>
