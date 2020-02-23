import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import index from '../pages';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={index} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;