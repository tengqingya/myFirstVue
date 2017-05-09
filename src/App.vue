<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <p @click="testRefs">aaaaaaaaaaAAAA</p>
    <firstcomponent></firstcomponent>
    <thirdcomponent :my-auto-complete="myAutoComplete" :showS="showS" slot1 :showSlot1="showSlot1">
      <label slot="showSlot2">slot会替换掉slot里面所有的东西 showSlot1可以直接显示slot内部的东西 v-if="showSlot1"需要showSlot1后面有参数(:showSlot1="showSlot1")</label>
    </thirdcomponent>
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
      myAutoComplete: 'hello!*&',
      showS:true,
      showSlot1:false
    }
  },
  components: {firstcomponent,thirdcomponent},
  methods:{
      testRefs:function () {
      }
  }
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
