<template>
  <div>
    <p>Aula {{ totalAulas }}, esse é o usuário: {{ user }}</p>
    <p>Aula {{ aulasCompletas }}, esse é o usuário: {{ $store.state.user }}</p>
    <button @click="mostrarConsole">Mostrar no console</button>
  </div>
</template>

<script>

import { mapState } from 'vuex'
// ...Object
// spread operator abre um objeto e retorna cada objeto filho separado
// parece que meio que transforma um objeto em um array

export default {
  name: 'Aula',
  data () {
    return {
      nome: 'André'
    }
  },
  computed: {
    // user () {
    //   return this.$store.state.user
    // },
    // aulasCompletas () {
    //   return this.$store.state.aulasCompletas
    // }
    ...mapState(['user', 'aulasCompletas', 'totalAulas']),
    nomeMaiusculo () {
      return this.nome.toUpperCase()
    }
  },
  methods: {
    mostrarConsole() {
      console.log(this.user)
    }
  }
}
</script>

<style>

</style>
