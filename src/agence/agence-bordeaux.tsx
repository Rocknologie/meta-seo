import React from 'react';
import { Grid, Header } from 'semantic-ui-react'

import { Divide } from '../components/divider'
import { LineFeed } from '../components/line-feed'
import { ListCountry } from '../list-country';
import { MetaTags } from 'react-meta-tags';

export const AgenceBordeauxPage: React.FC = () => (    
    <div>
        <MetaTags>
            <title>Agence Bordeaux - Meta-SEO</title>
            <meta name="description" content="Agence de Meta-SEO basée à Bordeaux." />
        </MetaTags>
        
        <LineFeed />    
        <Header as='h1' color='black'>Notre agence SEO de Bordeaux</Header> 
       
        {/* Agency description */}
        <p></p>
        
        <Divide />

        <Grid columns={4}>
            <Grid.Column only='widescreen' widescreen={12}>
                <article>
                    {/* Contenu de l'agence bordeaux */}
                </article>
            </Grid.Column>
            
            {/* List city */}
            <Grid.Column only='widescreen' widescreen={4}>
                <Header as='h2'textAlign='center'>Où trouver nos autres agences SEO ?</Header>
                <ListCountry />
            </Grid.Column>
        </Grid>
    </div>
)