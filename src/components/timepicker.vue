<template>
  <div class="block">
    <span class="demonstration">时间</span>
    <el-date-picker
      v-model="date2"
      type="datetimerange"
      placeholder="Select time range">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    name:"timepicker",
    data(){
        return{
            date2:[]
        }
    },
    props: {
      value: {
        type: Array,
        default: () => [],
      }
    },
    computed:{
    },
    watch:{
      value: function(val){
          console.log(val)
        this.date2 = val
      }
    }
  }
</script>
