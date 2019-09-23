/* eslint-disable no-undef */
import datepicker from 'vue-date-picker'
import {
  DatePicker,
  Calendar,
  Table,
  Popconfirm,
  Form,
  Input,
  Button
} from 'ant-design-vue'
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
    this.cacheData = data.map(item => ({
      ...item
    }))
    return {
      dataBig: [],
      operator: '',
      cost: '',
      date: '',
      number: '',
      filteredInfo: null,
      sortedInfo: null,
      data: [],
      columns: [{
        title: 'Номер заяаки',
        dataIndex: 'number',
        width: '25%',
        scopedSlots: {
          customRender: 'number'
        }
      }, {
        title: 'Оператор',
        dataIndex: 'operator',
        width: '15%',
        scopedSlots: {
          customRender: 'operator'
        }
      }, {
        title: 'Оплата',
        dataIndex: 'cost',
        width: '20%',
        scopedSlots: {
          customRender: 'cost'
        }
      }, {
        title: 'Дата',
        dataIndex: 'date',
        width: '20%',
        scopedSlots: {
          customRender: 'date'
        }
      }, {
        title: 'operation',
        dataIndex: 'operation',
        scopedSlots: {
          customRender: 'operation'
        }
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
  // beforeMount () {
  //   const data = []
  //   for (let i = 0; i < 5; i++) {
  //     data.push({
  //       key: i.toString(),
  //       name: `Edrward ${i}`,
  //       cost: 32,
  //       number: 222,
  //       date: new Date((1 + Math.random() * 1000) * 1000000000).format('Y-m-d'),
  //       operator: `London Park no. ${i}`
  //     })
  //   }
  //   this.data = data
  // },
  watch: {
    dataBig () {
      this.data = this.dataBig.map(e => {
        const container = {}
        container.key = +e.ID
        container.cost = e.PROPERTY_VALUES.cost
        container.number = e.PROPERTY_VALUES.number
        container.date = e.PROPERTY_VALUES.date
        container.operator = e.PROPERTY_VALUES.operator
        return container
      })
      console.log(this.data)
    }
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
      this.addNewItem(this.number, this.operator, this.cost, this.date)
      console.log(this.name, this.age, this.address, this.date)
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
    remove (key) {
      BX24.callMethod('entity.item.delete', {
        ENTITY: 'payment',
        ID: key
      },
      this.result)
      const newData = [...this.data]
      this.data = newData.filter(item => key !== item.key)
    },
    save (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      console.log(target)
      if (target) {
        delete target.editable
        this.data = newData
        this.cacheData = newData.map(item => ({
          ...item
        }))
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
          if (user) {
            alert('Пользователя №' + user.ID + ' зовут ' + user.NAME)
          }
        }
      })
    },

    result (result) {
      if (result.error()) {
        console.error(result.error())
      } else {
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
        PROPERTY: 'operator',
        NAME: 'Operator',
        TYPE: 'S'
      },
      this.result)
      BX24.callMethod('entity.item.property.add', {
        ENTITY: 'payment',
        PROPERTY: 'number',
        NAME: 'number',
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
    addNewItem (number, operator, cost, date) {
      BX24.callMethod('entity.item.add', {
        ENTITY: 'payment',
        NAME: 'Hello, world!',
        PROPERTY_VALUES: {
          date: date,
          cost: cost,
          id: 2,
          operator: operator,
          number: number
        }
      }, this.result)
    },
    update () {
      BX24.callMethod('entity.item.get', {
        ENTITY: 'payment'

      }, (result) => {
        if (result.error()) {
          console.error(result.error())
        } else {
          console.log(result.data())
          this.dataBig = result.data()
        }
      })
    }
    // getProp () {
    //   BX24.callMethod('entity.item.property.get', {
    //     ENTITY: 'payment'
    //   }, this.result)
    // }

  }
  // get () {
  //   BX24.callMethod(
  //     'entity.get', {},
  //     function (result) {
  //       if (result.error()) { console.error(result.error()) } else {
  //         console.info('Список созданных хранилищ:', result.data())
  //       }
  //     }
  //   )
  // }
}
