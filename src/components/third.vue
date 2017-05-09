<template>
  <div>
  <el-input v-model="aa" placeholder="请输入内容" size="small" icon="search" :on-icon-click="onIconClick" :adafda="aa" :auto-complete="autoComplete" :myAutoComplete="myAutoComplete">
    <label slot="prepend">this is slot</label>
  </el-input>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'

  Vue.use(Element);

  export default {
    data() {
      return {
        aa: '',
        autoComplete:'on'
      }
    },
    mounted: function() {
    },
    props:{
        myAutoComplete:{
          type: String,
          default: 'off'
        },
    },
    methods:{
      onIconClick:function () {
          console.log("onIconClick")
      }
    }
  }
</script>

<style>
</style>

<!--
el-icon-d-caret:before{content:"\\E610"}.el-icon-date:before{content:"\\E611"}.el-icon-delete:before{content:"\\E612"}.el-icon-document:before{content:"\\E613"}.el-icon-edit:before{content:"\\E614"}.el-icon-information:before{content:"\\E615"}.el-icon-loading:before{content:"\\E616"}.el-icon-menu:before{content:"\\E617"}.el-icon-message:before{content:"\\E618"}.el-icon-minus:before{content:"\\E619"}.el-icon-more:before{content:"\\E61A"}.el-icon-picture:before{content:"\\E61B"}.el-icon-plus:before{content:"\\E61C"}.el-icon-search:before{content:"\\E61D"}.el-icon-setting:before{content:"\\E61E"}.el-icon-share:before{content:"\\E61F"}.el-icon-star-off:before{content:"\\E620"}.el-icon-star-on:before{content:"\\E621"}.el-icon-time:before{content:"\\E622"}.el-icon-warning:before{content:"\\E623"}.el-icon-delete2:before{content:"\\E624"}.el-icon-upload2:before{content:"\\E627"}.el-icon-view:before{content:"\\E626"}.el-icon-loading{animation:rotating 1s linear infinite}.el-icon--right{margin-left:5px}.el-icon--left{margin-right:5px}@keyframes
-->
