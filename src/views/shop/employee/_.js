import mock from './mock'
import * as R from 'ramda'
import qs from 'qs'

const { sexOptions, typeOptions, tableData } = mock
export default {
  name: 'shop',
  components: {},
  data() {
    return {
      tableData,
      employeeName: '', // 员工姓名
      employeeType: '', // 员工职位
      saleTime: '', // 入职年份
      addEmployeeObject: {
        employeeName: '', // 姓名
        sex: '', // 性别
        year: '', // 入职年份
        employeeType: '', // 职位
        salary: '', // 薪水
        level: '', // 级别
        department: '', // 部门
        address: '', // 办公地点
      },
      typeArray: [],
      sexOptions,
      typeOptions,
      dialogVisible: false,
      isEdit: false, // 是否处于编辑状态
    }
  },
  created() {
    this.typeArray = typeOptions.map(item => item.label)
    const tableData = localStorage.getItem('tableData')
    if (tableData && tableData !== 'null') {
      this.tableData = JSON.parse(tableData)
    } else {
      this.storageData()
    }
  },
  mounted() {
    this.queryObj()
  },
  methods: {
    // 根据url 参数自动查询
    queryObj() {
      const url = window.location.href.split('?')[1]
      if (url) {
        // 获取url中的查询参数
        const query = qs.parse(url) || {}
        console.log(query)
        const { employeeName = '', employeeType = '', saleTime = '' } = query
        this.employeeName = employeeName
        this.employeeType = employeeType
        this.saleTime = saleTime
        this.query()
      }
    },
    // 手动查询方法
    query(changeUrl = false) {
      const { employeeName, employeeType, saleTime } = this
      const table = localStorage.getItem('tableData')
      let origin = []
      if (table && table !== 'null') {
        origin = JSON.parse(table)
      } else {
        origin = mock.tableData
      }
      let array = R.clone(origin)
      if (employeeName) {
        array = array.filter(item => item.employeeName === employeeName)
      }

      if (employeeType) {
        array = array.filter(item => item.employeeType === employeeType)
      }

      if (saleTime) {
        array = array.filter(item => item.saleTime === saleTime)
      }

      const queryObj = { employeeName, employeeType, saleTime }
      this.tableData = array
      if (changeUrl) {
        this.$router.push({
          path: this.$route.path,
          query: queryObj,
        }).then(() => {
        })
      }
    },
    // 新增员工
    add() {
      const flag = this.validateData()
      if (flag) {
        const { addEmployeeObject, tableData = [], isEdit = false } = this
        const { employeeName } = addEmployeeObject
        if (!isEdit) { // 新增
          if (tableData.find(item => item.employeeName === employeeName)) {
            this.$message.warning('该员工已经存在')
            return
          }
          this.tableData.push(R.clone(addEmployeeObject))
        } else { // 修改
          const index = R.findIndex(item => item.employeeName === employeeName, tableData)
          const array = R.clone(tableData)
          array[index] = addEmployeeObject
          this.tableData = array
        }
        this.isEdit = false
        this.storageData()
        this.handleClose()
      }
    },
    // 修改员工资料
    edit(scope) {
      this.isEdit = true
      this.addEmployeeObject = R.clone(scope.row)
      this.dialogVisible = true
    },
    // 删除员工确认弹窗
    deleteUser(scope) {
      this.$confirm('确定要删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteData(scope)
      }).catch(() => {
      })
    },
    // 删除员工数据
    deleteData(scope) {
      const { tableData = [] } = this
      const { employeeName } = scope.row
      const index = R.findIndex(item => item.employeeName === employeeName, tableData)
      const array = R.clone(tableData)
      array.splice(index, 1)
      this.tableData = array
      this.storageData()
      this.handleClose()
    },
    // 校验输入合法性
    validateData() {
      const {
        employeeName, sex, year, employeeType,
        salary, level, department, address
      } = this.addEmployeeObject
      if (!employeeName) {
        this.$message.warning('请输入员工姓名')
        return false
      }

      if (!sex) {
        this.$message.warning('请选择员工性别')
        return false
      }

      if (!year) {
        this.$message.warning('请选择入职年份')
        return false
      }

      if (!employeeType) {
        this.$message.warning('请选择员工职位')
        return false
      }

      if (!salary) {
        this.$message.warning('请输入员工薪水')
        return false
      }

      if (!level) {
        this.$message.warning('请输入员工级别')
        return false
      }

      if (!department) {
        this.$message.warning('请输入员工部门')
        return false
      }

      if (!address) {
        this.$message.warning('请输入员工办公地点')
        return false
      }

      return true
    },
    // 关闭窗口方法
    handleClose() {
      this.dialogVisible = false
      this.addEmployeeObject = {
        employeeName: '', // 姓名
        sex: '', // 性别
        year: '', // 入职年份
        employeeType: '', // 职位
        salary: '', // 薪水
        level: '', // 级别
        department: '', // 部门
        address: '', // 办公地点
      }
    },
    // 新增员工弹窗
    addUser() {
      this.dialogVisible = true
    },
    // 存储当前表格数据
    storageData() {
      const { tableData } = this
      const string = JSON.stringify(tableData)
      window.localStorage.setItem('tableData', string)
    },
  }
}
