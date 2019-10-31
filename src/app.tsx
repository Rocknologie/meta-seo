import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.css';
import { MainPage } from './main-page';

export const App: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route />
        </Switch>
    </BrowserRouter>
)
