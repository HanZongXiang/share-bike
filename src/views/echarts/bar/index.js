import React, { Component } from 'react'
import { Card } from 'antd'
import echarts from 'echarts/lib/echarts'  // 引入echarts核心包
import 'echarts/lib/chart/bar'  // 引入柱状图组件
import 'echarts/lib/component/legend'  // 引入legend组件
import EchartsReact from 'echarts-for-react'  // 引入第三方针对于react的echarts库
import echartsTheme from '../echartTheme'  // 引入echarts主题模块


export default class Bar extends Component {

  componentWillMount() {
    echarts.registerTheme('yusheng',echartsTheme)
  }

  bar1 = () => {
    return {
      color: ['#409eff'],
      title: {
        text: 'OFO周骑行订单',
        x:'center'
      },
      tooltip: {
        trigger: 'axis',
        // axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        //   type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        // }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'OFO单车骑行订单',
          type: 'bar',
          barWidth: '40%',
          data: [4000, 6000, 9000, 12000, 5000, 20000, 18000]
        }
      ]
    }
  }

  // 柱形图二配置项
  bar2 = () => {
    return {
      title: {
        text:'用户骑行订单',
        x:'center'
      },
      tooltip: {
        trigger:'axis'
      },
      xAxis: [
        {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      legend: {
        data : ['OFO','摩拜','小蓝单车'],
        right: 'right'
      },
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'OFO',
          type: 'bar',
          data: [2000,4000,5000,8000,12000,9000,15000]
        },
        {
          name: '摩拜',
          type: 'bar',
          data: [3000,1500,6000,8000,5000,12000,10000]
        },
        {
          name: '小蓝单车',
          type: 'bar',
          data: [5000,8000,12000,15000,18000,14000,16000]
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Card title='柱状图一'>
          <EchartsReact option={this.bar1()}></EchartsReact>
        </Card>
        <Card title='柱形图二' style={{marginTop:20}}>
          <EchartsReact option={this.bar2()} theme='yusheng'></EchartsReact>
        </Card>
      </div>
    )
  }
}
