import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import { Divide } from './components/divider'
import { LineFeed } from './components/line-feed'

export const Footer: React.FC = () => (
    <footer>
        <Divide />
        <Grid centered>
            <Grid.Row>
                <p>Made with ♥ © 2019 Meta-SEO Tous droits réservés</p>
            </Grid.Row>
            
            <Grid.Row>
                <Icon link name='instagram' size='large' />
                <Icon link name='pinterest' size='large' />
                <Icon link name='twitter' size='large' />
                <Icon link name='facebook' size='large' />
            </Grid.Row>
            <LineFeed />
        </Grid>
    </footer>
)