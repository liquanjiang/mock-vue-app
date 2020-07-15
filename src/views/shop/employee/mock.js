export default {
  tableData: [
    {
      employeeName: '李大师', // 姓名
      sex: 'male', // 性别
      year: '2019', // 入职年份
      employeeType: '0', // 类别
      salary: '30000', // 薪水
      level: '5', // 级别
      department: '制作', // 部门
      address: '北京', // 办公地点
    },
    {
      employeeName: 'Apple', // 姓名
      sex: 'female', // 性别
      year: '2020', // 入职年份
      employeeType: '4', // 类别
      salary: '30000', // 薪水
      level: '5', // 级别
      department: '运营', // 部门
      address: '北京', // 办公地点
    }
  ],
  sexOptions: [
    {
      label: '男',
      value: 'male',
    },
    {
      label: '女',
      value: 'female',
    },
  ],
  typeOptions: [
    {
      label: '前端',
      value: '0',
    },
    {
      label: 'JAVA',
      value: '1',
    },
    {
      label: '算法',
      value: '2',
    },
    {
      label: 'Python',
      value: '3',
    },
    {
      label: '运营',
      value: '4',
    },
    {
      label: 'OPS',
      value: '5',
    },
    {
      label: '安全',
      value: '6',
    },
  ],
}
