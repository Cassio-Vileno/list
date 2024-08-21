import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: []
    
  },
  getters: {
  },
  mutations: {
    addTask(state, data) {
      state.tasks.push(data)
    },

    removeTask(state, id) {
     const index = state.tasks.findIndex(o => o.id === id)
     state.tasks.splice(index, 1);
    },

    editTask(state, updatedTask) {
      const index = state.tasks.findIndex(item => item.id === updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask);
      }
    },

    changeTaskStatus(state, id) {
      const task = state.tasks.find(item => item.id === id);
      if (!task) return;
      if(task.state == 'open') {
        task.state = 'finished';
      }else {
        task.state = 'open';
      }
    }
  },
  actions: {
    removeItem({ commit }, itemId) {
      commit('removeTask', itemId)
    },

    editItem({ commit }, updatedTask) {
      commit('editTask', updatedTask);
    },

    changeTaskStatus({ commit }, id) {
      commit('changeTaskStatus', id);
    },
  },
  modules: {
  }
})
