<template>
  <div class="home">
    <header>
      <div>
        <h1>Tarefas do dia</h1>
        <img src="../assets/icons/calendar.svg" />
      </div>
    </header>
    <div class="container">
      <div>
        <TodoList :filter="filterList" />
      </div>
      <router-link to="/completed-task">
        <div class="tasks-finished">
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6.625L6.83375 12.25L18.5 1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </router-link>
      <router-link to="/add-task">
        <div class="add-task-button">
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
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "HomeView",
  components: {
    TodoList,
  },
  data() {
    return {
      filterList: "open",
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  background-color: #9395d3;
}

header > div {
  display: flex;
  width: 100%;
  max-width: 600px;
  justify-content: space-between;
  padding: 15px;
}

header > div > h1 {
  color: #fff;
  font-size: 1.5rem;
}

.container {
  display: flex;
  height: 100%;
  justify-content: center;
  padding-top: 20px;
}

.container > div {
  width: 100%;
  height: max-content;
  max-width: 630px;
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
  position: fixed;

  bottom: 0px;
  transform: translate(-130%, -50%);
}

.tasks-finished {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: none;
  background-color: #9395d3;
  position: fixed;

  bottom: 100px;
  transform: translate(-130%, -50%);
}
</style>
