<template>
  <div>
    <button class="btn btn-success" @click="increaseCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decreaseCounter">- Azalt</button>
    <br>
    <button class="btn btn-success" @click="increment">+ Arttır </button>
    <button class="btn btn-danger" @click="decrement">- Azalt </button>
    <br>
    <button class="btn btn-success" @click="incAsync({time: 1000})">+ Async Arttır </button>
    <button class="btn btn-danger" @click="decAsync">- Async Azalt </button>
  </div>
</template>

<script>
import {mapMutations, mapActions} from "vuex"
export default {
  methods : {
    ...mapMutations(["increaseCounter", "decreaseCounter"]),
    ...mapActions([
      "increment",
      "decrement",
      "incAsync",
      "decAsync",
    ])
    // increment(){
    //   this.$store.dispatch("increment")
    // },
    // decrement(){
    //   this.$store.dispatch("decrement")
    // },
    // incrementAsync(){
    //   this.$store.dispatch("incAsync")
    // },
    // decrementAsync(){
    //   this.$store.dispatch("decAsync")
    // },
    // incrementCounter(){
    //   //this.$emit("counterEvent", 1);
    //   //this.$store.state.counter++;
    //   this.$store.commit("updateCounter",1);
    // },
    // decrementCounter(){
    //   //this.$emit("counterEvent", -1);
    //   this.$store.commit()

    // }
  }
}
</script>

<style>
</style>
