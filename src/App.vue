<template>
  <div id="app">
    {{ $store.state.user }}
    <User />
    <Curso />
    <div v-for="(post, index) in $store.state.acao.acao" :key="index">
      {{ post.title }}
    </div>
  </div>
</template>

<script>
import User from './components/User.vue'
import Curso from './components/Curso.vue'

export default {
  name: 'App',
  components: {
    User,
    Curso
  },
  created () {
    console.log(this.$store)
    this.$store.dispatch('acao/puxarAcao')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
