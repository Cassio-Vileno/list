<template>
  <div>
    <HeaderTitle :title="titleHeader" />
    <div class="container">
      <TodoList :filter="filterList" />
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
