<template lang="pug">
div.app(data-app="true")
  <img src="./assets/logo.png" />
  <h1>{{ msg }}</h1>
  <h2>Essential Links</h2>
  div(class="alert alert-primary" role="alert")
    |This is a primary alert—check it out!
  button( type="button" class="btn btn-primary" @click="show") Test
  table(class="table table-hover")
    thead
      tr
        th(scope="col") 1
        th(scope="col") 3
        th(scope="col") 4
        th(scope="col") 5
    tbody
      tr
        th(scope="row") 22
        td  вввввв  
        td  вввввв
        td  вввввв

    
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    show () {
      BX24.callMethod('user.get', {ID: 1}, function(res){
    if(res.data())
    {
        var user = res.data()[0];
        if(!!user)
            alert('Пользователя №' + user.ID + ' зовут ' + user.NAME);
    }
});
    }
  },
};
</script>

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
