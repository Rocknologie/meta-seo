import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import './app.css';
import { MainPage } from './main-page';
import { AgencePage } from './agence-page';
import { Header } from './header';

export const App: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Container>
                <Route path='/'>
                    <Header />
                </Route>
                <Route exact path='/'>
                    <Redirect to='/home' />
                </Route>
                <Route exact path="/home">
                    <MainPage />
                </Route>
                <Route exact path="/agence">
                    <AgencePage />
                </Route>
            </Container>
        </Switch>
    </BrowserRouter>
)
