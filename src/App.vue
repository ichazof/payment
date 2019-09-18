<template lang="pug">
div.app(data-app="true")
  Input(v-model="number")
  Input(v-model="cost")
  Input(v-model="operator")
  DatePicker(
          :allowClear="false"
          format="YYYY-MM-DD"
          @change="(q, e) => date = e"
  )

  Button( type="primary" @click="add") Добавить
  Button( type="primary" @click="update") Обновить
  Button( type="primary" @click="addNewProperty") cdjqcndf
  Table(:dataSource="data" :columns="columns"  bordered)
    template(v-for="col in ['number', 'cost', 'operator', 'date']" :slot="col" slot-scope="text, record, index")
      div(:key="col")
        DatePicker(
          v-if="col === 'date' && record.editable" 
          :defaultValue="moment(text, 'YYYY-MM-DD')" 
          :allowClear="false"
          format="YYYY-MM-DD"
          @change="(q, e) => handleChange(e, record.key, col)"
          )
        Input(
          v-else-if="record.editable"
          style="margin: -5px 0"
          :value="text"
          @change="e => handleChange(e.target.value, record.key, col)"
        )
        template(v-else) {{text}}
    template(slot="operation" slot-scope="text, record, index")
      div(class='editable-row-operations')
        span(v-if="record.editable")
          a(@click="() => save(record.key)") Save
          popconfirm(title='Sure to cancel?' @confirm="() => cancel(record.key)")
            a Cancel
        span(v-else)
          a(@click="() => edit(record.key)") Edit

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
.editable-row-operations a {
  margin-right: 8px;
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
