export default {
  namespaced: true,
  state: {
    acao: null
  },
  mutations: {
    UPDATE_ACAO(state, payload) {
      state.acao = payload
    }
  },
  actions: {
    puxarAcao (context) { // puxarAcao foi o nome usado no curso, mas é um péssimo nome
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(responseJSON => {
          context.commit('UPDATE_ACAO', responseJSON)
          context.dispatch('completarAula', {
            nome: 'Vuex',
            duracao: 3
          })
        })
    }
  }
}