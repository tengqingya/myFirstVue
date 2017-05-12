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
            date2:this.date
        }
    },
    props: ["date"],
    computed:{
    },
    watch:{
      date: function(val){
          console.log(val)
        this.date2 = val
      },
      date2:function (val) {
        console.log(val)
        this.$emit("timechange",val);
      }
    }
  }
</script>
