<template id="toTemplate">
  <div id="app">
    <p>{{ message }}</p>
    <input type="text" v-model="message" v-on:keydown.enter="keyd"/>
    <input type="text" v-model="message2" v-on:keydown.enter="keyd"/>
    <ul v-for="(arr,index) in arrs">
      <li v-on:click="click(index)" v-bind:class="{line:arr.n}">{{arr.m}}</li>
    </ul>
    <ul v-for="(arr,index) in arrs2">
      <li v-on:click="click(index)" v-bind:class="{line:arr.n}">{{arr.m}}</li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'TOdolist',
  data: function () {
    return {
      message: 'abc',
      message2: 'abc',
      arrs: [],
      arrs2: [],
      chose: false
    }
  },
  methods: {
    keyd: function () {
      this.arrs.push({m: this.message, n: false})
      this.arrs2.unshift({m: this.message2, n: false})
      this.message = ''
      this.message2 = ''
    },
    click: function (index) {
      // this.arrs.splice(index, 1)
      this.arrs[index].n = !this.arrs[index].n
    }
  }
}
</script>

<style scoped>
input{
  background-color: red;
}
.line{
  text-decoration: underline;
}
.line_through{
  text-decoration: line-through;
}
</style>
