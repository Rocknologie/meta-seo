import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import './app.css';
import { MainPage } from './main-page';
import { AgencePage } from './agence-page';
import { Navbar } from './navbar';

export const App: React.FC = () => (
    <BrowserRouter>
        <Container>
            <Navbar></Navbar>   
        </Container>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/agence" component={AgencePage}/>
        </Switch>
    </BrowserRouter>
)
