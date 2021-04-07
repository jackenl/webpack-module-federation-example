<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Main APP</h1>
    <Content></Content>
    <div>
      <router-link to="/app2" title="to App2">to App2</router-link>
      <router-link to="/app3" title="to App3">to App3</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import router2 from 'app2/router'
import router3 from 'app3/router'
import Content from 'app2/Content'

export default {
  name: 'App',
  components: {
    Content
  },
  methods: {
    init() {
      const routes2 = router2.options.routes
      const routes3 = router3.options.routes
      const routes = [].concat(routes2, routes3)
      this.$router.addRoutes(routes)
    }
  },
  created() {
    this.init()
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
