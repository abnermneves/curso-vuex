import Vue from 'vue'
import Vuex from 'vuex'
import acao from '@/store/acao'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    acao
  },
  state: {
    user: 'Ábner',
    aulasCompletas: 10,
    totalAulas: 25,
    listaAulasCompletas: [],
    livros: [
      {
        nome: 'Demian',
        lido: true
      },
      {
        nome: 'Noites brancas',
        lido: false
      },
      {
        nome: 'As relações perigosas',
        lido: true
      }
    ]
  },
  mutations: {
    // é padrão do vuex nomear as mutations com letras maiúsculas e underscore
    CHANGE_USER (state, payload) {
      state.user = payload.user
      state.totalAulas = payload.totalAulas
    },
    COMPLETAR_AULA (state, payload) {
      state.aulasCompletas++
      state.listaAulasCompletas.push(payload)
      console.log(state.listaAulasCompletas)
    }
  },
  // actions são necessárias quando as alterações exigem uma lógica maior
  // então a lógica será implementada em uma action, que vai chamar uma mutation para, de fato, fazer a alteração
  // o padrão do vuex é sempre chamar uma mutation para fazer a alteração, nunca fazer direto da action
  actions: {
    // enquanto na mutation é passado o state, numa action é passado o context
    // context é quase que o objeto do vuex inteiro
    completarAula (context, payload) {
      context.commit('COMPLETAR_AULA', payload)
    }
  },
  getters: {
    // getters são como as computed properties
    // acessa assim: $store.getters.livrosLidos

    // assim, livrosLidos é uma função. mas não precisa ser uma função
    livrosLidos: state => lido => state.livros.filter(livro => livro.lido === lido)

    // livrosLidos (state) {
    //   // assim livrosLidos é uma propriedade
    //   return state.livros.filter(livro => livro.lido === lido)
    // }
  }
})
