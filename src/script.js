/* eslint-disable no-undef */
import datepicker from 'vue-date-picker'
import { DatePicker, Calendar } from 'ant-design-vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    datepicker,
    DatePicker,
    Calendar
  },
  methods: {
    show () {
      BX24.callMethod('user.get', {
        ID: 1
      }, function (res) {
        if (res.data()) {
          var user = res.data()[0]
          if (user) { alert('Пользователя №' + user.ID + ' зовут ' + user.NAME)}
        }
      })
    },

    result (result) {
      if (result.error()) { console.error(result.error())} else {
        console.log(result.data())
      }
    },
    createNewEntity () {
      BX24.callMethod('entity.add', {
        'ENTITY': 'payment',
        'NAME': 'Payment',
        'ACCESS': {
          U1: 'W',
          AU: 'R'
        }
      }, this.result)
    },

    addNewProperty () {
      BX24.callMethod('entity.item.property.add', {
        ENTITY: 'payment',
        PROPERTY: 'id',
        NAME: 'id',
        TYPE: 'N'
      },
      this.result)
      BX24.callMethod('entity.item.property.add', {
        ENTITY: 'payment',
        PROPERTY: 'cost',
        NAME: 'Cost',
        TYPE: 'S'
      },
      this.result)
      BX24.callMethod('entity.item.property.add', {
        ENTITY: 'payment',
        PROPERTY: 'date',
        NAME: 'Date',
        TYPE: 'S'
      },
      this.result)
    },
    addNewItem () {
      BX24.callMethod('entity.item.add', {
        ENTITY: 'payment',
        NAME: 'Hello, world!',
        PROPERTY_VALUES: {
          date: 'todat date',
          cost: 'coooooost',
          id: 2
        }
      }, this.result)
    },
    getItem () {
      BX24.callMethod('entity.item.get', {
        ENTITY: 'payment'

      }, this.result)
    },
    getProp () {
      BX24.callMethod('entity.item.property.get', {
        ENTITY: 'payment'
      }, this.result)
    }

  },
  get () {
    BX24.callMethod(
      'entity.get', {},
      function (result) {
        if (result.error()) { console.error(result.error())} else {
          console.info('Список созданных хранилищ:', result.data())
        }
      }
    )
  }
}
