import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './index.less'
import {formatDate} from "../../utils";
import axios from 'axios'
import { connect } from 'react-redux'

class Header extends Component {
    // constructor(props) {
    //     super(props)
    // }

    getTimeStr = () => {
        setInterval(() => {
            let date = new Date().getTime();
            let timeStr = formatDate(date);
            this.setState({
                time: timeStr
            })
        })
    };
    getWeatherInfo() {
        axios.get('http://t.weather.sojson.com/api/weather/city/101010100').then(res => {
            // console.log(res)
            console.log(res.data.data.forecast[0])

            let weather = res.data.data.forecast[0]
            let weatherStr = ''
            weatherStr = `${weather.low} ${weather.high} ${weather.fx} ${weather.fl}`
            this.setState({
                weather:weatherStr
            })
        })
    }


    componentWillMount() {
        this.getTimeStr()
        this.getWeatherInfo()
        console.log(this.props);
    }

    state = {
        time:'2018-10-09 20:20:35',
        weather:'低温 3.0C 高温 16C 西北风 4-5级'
    }

    render() {
        return (
            <div className='header'>
                <div className="userInfo clearfix">

                    <h2 className='title fl'>共享单车后台系统</h2>

                    <div className='fr'>
                        <Link to='/logout'>退出</Link>
                    </div>

                    <div className='detail fr'>
                        欢迎，<span>张怡宁</span>
                    </div>

                </div>

                <div className="weather clearfix">
                    <div className='breadcrumb fl'>
                        {this.props.menuText.menuItemText}
                    </div>
                    <div className='weather-wrap fr clearfix'>
                        <div className="date fl">
                            {this.state.time}
                        </div>
                        <div className="weather-detail fl">
                            {this.state.weather}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// connect接收两个参数，一个参数叫mapStateToProps,一个参数叫mapActionToProps
export default connect(
    function mapStateToProps(state) {
        return {
            menuText: state
        }
    }
)(Header)