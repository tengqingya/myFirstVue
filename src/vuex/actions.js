export  default {
    clear:({commit })=>{
      commit ('clear')
  },

   pick:({commit },data)=>{
      console.log("actions pick")
     commit ('pick',data)
  },
  change({commit },picked){
    commit ('change',picked)
  }
}
