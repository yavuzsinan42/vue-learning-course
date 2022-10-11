<template>
  <div class="container">
    <h3>User {{$route.params.id}} Edit Component</h3>
    <hr>
    
    <p>Ad: {{$route.query.name}}</p>
    <p>Soyad:{{$route.query.lastName}} </p>
    <button class="btn btn-primary" @click="saved = true">Onayla</button>
    <div style="height: 800px;"></div>
    <p id="data">TestMetni</p>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        saved: false
      }
    },
    beforeRouteLeave(to, from, next){
      if(this.saved){
        next()
      }else{
        if(confirm("Tüm bilgileriniz kaybolacak. Emin misiniz?")){
          next()
        }
      }
    }
  }
</script>
