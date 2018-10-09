import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import './index.less'

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
                    <MenuItem key='第二页'>
                        <Link to='/admin/secondPage'>第二页</Link>
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}