<!--
@author tengqingya
@create 2017-05-10 8:57
-->
<template>
    <el-dropdown @command="handleDropDown" style="margin-left: 20px">
        <el-button type="primary" v-html="buttonText">
            <i class="el-icon-caret-bottom el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in dropdowndata" :command="index+''" v-html="item.name" :key="index"></el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
  /*import 可在在父vueimport也可以在子组件vue里面import*/
    export default {
        name:"eleDropDown",
        props: {
            handleDropDown:Function,
            buttonText:{
                type: String,
                default: '下拉框'
            },
            dropdowndata:{}
        }
    }
</script>
