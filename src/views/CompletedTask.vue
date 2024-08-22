<template>
  <div>
    <HeaderTitle :title="titleHeader" />
    <div class="container">
      <div>
        <TodoList :filter="filterList" />
      </div>
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
import HeaderTitle from "@/components/HeaderTitle.vue";

export default {
  name: "CompletedTask",
  components: {
    TodoList,
    HeaderTitle,
  },

  data() {
    return {
      titleHeader: "Tarefas concluídas",
      filterList: "finished",
    };
  },
};
</script>

<style scoped>
header > h1 {
  color: #fff;
  font-size: 1.5rem;
}

.container {
  display: flex;
  justify-content: center;
}
.container > div {
  width: 100%;
  max-width: 630px;
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
  position: fixed;

  bottom: 0px;
  transform: translate(-130%, -50%);
}
</style>
