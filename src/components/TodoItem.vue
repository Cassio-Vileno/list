<template>
  <li>
    <router-link
      class="item"
      :to="{ name: 'TaskDatails', params: { id: task.id } }"
    >
      <div class="container-title">
        <h2 v-if="task.state === 'open'" class="title-task-open">
          {{ task.title }}
        </h2>
        <h2 v-else class="title-task-finished">
          {{ task.title }}
        </h2>
      </div>
      <div class="container-icons">
        <router-link
          v-if="task.state === 'open'"
          class="link"
          :to="{ name: 'EditTask', params: { id: task.id } }"
        >
          <img src="../assets/icons/pencil.svg" alt="editar" />
        </router-link>
        <a v-if="task.state === 'open'" @click.prevent.stop="removeTask()">
          <img src="../assets/icons/trash.svg" alt="excluir" />
        </a>
        <a v-else @click.prevent.stop="removeTask()">
          <img src="../assets/icons/thashFinished.svg" alt="excluir" />
        </a>
        <a v-if="task.state === 'open'" @click.prevent="finishTask(task.id)">
          <img src="../assets/icons/checkCircle.svg" alt="concluir" />
        </a>
        <a v-else @click.prevent="finishTask(task.id)">
          <img src="../assets/icons/checkCircleFull.svg" alt="concluido" />
        </a>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    task: Object,
  },
  methods: {
    removeTask() {
      this.$store.commit("removeTask", this.task.id);
    },
    finishTask(id) {
      this.$store.dispatch("changeTaskStatus", id);
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  padding: 22px 25px 22px 19px;
  border-radius: 15px;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;

  -webkit-box-shadow: -12px 12px 20px -17px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -12px 12px 20px -17px rgba(0, 0, 0, 0.75);
  box-shadow: -12px 12px 20px -17px rgba(0, 0, 0, 0.75);
}

.container-title {
  max-width: 60%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.container-title > h2 {
  font-size: 1.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  padding: 0;
}

.title-task-open {
  color: #9395d3;
}

.title-task-finished {
  color: #686868;
}

.container-icons > a > img {
  height: 36px;
}
.link > img {
  height: 34px;
}

.container-icons {
  display: flex;
  gap: 5px;
}
</style>
