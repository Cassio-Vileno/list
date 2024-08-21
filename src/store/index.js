import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: [
      {
        id: "1",
        title: 'Teste 1',
        details: 'Teste',
        state: 'open',
        createAt: '2024-07-24 04:47:47.000'
      },
    ]
    
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

    markTaskAsFinished(state, id) {
      const task = state.tasks.find(item => item.id === id);
      if (task) {
        task.state = 'finished';
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

    markTaskAsFinished({ commit }, id) {
      commit('markTaskAsFinished', id);
    },
  },
  modules: {
  }
})
