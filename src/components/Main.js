import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import LandingPage from './LandingPage'
import Login from './Login';
import Logout from './Logout';
export default class Main extends Component {
    render() {
        return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/landingPage" component={LandingPage} />
            <Route path="/logOut" component={Logout} />
        </Switch>
        )
    }
}
