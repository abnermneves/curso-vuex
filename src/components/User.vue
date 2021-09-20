<template>
  <div id="app">
    <h4>User</h4>
    <h5>Aulas completas:</h5>
    <p v-for="aula in listaAulasCompletas" :key="aula.nome">{{ aula.nome }} ({{ aula.duracao }})</p>
    <h5>Livros</h5>
    <p v-for="(livro, index) in $store.state.livros" :key="index">{{ livro.nome }}</p>
    <h5>Livros lidos</h5>
    <p v-for="(livro, index) in livrosLidos(true)" :key="index">{{ livro.nome }}</p>
    <h5>Livros não lidos</h5>
    <p v-for="(livro, index) in livrosLidos(false)" :key="index">{{ livro.nome }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'User',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['listaAulasCompletas']),
    ...mapGetters(['livrosLidos']) // sem o mapGetters dá pra acessar assim: $store.getters.livrosLidos
  }
}
</script>

<style>

</style>
