<!--
@author tengqingya
@create 2017-05-10 8:57
-->
<template>
    <el-dropdown @command="handleDropDown" style="margin-left: 20px">
        <el-button type="primary">
          {{buttonText}}<i class="el-icon-caret-bottom el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in dropdowndata" :command="index+''" v-html="item[name]" :key="index" @click="handleDropDown(index)"></el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
//  import Vue from 'vue'
//  import {dropdown,dropdownMenu,dropdownItem,button} from 'element-ui'
//  import 'element-ui/lib/theme-default/index.css'
//
//  Vue.use(dropdown);
//  Vue.use(dropdownMenu);
//  Vue.use(dropdownItem);
//  Vue.use(button);

  /*import 可在在父vueimport也可以在子组件vue里面import*/
  export default {
    name: "eleDropDown",
    props: {
      buttonText: {
        type: String,
        default: '下拉框'
      },
      name: {
        type: String,
        default: 'name'
      },
      id: {
        type: String,
        default: 'id'
      },
      dropdowndata: {}
    },
    methods:{
      handleDropDown(index){
          this.$emit("dropdown",this.dropdowndata[index][this.id],this.dropdowndata[index][this.name])
      }
    }
  }
</script>
