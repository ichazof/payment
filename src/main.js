import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/lib/date-picker/style/css'
import 'ant-design-vue/lib/calendar/style/css'
import 'ant-design-vue/lib/table/style/css'
import 'ant-design-vue/lib/popconfirm/style/css'
import 'ant-design-vue/lib/form/style/css'
import 'ant-design-vue/lib/input/style/css'
import 'ant-design-vue/lib/button/style/css'
// require('bootstrap/dist/css/bootstrap.min.css')

Date.prototype.format = function (format) {
  const shortDay = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  const longDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  const shortMonth = ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'нояб', 'дек']
  const longMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  const desclensionsMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  const countDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let result = format
  if (format.indexOf('d') !== -1) {
    result = result.replace('d', ('0' + this.getDate()).slice(-2))
  }
  if (format.indexOf('D') !== -1) {
    result = result.replace('D', shortDay[this.getDay()])
  }
  if (format.indexOf('j') !== -1) {
    result = result.replace('j', this.getDate())
  }
  if (format.indexOf('l') !== -1) {
    result = result.replace('l', longDay[this.getDay()])
  }
  if (format.indexOf('N') !== -1) {
    result = result.replace('N', this.getDay() === 0 ? 7 : this.getDay())
  }
  if (format.indexOf('w') !== -1) {
    result = result.replace('w', this.getDay())
  }
  if (format.indexOf('z') !== -1) {
    const newYearsDay = new Date(this.getFullYear(), 0, 1)
    result = result.replace('z', Math.floor((this.getTime() - newYearsDay.getTime()) / 1000 / 60 / 60 / 24 + 1))
  }
  if (format.indexOf('W') !== -1) {
    const newYear = new Date(this.getFullYear(), 0, 1)
    let day = newYear.getDay() - 1
    day = (day >= 0 ? day : day + 7)
    const daynum = Math.floor((this.getTime() - newYear.getTime() - (this.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) / 86400000) + 1
    let weeknum
    if (day < 4) {
      weeknum = Math.floor((daynum + day - 1) / 7) + 1
      if (weeknum > 52) {
        const nYear = new Date(this.getFullYear() + 1, 0, 1)
        let nDay = nYear.getDay() - 1
        nDay = nDay >= 0 ? nDay : nDay + 7
        weeknum = nDay < 4 ? 1 : 53
      }
    } else {
      weeknum = Math.floor((daynum + day - 1) / 7)
    }
    result = result.replace('W', weeknum)
  }
  if (format.indexOf('F') !== -1) {
    result = result.replace('F', longMonth[this.getMonth()])
  }
  if (format.indexOf('m') !== -1) {
    result = result.replace('m', ('0' + (this.getMonth() + 1)).slice(-2))
  }
  if (format.indexOf('M') !== -1) {
    result = result.replace('M', shortMonth[this.getMonth()])
  }
  if (format.indexOf('n') !== -1) {
    result = result.replace('n', this.getMonth() + 1)
  }
  if (format.indexOf('t') !== -1) {
    result = result.replace('t', this.getMonth() === 1 && Date.isLeapYear(this.getFullYear()) ? 29 : countDays[this.getMonth()])
  }
  if (format.indexOf('L') !== -1) {
    result = result.replace('L', Date.isLeapYear(this.getFullYear()) ? 1 : 0)
  }
  if (format.indexOf('Y') !== -1) {
    result = result.replace('Y', this.getFullYear())
  }
  if (format.indexOf('y') !== -1) {
    result = result.replace('y', String(this.getFullYear()).slice(2))
  }
  if (format.indexOf('H') !== -1) {
    result = result.replace('H', ('0' + this.getHours()).slice(-2))
  }
  if (format.indexOf('h') !== -1) {
    result = result.replace('h', this.getHours())
  }
  if (format.indexOf('i') !== -1) {
    result = result.replace('i', ('0' + this.getMinutes()).slice(-2))
  }
  if (format.indexOf('s') !== -1) {
    result = result.replace('s', ('0' + this.getSeconds()).slice(-2))
  }
  if (format.indexOf('U') !== -1) {
    result = result.replace('U', +this.Date() / 1000)
  }
  if (format.indexOf('G') !== -1) {
    result = result.replace('G', desclensionsMonth[this.getMonth()])
  }
  return result
}

new Vue({
  el: '#app',
  render: h => h(App)
})
