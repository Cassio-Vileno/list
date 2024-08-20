<template>
  <ul class="list">
    <li>
      <TodoItem />
    </li>
    <li>
      <TodoItem />
    </li>
    <li>
      <TodoItem />
    </li>
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
