export default {
  menus: [
    {
      menuName: '门店管理',
      url: 'shop',
      icon: 'el-icon-menu',
      children: [
        {
          menuName: '门店设备',
          url: 'equipment',
        },
        {
          menuName: '门店销售',
          url: 'sale',
        },
        {
          menuName: '门店人员',
          url: 'employee'
        },
      ]
    },
    {
      menuName: '商品管理',
      url: 'sku',
      icon: 'el-icon-menu',
      children: [
        {
          menuName: '手机',
          url: 'phone',
        },
        {
          menuName: '平板',
          url: 'pad',
        },
        {
          menuName: '电脑',
          url: 'computer',
        },
        {
          menuName: '手表',
          url: 'watch',
        },
        {
          menuName: '笔记本',
          url: 'book'
        },
      ]
    },
    {
      menuName: '部门管理',
      url: 'department',
      icon: 'el-icon-menu',
      children: [
        {
          menuName: '人力',
          url: 'human',
        },
        {
          menuName: '技术',
          url: 'tech',
        },
        {
          menuName: '销售',
          url: 'salesman',
        },
        {
          menuName: '研发',
          url: 'search',
        },
        {
          menuName: '工厂',
          url: 'works'
        },
      ]
    },
    {
      menuName: '薪资福利管理',
      url: 'money',
      icon: 'el-icon-menu',
      children: [
        {
          menuName: '社保',
          url: 'shebao',
        },
        {
          menuName: '工资',
          url: 'salary',
        },
        {
          menuName: '提成',
          url: 'ticheng',
        },
        {
          menuName: '公积金',
          url: 'gongjijin'
        },
      ]
    },
    {
      menuName: '仓库管理',
      url: 'storehouse',
      icon: 'el-icon-menu',
      children: [
        {
          menuName: '仓库',
          url: 'phone',
        },
        {
          menuName: '人员',
          url: 'pad',
        },
        {
          menuName: '商品',
          url: 'computer',
        },
      ]
    },
    {
      menuName: '合同管理',
      url: 'contract',
      icon: 'el-icon-menu',
      children: [
        {
          menuName: '归档合同',
          url: 'phone',
        },
        {
          menuName: '已签合同',
          url: 'pad',
        },
        {
          menuName: '待签合同',
          url: 'computer',
        },
      ]
    },
  ]
}
