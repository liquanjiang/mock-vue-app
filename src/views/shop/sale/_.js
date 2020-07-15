import data from './mock'
import * as R from 'ramda'

export default {
  name: 'sale',
  components: {},
  data() {
    return {
      tableData: [], // 表格数据
      date: '', // 日期
      options: data.options, // 可选项
      stores: data.stores,
      isTrue: '', // 是否达标
      storeCode: '',
    }
  },
  created() {
    this.tableData = data.tableDate
  },
  methods: {
    query() {
      const { date = '', isTrue = '', storeCode = '' } = this
      const { tableDate } = data
      let arr = R.clone(tableDate)
      console.log(date)
      if (date) {
        arr = arr.filter(item => item.shopDate === date)
      }

      if (isTrue !== '') {
        arr = arr.filter(item => item.fifth === isTrue)
      }

      if (storeCode) {
        arr = arr.filter(item => item.shopCode === storeCode)
      }

      this.tableData = arr
    },
    // 计算总销售额
    getTotal(scope) {
      const { phone = 0, computer = 0, pad = 0 } = scope.row
      return phone + computer + pad
    }
  }
}
