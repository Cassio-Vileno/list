<template>
  <div class="home">
    <header>
      <h1>Tarefas do dia</h1>
      <img src="../assets/icons/calendar.svg" />
    </header>

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

<style scoped>
header {
  display: flex;
  background-color: #9395d3;
  justify-content: space-between;
  padding: 15px;
}

header > h1 {
  color: #fff;
  font-size: 1.5rem;
}
</style>
