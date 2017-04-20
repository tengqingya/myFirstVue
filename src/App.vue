<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <p>aaaaaaaaaaAAAA</p>
    <firstcomponent></firstcomponent>
  </div>
</template>


<script>
  import firstcomponent from './components/firstcomponent'


export default {
  name: 'app',
  data () {
    return {
      msg: 'hello!*&'
    }
  },
  components: {firstcomponent}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
