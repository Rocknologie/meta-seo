import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import { Divide } from './divider'
import { LineFeed } from './line-feed'

export const Footer: React.FC = () => (
    <div>
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
    </div>
)