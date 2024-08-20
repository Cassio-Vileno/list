<template>
  <div class="home">
    <TodoItem />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoItem from "@/components/TodoItem.vue";
export default {
  name: "HomeView",
  components: {
    TodoItem,
  },
};
</script>
