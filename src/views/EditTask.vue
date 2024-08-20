<template>
  <div>
    <HeaderTitle :title="title" />
    <form>
      <input type="text" placeholder="Titulo" />
      <textarea placeholder="Detalhes da tarefa" name="" id=""></textarea>
      <div class="container-button">
        <router-link to="/" class="button-back">Cancelar</router-link>
        <button>Editar</button>
      </div>
    </form>
  </div>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle.vue";

export default {
  name: "EditTask",
  components: {
    HeaderTitle,
  },
  data() {
    return {
      title: "Editar tarefa",
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
  width: 100%;
  max-width: 300px;
  background-color: #9395d3;
  color: #fff;
  border-radius: 8px;
  padding: 18px;
  font-size: 18px;
  font-weight: 600;
  border: none;
}

.button-back {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  background-color: #878896;
  color: #fff;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
}

.container-button {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
}
</style>
