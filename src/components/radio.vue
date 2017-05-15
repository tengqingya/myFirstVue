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
        name:"eleradio",
        props: {
            data:{
                type:Array
            },
            radioChecked:{
                type:Number,
                default:1
            }
        },
        data() {
            return {
                radio: this.radioChecked
            };
        },
        methods:{
        },
        watch:{
            radio:function (e) {
                this.$emit("radio",e)
            },
            radioChecked:function (e) {
                this.radio = e
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
