<template>
  <div class="add-task">
    <HeaderTitle :title="headerTitle" />
    <form>
      <div>
        <input v-model="title" type="text" placeholder="Titulo" />
        <textarea v-model="details" placeholder="Detalhes da tarefa"></textarea>
        <button @click.prevent.stop="addTask()">Adicionar</button>
      </div>
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
          details: this.details,
          state: "open",
          createAt: new Date(),
        });
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
}

form > div {
  width: 100%;
  max-width: 630px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding: 0 15px;
}

form > div > input {
  font-size: 1.1rem;
  background-color: #fff;
  padding: 15px 20px;
  border: none;
  border-radius: 8px;
}

form > div > textarea,
::placeholder {
  font-size: 1.063rem;
}

form > div > textarea {
  font-size: 1.1rem;
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
  font-size: 1.125rem;
  font-weight: 600;
}
</style>
