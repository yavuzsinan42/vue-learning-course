<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Kullanıcı Adı {{name}}</p>
    <p>Reverse:      {{switchName()}}</p>
    <p> Kullanıcı Yaşı: {{age}}</p>
    <button @click = "sendToParent">Parent'a Veri Gönder</button>
  </div>
</template>
<script>
  import { eventBus } from '../main';
  export default {
   // props: ["name"],
   props: {
    name: {
       type: [String,Array],
       default: '',
 
    },
    age: Number
   },
    methods : {
      switchName(){
        return this.name.split("").reverse().join("");
      },
      sendToParent(){
        this.$emit("data", "Test Metni");
      }
    },
    created(){
      eventBus.$on("ageWasEdited",(age)=>{
        this.age=age
      })
    }
  }
</script>
<style scoped>
  div {
    background-color: lightcoral;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>
