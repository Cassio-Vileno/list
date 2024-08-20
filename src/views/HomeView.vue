<template>
  <div class="home">
    <header>
      <h1>Tarefas do dia</h1>
      <img src="../assets/icons/calendar.svg" />
    </header>
    <div class="container">
      <TodoList />
    </div>
    <router-link to="/add-task">
      <a href="" class="add-task-button">
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1.54688V15.3281M1.875 8.4375H14.125H1.875Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </router-link>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "HomeView",
  components: {
    TodoList,
  },
};
</script>

<style scoped>
header {
  display: flex;
  background-color: #9395d3;
  justify-content: space-between;
  padding: 15px;
  position: relative;
}

header > h1 {
  color: #fff;
  font-size: 1.5rem;
}

.container {
  padding-top: 20px;
}

.add-task-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: none;
  background-color: #9395d3;
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
