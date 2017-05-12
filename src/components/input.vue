<template>
  <div class="block">
    <input type="text" :aaa="value" v-on:input="input" ref="input"/>
    <label>{{value}}</label>
    <button @click="clicks"></button>
  </div>
</template>

<script>
  export default {
    name:"input",
    data(){
      return{
        value:''
      }
    },
    props: {
    },
    computed:{
    },
    methods:{
      input(e){
          //解决如果DOM属性修改了，数据并不会修改
          this.value = e.target.value
      },
      clicks(e){
          //解决如果数据修改了，那么DOM属性就会修改
          this.value = "a"
        this.$refs.input.value = this.value
//        this.$emit("input",e)
        console.log(this.$refs)
        console.log("如果直接写:value = value ，则自动实现了双向绑定，如果不这样写，则要自己实现value的值改变后，要将其赋值给input的value")
      }
    }
  }
</script>
