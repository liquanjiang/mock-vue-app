import data from './mock'
import * as R from 'ramda'

export default {
  name: 'equipment',
  components: {},
  data() {
    return {
      deviceName: '', // 设备名称
      deviceType: '', // 设备类型
      saleTime: '', // 上市时间
      tableData: [], // 表格数据
      options: data.options,
    }
  },
  created() {
    this.tableData = data.tableDate
  },
  methods: {
    // 查询方法
    query() {
      const { deviceName = '', deviceType = '', saleTime = '' } = this
      const { tableDate } = data
      const array = R.clone(tableDate)
      let arr = []
      if (deviceName) {
        arr = R.filter(item => item.deviceName === deviceName, array)
      } else {
        arr = array
      }

      if (deviceType) {
        arr = R.filter(item => item.deviceType === deviceType, arr)
      }

      if (saleTime) {
        arr = R.filter(item => item.saleTime.includes(saleTime), arr)
      }

      this.tableData = arr
    },
  }
}
