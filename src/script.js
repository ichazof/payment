/* eslint-disable no-undef */
import datepicker from 'vue-date-picker'
import { DatePicker, Calendar, Table, Popconfirm, Form, Input, Button } from 'ant-design-vue'
import moment from 'moment'

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  })
}

export default {
  name: 'app',
  data () {
    this.cacheData = data.map(item => ({ ...item }))
    return {
      name: '',
      age: '',
      date: '',
      address: '',
      filteredInfo: null,
      sortedInfo: null,
      data: [],
      columns: [{
        title: 'name',
        dataIndex: 'name',
        width: '25%',
        scopedSlots: { customRender: 'name' }
      }, {
        title: 'age',
        dataIndex: 'age',
        width: '15%',
        scopedSlots: { customRender: 'age' }
      }, {
        title: 'address',
        dataIndex: 'address',
        width: '20%',
        scopedSlots: { customRender: 'address' }
      }, {
        title: 'Дата',
        dataIndex: 'date',
        width: '20%',
        scopedSlots: { customRender: 'date' }
      }, {
        title: 'operation',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' }
      }]
    }
  },
  components: {
    datepicker,
    DatePicker,
    Calendar,
    Table,
    Popconfirm,
    Form,
    Input,
    Button
  },
  beforeMount () {
    const data = []
    for (let i = 0; i < 5; i++) {
      data.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        date: new Date((1 + Math.random() * 1000) * 1000000000).format('Y-m-d'),
        address: `London Park no. ${i}`
      })
    }
    this.data = data
  },
  computed: {

  },
  methods: {
    moment,
    add () {
      this.data.push({
        key: 200,
        name: this.name,
        age: this.age,
        address: this.address,
        date: this.date
      })
      console.log(this.name, this.age, this.address, this.date)
    },
    onChange (value, dateString) {
      console.log('Selected Time: ', value)
      console.log('Formatted Selected Time: ', dateString)
    },
    handleChange (value, key, column) {
      console.log(value, key, column)
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    },
    edit (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target.editable = true
        this.data = newData
      }
    },
    save (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      console.log(target)
      if (target) {
        delete target.editable
        this.data = newData
        this.cacheData = newData.map(item => ({ ...item }))
      }
    },
    cancel (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
        delete target.editable
        this.data = newData
      }
    },
    clearFilters () {
      this.filteredInfo = null
    },
    clearAll () {
      this.filteredInfo = null
      this.sortedInfo = null
    },
    setAgeSort () {
      this.sortedInfo = {
        order: 'descend',
        columnKey: 'age'
      }
    },

    show () {
      BX24.callMethod('user.get', {
        ID: 1
      }, function (res) {
        if (res.data()) {
          var user = res.data()[0]
          if (user) { alert('Пользователя №' + user.ID + ' зовут ' + user.NAME) }
        }
      })
    },

    result (result) {
      if (result.error()) { console.error(result.error()) } else {
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
        if (result.error()) { console.error(result.error()) } else {
          console.info('Список созданных хранилищ:', result.data())
        }
      }
    )
  }
}
