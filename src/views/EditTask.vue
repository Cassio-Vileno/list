<template>
  <div>
    <HeaderTitle :title="titleHeader" />
    <form @submit.prevent="updateTask">
      <div>
        <input v-model="title" type="text" placeholder="Titulo" />
        <textarea v-model="details" placeholder="Detalhes da tarefa"></textarea>
        <div class="container-button">
          <router-link to="/" class="button-back">Cancelar</router-link>
          <button type="submit">Editar</button>
        </div>
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
      titleHeader: "Editar tarefa",
      title: "",
      details: "",
    };
  },
  computed: {
    taskId() {
      return this.$route.params.id;
    },
    task() {
      return this.$store.state.tasks.find((item) => item.id === this.taskId);
    },
  },
  watch: {
    task: {
      immediate: true,
      handler(task) {
        if (task) {
          this.title = task.title;
          this.details = task.details;
        }
      },
    },
  },
  methods: {
    updateTask() {
      const originalTask = this.task;
      const updatedTask = {
        ...originalTask,
        title: this.title,
        details: this.details,
        updateAt: new Date(),
      };
      this.$store.dispatch("editItem", updatedTask);
      this.$router.push("/");
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
  height: 400px;
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
  font-size: 1.125rem;
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
  font-size: 1.125rem;
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
