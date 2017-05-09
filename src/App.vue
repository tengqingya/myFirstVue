<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <p>aaaaaaaaaaAAAA</p>
    <firstcomponent></firstcomponent>
    <thirdcomponent :my-auto-complete="myAutoComplete"></thirdcomponent>
    <ul>
      <li><router-link to="/first">点我跳转到第一个vue</router-link></li>
      <li><router-link to="/second">点我跳转到第二个vue</router-link></li>
    </ul>
  </div>
</template>


<script>
  import firstcomponent from './components/firstcomponent'

  import thirdcomponent from './components/third'


export default {
  name: 'app',
  data () {
    return {
      msg: 'hello!*&',
      myAutoComplete: 'hello!*&'
    }
  },
  components: {firstcomponent,thirdcomponent}
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
