import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { HomePage } from "../components/home/HomePage"
import { Login } from "../components/login/Login"


class AppRouter extends Component {
    
    render() {
        var isLogin = localStorage.getItem("Login");
        
        const urlpath = () => {
            switch (isLogin) {
                case "true": return <Redirect to="/home" />;
                default: return <Redirect to="/login" />
            }
          };
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" render={() => { return ( urlpath() ) }} exact={true} />
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={HomePage} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default AppRouter;