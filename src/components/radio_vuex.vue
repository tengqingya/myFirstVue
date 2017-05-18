<!--
@author tengqingya
@create 2017-05-15 8:57
-->
<template>
    <div>
        <el-radio class="radio" v-model="radio" :label="item.id" v-for="(item,index) in data" :key="index">{{item.name}}</el-radio>
    </div>
</template>

<script>
//    import Vue from 'vue'
//    import {radio} from 'element-ui'
//    import 'element-ui/lib/theme-default/index.css'
//
//    Vue.use(radio);

export default {
  name: "eleradiovuex",
  data() {
    return {
//      radio: this.$store.state.isCheck,
      data: this.$store.state.checkData,
    };
  },
  methods: {},
  computed: {
    radio: {
      get () {
        console.log("compute radio")
        return this.$store.state.isCheck
      },
      set (value) {
          console.log(value)
        if(this.$store.state.isCheck!==value){
          this.$store.commit('change', this.$store.state.isCheck===0?1:0)
        }
      }
    }
  }
}
</script>
<!--
radio:[{"id":0,"name":"未对账"},{"id":1,"name":"已对账"}],
            radioChecked:0,
-->
<!--<myradio :data="radio" @radio="myradio" :radio-checked="radioChecked"></myradio>-->
<!--
myradio:function (e) {
                this.radioChecked = e
            },
-->
