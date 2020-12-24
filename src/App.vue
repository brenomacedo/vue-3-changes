<template>
  <div>
    name: {{ user.name }}
    <br>
    age: {{ user.age }}

    <button @click="changeState">change state</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import useUserRepository from './functions/useUserRepository'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      teste: 'ola'
    }
  },
  methods: {
    changeState() {
      this.$store.dispatch('setName', 'Macedo')
      this.$store.dispatch('setAge', 18)
    }
  },
  setup() {
    const store = useStore()

    const { user } = useUserRepository()

    return {
      user: store.state.user
    }
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
