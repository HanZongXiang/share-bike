import React, {Component} from 'react'
import Header from '../../components/header'
import NavLeft from '../../components/navLeft'
import Footer from '../../components/footer'
import { Row,Col } from 'antd'
import './index.less'

export default class index extends Component {
    

    render() {
        return (
            <div className='admin'>
                <Row>
                    <Col span={4} className='nav-left-wrap'>
                        <NavLeft></NavLeft>
                    </Col>
                    <Col span={20} className='content-wrap'>
                        <Header></Header>
                        <div className='content'>
                            {this.props.children}
                        </div>
                        <Footer></Footer>
                    </Col>
                </Row>
            </div>
        );
    }
}