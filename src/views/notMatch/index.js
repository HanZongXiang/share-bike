import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './index.less'
import notMatchImg from './img.gif'

export default class notMatch extends Component {
    

    render() {
        return (
            <div className='not-found clearfix'>
                <div className='not-found-left fl'>
                    <div className='title'>Page Not Found!</div>
                    <div>
                        <p>404 你要找的页面没有找到</p>
                        <strong>如有不满你也无可奈何</strong>
                        <ul>
                            <li>或者你可以选择</li>
                            <li>
                                <Link to='/admin/home'>回首页</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='not-found-img fl'>
                    <img src={notMatchImg} alt=""/>
                </div>
            </div>
        );
    }
}

