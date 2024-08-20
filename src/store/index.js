import { createStore } from 'vuex';

export default createStore({
  state: {
    task: {
      title: '',
      cotent: '',
      state: '',
      createAt: ''
    },
    tasks: [
      {
        id: 1,
        title: 'Teste 1',
        cotent: 'Teste',
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
    }
    
  },
  actions: {
    removeItem({ commit }, itemId) {
      commit('removeTask', itemId)
    }
  },
  modules: {
  }
})
