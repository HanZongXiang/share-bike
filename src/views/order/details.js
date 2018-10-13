import React, { Component } from 'react'
import axios from '../../axios'
import { Card } from 'antd'
import FullHeader from '../../components/fullheader'
import './details.less'

export default class Details extends Component {
  // componentWillMount() {
  //   this.drawPolyLine()
  // }
  state = {
    orderInfo: []
  }

  componentDidMount() {
    this.getData()
  }
  
  getData = () => {
    const id = this.props.match.params.id
    axios.get('/order/detail',{id}).then(res => {
      if (res.code == 0) {
        console.log(res)
        this.setState({
          orderInfo: res.result
        })
        this.initMap(res.result)
      }
    })
  }

  // 初始化地图实例
  initMap = result => {
    const BMap = window.BMap
    // var map = new BMap.Map('bmap-container')
    // var point = new BMap.Point(116.404, 39.915)
    // map.centerAndZoom(point, 15)
    this.map = new BMap.Map('bmap-container')
    this.addControl()
    this.drawPolyLine(result.position_list)
    this.drawServiceArea(result.area)
  }

  // 添加控件
  addControl = () => {
    const BMap = window.BMap
    const map = this.map
    map.addControl(new BMap.NavigationControl({
      anchor: window.BMAP_ANCHOR_TOP_RIGHT
    }));
    map.addControl(new BMap.ScaleControl({
      anchor: window.BMAP_ANCHOR_TOP_RIGHT
    }));
  }

  // 绘制路径折线图
  drawPolyLine = position_list => {
    const BMap = window.BMap
    const map = this.map

    let startPoint = position_list[0]
    let endPoint = position_list[position_list.length-1]
    console.log(startPoint, endPoint)
    let startBmapPoint = new BMap.Point(startPoint.lon,startPoint.lat) // 绘制一个百度地图起始点
    let endBmapPoint = new BMap.Point(endPoint.lon,endPoint.lat) // 绘制一个百度地图结束点

    // 起始点自定义icon
    let startIcon = new BMap.Icon("/imgs/start_point.png", new BMap.Size(36, 42), {
      imageSize:new BMap.Size(36,42)    
    })

    // 结束点自定义icon
    let endIcon = new BMap.Icon('/imgs/end_point.png', new BMap.Size(36, 42), {
      imageSize: new BMap.Size(36,42)
    })
    let startMarker = new BMap.Marker(startBmapPoint, { icon:startIcon }) // 添加起始点标注
    let endMarker = new BMap.Marker(endBmapPoint, { icon:endIcon }) // 添加结束点标注
    map.addOverlay(startMarker) // 添加地图起始点
    map.addOverlay(endMarker) // 添加地图结束点
    map.centerAndZoom(startBmapPoint, 11) // 设置地图中心点

    let polyline = new BMap.Polyline(position_list.map(point => {
      return new BMap.Point(point.lon,point.lat)
    }),
    { strokeColor:'#1869AD',strokeWidth:3,strokeOpacity:1 })

    // 添加折线标注
    map.addOverlay(polyline)

  }

  // 绘制服务区域图
  drawServiceArea = area => {
    const BMap = window.BMap
    const map = this.map
    let polygon = new BMap.Polygon(area.map(point => {
      return new BMap.Point(point.lon,point.lat)
    }),
    {
      strokeColor: '#ff0000',
      strokeWeight: 4,
      fillColor: '#ff6700',
      fillOpacity: 0.5 
    })
    // 添加服务区标注
    map.addOverlay(polygon)
  }

  render() {
    const detail = this.state.orderInfo

    return (
      <div className='details-wrap'>
        <FullHeader></FullHeader>
        <Card>
          <div className='bmap-wrap' id='bmap-container'></div>
          <div className='detail-info'>
            <div className='detail-title'>
              基础信息
            </div>
            <ul>
              <li>
                <span className='detail-left'>用车模式</span>
                <span className='detail-right'>{detail.mode === 1 ? '服务区' : '停车点'}</span>
              </li>
              <li>
                <span className='detail-left'>订单编号</span>
                <span className='detail-right'>{detail.order_sn}</span>
              </li>
              <li>
                <span className='detail-left'>车辆编号</span>
                <span className='detail-right'>{detail.bike_sn}</span>
              </li>
              <li>
                <span className='detail-left'>用户姓名</span>
                <span className='detail-right'>{detail.user_name}</span>
              </li>
              <li>
                <span className='detail-left'>手机号码</span>
                <span className='detail-right'>{detail.mobile}</span>
              </li>
            </ul>
          </div>
          <div className='detail-info'>
            <div className="detail-title">
              行驶轨迹
            </div>
            <ul style={{ marginBottom: 0 }}>
              <li>
                <span className="detail-left">行程起点</span>
                <span className="detail-right">{detail.start_location}</span>
              </li>
              <li>
                <span className="detail-left">行程终点</span>
                <span className="detail-right">{detail.end_location}</span>
              </li>
              <li>
                <span className="detail-left">行驶里程</span>
                <span className="detail-right">{detail.distance/1000 + 'Km'}</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    )
  }
}
