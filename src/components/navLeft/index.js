import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import './index.less'

const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item

export default class NavLeft extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='nav-left'>
                <Menu mode='vertical' theme="dark">
                    <MenuItem key='/首页'>
                        <Link to='/admin/home'>首页</Link>
                    </MenuItem>
                    <MenuItem key='/订单管理'>
                        <Link to='/admin/order'>订单管理</Link>
                    </MenuItem>
                    <SubMenu title='图例'>
                        <MenuItem key='/柱状图'>
                            <Link to=''>柱状图</Link>
                        </MenuItem>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}