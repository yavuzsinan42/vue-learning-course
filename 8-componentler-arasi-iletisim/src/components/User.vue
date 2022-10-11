<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>Burası parent component yani herşeyin import edildiği component :)</p>
    <hr>
    <button @click="changeName">Adı Değiştir</button>
    <p>ChildData: {{childData}}</p>
    <div class="row">
      
      <app-user-detail :age="age" :name="title" @data="childData=$event"></app-user-detail>
      <app-user-edit :age="age" @ageWasEdited="age=$event"></app-user-edit>
    </div>
  </div>
</template>
<script>
  import UserDetail from "./UserDetail";
  import UserEdit from "./UserEdit";
  export default {
    components : {
      appUserDetail : UserDetail,
      appUserEdit : UserEdit,
    },
    data(){
      return{
        title: "YSA",
        childData: "",
        age: 25
      }
    }, 
    methods:{
      changeName(){
        this.title="Yavuz"
      }
    }
  }
</script>

<style>
  div.container{
    margin-top: 30px;
    padding: 20px 40px;
    background-color: #6a8d99;
    border: 1px solid #666;
  }
  div.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
