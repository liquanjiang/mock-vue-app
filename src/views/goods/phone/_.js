import mock from './mock'
import echarts from 'echarts'

export default {
  name: 'phone',
  components: {},
  data() {
    return {
      tableData: [],
      activeName: 'first',
    }
  },
  created() {
    this.tableData = mock.tableData
  },
  mounted() {
    this.drawPie()
    this.drawBar()
  },
  methods: {
    handleClick() {

    },
    // 绘制饼状图的方法
    drawPie() {
      const { tableData } = this
      // 初始化元素
      const pie = document.getElementById('pieChart')
      const myChart = echarts.init(pie)
      const data = tableData.map(item => `${item.Name}${item.number}`)
      const table = tableData.map(item => {
        const { total, Name, number } = item
        return {
          value: total,
          name: `${Name}${number}`
        }
      })
      // 绘制图标
      const option = {
        title: {
          text: '中国手机市场统计',
          subtext: '纯属虚构',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: data
        },
        series: [
          {
            name: '手机统计',
            type: 'pie',
            radius: '55%',
            center: ['60%', '60%'],
            data: table,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }

      myChart.setOption(option)
    },

    // 绘制柱状图
    drawBar() {
      const { tableData } = this
      // 初始化元素
      const bar = document.getElementById('barChart')
      const myChart = echarts.init(bar)
      const data = tableData.map(item => `${item.Name}${item.number}`)
      const table = tableData.map(item => {
        const { total, Name, number, company } = item
        return {
          name: `${Name}${number}`,
          type: 'bar',
          stack: company,
          data: [total]
        }
      })

      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: data,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['市场']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: table
      }

      myChart.setOption(option)
    }

  },
}
