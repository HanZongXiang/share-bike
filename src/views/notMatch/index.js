import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './index.less'

export default class notMatch extends Component {
    render() {
        return (
            <div classNameName='not-found clearfix'>
                <div className="top-bar-agile">
                    <div className="logo-agileits">
                        <Link to='/admin/home'>
                            <img src="/imgs/logo.png" alt=" " />
                        </Link>
                    </div>
                    <div className="nav-agileinfo">
                        <ul>
                            <li>
                                <Link to='/admin/home'>Home</Link>
                            </li>
                            <li>
                                <Link to='/admin/order'>Order</Link>
                            </li>
                            <li>
                                <Link to='/admin/bar'>Bar</Link>
                            </li>
                            <li>
                                <Link to='/admin/pie'>Pie</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="content-w3">
                    <h1>404</h1>
                    <h2>Something went wrong</h2>
                    <p>The page you are looking for has been removed,had its name changed or temporarily unavailable</p>
                </div>
            </div>
        );
    }
}

