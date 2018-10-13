import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from '../../redux/actionCreator'
import './index.less'

const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item

class NavLeft extends Component {
    // constructor(props) {
    //     super(props)
    // }

    clickMenu = ({item,key,keyPath}) => {
        console.log(item, key, keyPath)
        let text = item.props.children.props.children
        if(typeof(text) == 'object') {
            text = item.props.children.props.children[1]
        } 
        // this.props.dispatch({type:'CHANGE_MENU_ITEM',text})
        // console.log(this.props.action);
        this.props.action.changeMenuItem(text)
    }

    render() {
        return (
            <div className='nav-left'>
                <Menu mode='vertical' theme="dark" onClick={this.clickMenu}>
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

export default connect(
    null,
    function mapActionToProps (dispatch) {
        return {
            action: bindActionCreators(actionCreators,dispatch)
        }
    }
)(NavLeft)