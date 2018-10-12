import React, { Component } from 'react'
import { Card } from 'antd'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import EchartsReact from 'echarts-for-react'
import 'echarts/lib/component/legend'
import echartsTheme from '../themeLight'

export default class Pie extends Component {

  componentWillMount() {
    echarts.registerTheme('yusheng',echartsTheme)
  }

  // 饼状图一配置项
  pie1 = () => {
    return {
      title: {
        text: '用户骑行订单',
        x: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      series: [
        {
          name: '骑行订单',
          type: 'pie',
          radius: '70%',
          center: ['50%', '60%'],
          data: [
            { value: 3000, name: '周一' },
            { value: 8000, name: '周二' },
            { value: 5000, name: '周三' },
            { value: 10000, name: '周四' },
            { value: 15000, name: '周五' },
            { value: 20000, name: '周六' },
            { value: 17000, name: '周日' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  }

  // 饼状图二配置项
  pie2 = () => {
    return {
      title: {
        text: '用户骑行订单',
        x:'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    series: [
      {
        name:'周骑行订单',
        type:'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
        },
          emphasis: {
            show: true,
            textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data:[
          { value: 3000, name: '周一' },
          { value: 8000, name: '周二' },
          { value: 5000, name: '周三' },
          { value: 10000, name: '周四' },
          { value: 15000, name: '周五' },
          { value: 20000, name: '周六' },
          { value: 17000, name: '周日' }
        ]
      }
    ]
    }
  }
  render() {
    return (
      <div>
        <Card title='饼状图一'>
          <EchartsReact option={this.pie1()} theme='yusheng'></EchartsReact>
        </Card>
        <Card title='饼状图二' style={{marginTop:20}}>
          <EchartsReact option={this.pie2()} theme='yusheng'></EchartsReact>
        </Card>
      </div>
    )
  }
}
