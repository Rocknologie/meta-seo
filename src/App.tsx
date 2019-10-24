import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

export const App: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" />
            <Route />
        </Switch>
    </BrowserRouter>
)
