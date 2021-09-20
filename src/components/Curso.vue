<template>
  <div id="app">
    <p>Curso</p>
    <Aula />
    user com mapState: {{ user }}
    <button @click="CHANGE_USER({ user: novoUser })">Change user</button>
    <input type="text" v-model="novoUser">
    <h5>Aulas</h5>
    <p v-for="aula in aulas" :key="aula.nome" class="aula"><button @click="completarAula(aula)">Completar</button> {{ aula.nome }}</p>
  </div>
</template>

<script>
import Aula from '../components/Aula.vue'
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'Curso',
  components: {
    Aula
  },
  data () {
    return {
      novoUser: '',
      aulas:[
        {
          nome: 'HTML e CSS',
          duracao: 15
        },
        {
          nome: 'JavaScript',
          duracao: 30
        },
        {
          nome: 'UX Design',
          duracao: 20
        }
      ]
    }
  },
  computed: {
    user () {
      return this.$store.user
    }
  },
  methods: {
    ...mapMutations(['CHANGE_USER']),
    ...mapActions(['completarAula']),
    handleClick(aula) {
      // commit é utilizado para ativar a mutação
      // this.$store.commit('changeUser', {
      //   user: this.novoUser
      // })
      this.CHANGE_USER({
        user: this.novoUser
      })
      this.$store.dispatch('completarAula', aula)
    }
    // completarAula () {
    //   this.$store.commit('COMPLETAR_AULA')
    // }
  }
}
</script>

<style>
  p.aula {
    text-align: left
  }
</style>
