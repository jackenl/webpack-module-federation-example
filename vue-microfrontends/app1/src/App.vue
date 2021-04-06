<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Main APP</h1>
    <div>
      <button @click="setApp2">load App2</button>
      <button @click="setApp3">load App3</button>
    </div>
    <div>
      <router-link to="/app2" title="to App2"></router-link>
      <router-link to="/app3" title="to App3"></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { loadComponent } from './init'

export default {
  name: 'App',
  methods: {
    async setApp2() {
      const router2 = await import('app2/router')
      this.$router.addRoutes(router2)
    },
    async setApp3() {
      const router3 = await import('app3/router')
      this.$router.addRoutes(router3)
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
