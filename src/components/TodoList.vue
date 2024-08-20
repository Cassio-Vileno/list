<template>
  <ul class="list">
    <TodoItem v-for="task in $store.state.tasks" :key="task.id" :task="task" />
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  props: {
    msg: String,
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
