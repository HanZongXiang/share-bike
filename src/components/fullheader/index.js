import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.less'

export default class FullHeader extends Component {
  render() {
    return (
      <div className='wrapper clearfix'>
        <h2 className='title fl'>共享单车后台系统</h2>
        <div className='logout fr'>
          <Link to='/logout'>退出</Link>
        </div>
        <div className='detail fr'>
          欢迎，<span>钟汉良</span>
        </div>
      </div>
    )
  }
}
