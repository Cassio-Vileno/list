<template>
  <div class="add-task">
    <HeaderTitle :title="headerTitle" />
    <form>
      <input v-model="title" type="text" placeholder="Titulo" />
      <textarea v-model="details" placeholder="Detalhes da tarefa"></textarea>
      <button @click.prevent.stop="addTask()">Adicionar</button>
    </form>
  </div>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddTask",
  components: {
    HeaderTitle,
  },
  data() {
    return {
      headerTitle: "Adicionar tarefa",
      title: "",
      details: "",
    };
  },

  methods: {
    addTask() {
      if (this.title) {
        this.$store.commit("addTask", {
          id: (this.uuid = uuidv4()),
          title: this.title,
          cotent: this.details,
          state: "open",
          createAt: new Date(),
        });
      }
    },
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
