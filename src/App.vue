<template lang="pug">
div.app(data-app="true")
  <img src="./assets/logo.png" />
  <h1>{{ msg }}</h1>
  <h2>Essential Links</h2>
  div(class="alert alert-primary" role="alert")
    |This is a primary alert—check it out!
  button( type="button" class="btn btn-primary" @click="show") Test
  button( type="button" class="btn btn-primary" @click="createNewEntity") Create Entity
  button( type="button" class="btn btn-primary" @click="addNewProperty") addNewProperty
  button( type="button" class="btn btn-primary" @click="addNewItem") addNewItem
  //- button( type="button" class="btn btn-primary" @click="get") Get Entity
  button( type="button" class="btn btn-primary" @click="getItem") getItem
  //- button( type="button" class="btn btn-primary" @click="getProp") getProp

  table(class="table table-hover")
    thead
      tr
        th(scope="col") 
          | id
        th(scope="col") 
          | Оператор
        th(scope="col") Номер заявки
        th(scope="col") Оплата
        th(scope="col") Дата оплаты
        th(scope="col") Сотрудник
    tbody
      tr
        th(scope="row") 22
        td  вввввв  
        td  вввввв  
        td  вввввв
        td  вввввв
        td  вввввв

    
</template>

<script lang="js" src="./script.js"></script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.main-block {
  color: green;
  &__text {
    color: red;
  }
}
</style>
