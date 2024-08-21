<template>
  <div>
    <HeaderTitle :title="titleHeader" />
    <form @submit.prevent="updateTask">
      <input v-model="title" type="text" placeholder="Titulo" />
      <textarea v-model="details" placeholder="Detalhes da tarefa"></textarea>
      <div class="container-button">
        <router-link to="/" class="button-back">Cancelar</router-link>
        <button type="submit">Editar</button>
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
      return this.$store.state.tasks.find(
        (item) => item.id === parseInt(this.taskId)
      );
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
