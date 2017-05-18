export default {
  clear(state){
    state.checkData = []
  },
  pick(state,picked){
    console.log("mutations pick")
    console.log(picked)
    state.isCheck = picked
  },
  change(state,picked){
    state.isCheck = picked
  }
}
