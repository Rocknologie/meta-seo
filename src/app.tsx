import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import './app.css';
import { MainPage } from './main-page';
import { AgencePage } from './agence/agence-page';
import { Header } from './header';
import { Footer } from './footer';
import { ContactPage } from './components/contact';
import { AgenceLyonPage } from './agence/agence-lyon';
import { AgenceParisPage } from './agence/agence-paris';
import { AgenceLillePage } from './agence/agence-lille';
import { AgenceBordeauxPage } from './agence/agence-bordeaux';

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
                <Route exact path='/agence-lyon'>
                    <AgenceLyonPage />
                </Route>
                <Route exact path='/agence-paris'>
                    <AgenceParisPage />
                </Route>
                <Route exact path='/agence-lille'>
                    <AgenceLillePage />
                </Route>
                <Route exact path='/agence-bordeaux'>
                    <AgenceBordeauxPage />
                </Route>    
                <Route exact path="/contact">
                    <ContactPage />
                </Route>
                <Route path='/'>
                    <Footer />
                </Route>
            </Container>
        </Switch>
    </BrowserRouter>
)
