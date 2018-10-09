import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class notMatch extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='not-found'>
                <div className='not-found-left'>
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
                <div className='not-found-img'>

                </div>
            </div>
        );
    }
}

