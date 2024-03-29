import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import './app.css';
import { MainPage } from './main-page';
import { AgencePage } from './agence/agence-page';
import { Header } from './header';
import { Footer } from './footer';

import { AgenceLyonPage } from './agence/agence-lyon';
import { AgenceParisPage } from './agence/agence-paris';
import { AgenceLillePage } from './agence/agence-lille';
import { AgenceBordeauxPage } from './agence/agence-bordeaux';
import { AuditPage } from './services/audit'
import { FormationPage } from './services/formation'
import { NaturalReferencingPage } from './services/natural-referencing'
import { MobileReferncingPage } from './services/mobile-referencing'
import { SocialReferencingPage } from './services/social-referencing'
import { NetlinkingPage } from './services/netlinking'
import { BlogPage } from './blog'
import { ContactPage } from './components/contact';
import { Article1Page } from './articles/article-1';
import { Article2Page } from './articles/article-2';
import { Article3Page } from './articles/article-3';

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

                {/* AGENCE */}
                <Route exact path="/agence">
                    <AgencePage />
                </Route>    
                <Route exact path='/agence/agence-lyon'>
                    <AgenceLyonPage />
                </Route>
                <Route exact path='/agence/agence-paris'>
                    <AgenceParisPage />
                </Route>
                <Route exact path='/agence/agence-lille'>
                    <AgenceLillePage />
                </Route>
                <Route exact path='/agence/agence-bordeaux'>
                    <AgenceBordeauxPage />
                </Route>   

                {/* SERVICES */}               
                <Route exact path='/services/referencement-naturel'>
                    <NaturalReferencingPage />
                </Route> 
                <Route exact path='/services/referencement-mobile'>
                    <MobileReferncingPage />
                </Route> 
                <Route exact path='/services/referencement-social'>
                    <SocialReferencingPage />
                </Route>
                <Route exact path='/services/netlinking'>
                    <NetlinkingPage />
                </Route>

                <Route exact path='/services/audit-seo'>
                    <AuditPage />
                </Route>  
                <Route exact path='/services/formations'>
                    <FormationPage />
                </Route> 


                {/* BLOG & CONTACT */}
                <Route exact path="/blog">
                    <BlogPage />
                </Route>
                <Route exact path='/blog/articles/google-rend-son-moteur-de-recherche-encore-plus-intelligent'>
                    <Article1Page />
                </Route> 
                <Route exact path='/blog/articles/le-black-friday-et-ses-impacts-sur-le-SEO'>
                    <Article2Page />
                </Route> 
                <Route exact path='/blog/articles/pourquoi-avoir-recours-a-une-agence-de-seo'>
                    <Article3Page />
                </Route> 

                <Route exact path="/contact">
                    <ContactPage />
                </Route>

                {/* FOOTTER */}
                <Route path='/'>
                    <Footer />
                </Route>
            </Container>
        </Switch>
    </BrowserRouter>
)
