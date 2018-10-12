import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import './index.less'

const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item

export default class NavLeft extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className='nav-left'>
                <Menu mode='vertical' theme="dark">
                    <MenuItem key='/首页'>
                        <Link to='/admin/home'><Icon type='home'></Icon>首页</Link>
                    </MenuItem>
                    <MenuItem key='/订单管理'>
                        <Link to='/admin/order'><Icon type='mail'></Icon>订单管理</Link>
                    </MenuItem>
                    <SubMenu title={<span><Icon type='setting'></Icon><span></span>图例</span>}>
                        <MenuItem key='/柱状图'>
                            <Link to='/admin/bar'>柱状图</Link>
                        </MenuItem>
                        <MenuItem key='/饼状图'>
                            <Link to='/admin/pie'>饼状图</Link>
                        </MenuItem>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}