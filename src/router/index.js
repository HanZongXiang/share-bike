import React, {Component} from 'react';
import { HashRouter,Route,Switch } from 'react-router-dom'
import Admin from '../views/admin'
import Home from '../views/home'
import SecondPage from '../views/secondPage'
import NotMatch from '../views/notMatch'



export default class Router extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path='/admin' render={() =>
                           <Admin>
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/secondPage' component={SecondPage}></Route>
                                <Route component={NotMatch}></Route>
                           </Admin>
                        }></Route>
                        <Route component={NotMatch}></Route>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}