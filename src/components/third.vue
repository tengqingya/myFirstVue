<template>
  <div>
  <el-input @focus="myFocus($event)" v-model="aa" placeholder="请输入内容" size="small" icon="search" :on-icon-click="onIconClick" :adafda="aa" :auto-complete="autoComplete" :myAutoComplete="myAutoComplete" ref="input">
    <label slot="prepend" v-if="showS">this is slot</label>
  </el-input>
    <div>
      <slot name="slot1" v-if="showSlot1">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </slot>
    </div>
    <div>
      <slot name="showSlot2">
        <ui>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ui>
      </slot>
    </div>

    <input type="checkbox" name="test_checkbox" :checked="test" @click="onClick"> Test
    <mydropdown  :button-text="orderTypeText" :dropdowndata="orderType" :name="dropname" :id="dropid" v-on:dropdown="dropdown"></mydropdown>
    <timepicker :date="date" :timechange="timeChange"></timepicker>
    <!--<myinput></myinput>-->
  </div>
</template>

<script>
  import Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'

  import mydropdown from './dropdown'
  import timepicker from  './timepicker'
  import myinput from  './input'

  Vue.use(Element);

  export default {
    data() {
      return {
        aa: '',
        autoComplete:'on',
        test: false,

        orderTypeText:"套餐类型",
        orderType:[{"id":-1,"name1":"全部"},{"id":0,"name1":"普通套餐"},{"id":1,"name1":"即充套餐"}],
        dropname:"name1",
        dropid:"id",

        date:[]
      }
    },
    mounted: function() {
    },
    components: {mydropdown,timepicker,myinput},
    props:{
        myAutoComplete:{
          type: String,
          default: 'off'
        },
        showS:{
          type: [Boolean, Object],
          default: false
        },
      showSlot1:{
        type: [Boolean, Object],
        default: true
      }
    },
    methods:{
      onIconClick:function () {
        console.log("onIconClick")
        console.log(this.$refs['input'].$el)
      },
      myFocus:function (event) {
        console.log("myFocus:子组件在focus的时候触发了focus方法，父组件通过@focus='**'来和子组件通信,$event可省略,传入多个参数的时候不可以省略")
        console.log(event.target.value)
        this.test = !this.test
        this.aa="adsadadasdsda"
        console.log("如果不使用:checked无法实现双向绑定")
      },
      onClick: function (e) {
        if (!confirm('are you sure?')) {
          e.preventDefault()
        } else {
          this.test = e.target.checked
          console.log(this.test)
        }
      },
      dropdown:function (a,b) {
        this.orderTypeText = b
      },
      timeChange:function (val) {
        this.date=val
      }
    }
  }
</script>

<style>
</style>

<!--
el-icon-d-caret:before{content:"\\E610"}.el-icon-date:before{content:"\\E611"}.el-icon-delete:before{content:"\\E612"}.el-icon-document:before{content:"\\E613"}.el-icon-edit:before{content:"\\E614"}.el-icon-information:before{content:"\\E615"}.el-icon-loading:before{content:"\\E616"}.el-icon-menu:before{content:"\\E617"}.el-icon-message:before{content:"\\E618"}.el-icon-minus:before{content:"\\E619"}.el-icon-more:before{content:"\\E61A"}.el-icon-picture:before{content:"\\E61B"}.el-icon-plus:before{content:"\\E61C"}.el-icon-search:before{content:"\\E61D"}.el-icon-setting:before{content:"\\E61E"}.el-icon-share:before{content:"\\E61F"}.el-icon-star-off:before{content:"\\E620"}.el-icon-star-on:before{content:"\\E621"}.el-icon-time:before{content:"\\E622"}.el-icon-warning:before{content:"\\E623"}.el-icon-delete2:before{content:"\\E624"}.el-icon-upload2:before{content:"\\E627"}.el-icon-view:before{content:"\\E626"}.el-icon-loading{animation:rotating 1s linear infinite}.el-icon--right{margin-left:5px}.el-icon--left{margin-right:5px}@keyframes
-->
