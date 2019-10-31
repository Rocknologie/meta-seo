import React from 'react';
import { Grid, Header } from 'semantic-ui-react'

import { Divide } from './divider'
import { LineFeed } from './line-feed'
import { TeamCard } from './team-card'

export const AgencePage: React.FC = () => (
    <div>
        <LineFeed></LineFeed>    
        <Header as='h1' color='black'>AGEENNNCEEE</Header> 
                 
        {/* Call agency description */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <Divide></Divide>

        <Header as='h2'textAlign='center'>L'équipe de notre agence SEO </Header>

        <Grid centered columns={3}>
            <Grid.Row centered columns={3}>
                <Grid.Column >
                    <TeamCard img='./img/daniel.jpg' title='Daniel' content='Consultant SEO'></TeamCard>                         
                </Grid.Column>
                <Grid.Column >
                    <TeamCard img='./img/patrick.jpg' title='Patrick' content='Analyste SEO'></TeamCard>
                </Grid.Column>
                <Grid.Column >
                    <TeamCard img='./img/nan.jpg' title='Nancy' content='Analyste SEO'></TeamCard>
                </Grid.Column>
                <LineFeed></LineFeed>
                <Grid.Column >
                    <TeamCard img='./img/joe.jpg' title='Joe' content='Analyste SEO'></TeamCard>
                </Grid.Column>
                <Grid.Column >
                    <TeamCard img='./img/stevie.jpg' title='Stevie' content='Analyste SEO'></TeamCard>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)
