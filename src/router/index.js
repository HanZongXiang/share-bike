import React, {Component} from 'react';
import { HashRouter,Route,Switch } from 'react-router-dom'
import Admin from '../views/admin'
import Home from '../views/home'
// import SecondPage from '../views/secondPage'
import Order from '../views/order'
import Details from '../views/order/details'
import Bar from '../views/echarts/bar'
import Pie from '../views/echarts/pie'
import NotMatch from '../views/notMatch'



export default class Router extends Component {
    componentDidMount() {
        console.log(this.props.children)
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path='/order/details/:id' component={Details}></Route>
                        <Route path='/admin' render={() =>
                           <Admin>
                                <Switch>
                                    <Route path='/admin/home' component={Home}></Route>
                                    <Route path='/admin/order' component={Order}></Route>
                                    <Route path='/admin/bar' component={Bar}></Route>
                                    <Route path='/admin/pie' component={Pie}></Route>
                                    <Route component={NotMatch}></Route>
                                </Switch>
                           </Admin>
                        }></Route>
                        <Route component={NotMatch}></Route>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}