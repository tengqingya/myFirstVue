<!--
@author tengqingya
@create 2017-05-15 8:57
-->
<template>
    <div>
        <el-radio class="radio" v-model="myradio" :label="item.id" v-for="(item,index) in data" :key="index" @click.native.prevent="myclick(index)">{{item.name}}</el-radio>
    </div>
</template>

<script>
//    import Vue from 'vue'
//    import {radio} from 'element-ui'
//    import 'element-ui/lib/theme-default/index.css'
//
//    Vue.use(radio);
import { mapGetters } from 'vuex'

export default {
  name: "eleradiovuex",
  data() {
    return {
//      radio: this.$store.state.isCheck,
      data: this.$store.state.checkData,
    };
  },
//  vuex:{
//      getters:{
//        myradio
//      },
//    actions:{
//
//    }
//  },
  methods: {
    myclick(index){
        if(index !== this.myradio){
            this.$store.dispatch("change",index)
        }
    }
  },
  computed: {
//    myradio2(){
//      return this.$store.getters.myradio
//    }
//    // 映射 this.myradio 为 this.$store.getters.myradio
    ...mapGetters([
      'myradio'
    ])
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
