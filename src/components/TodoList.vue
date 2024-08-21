<template>
  <ul class="list">
    <TodoItem v-for="task in filteredTasks" :key="task.id" :task="task" />
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  name: "TodoList",
  props: {
    filter: {
      type: String,
      default: "",
    },
  },
  components: {
    TodoItem,
  },
  computed: {
    filteredTasks() {
      if (!this.filter) {
        return this.$store.state.tasks;
      }
      return this.$store.state.tasks.filter(
        (task) => task.state === this.filter
      );
    },
  },
};
</script>

<style scoped>
.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 10px;
  margin: 0;
}
</style>
