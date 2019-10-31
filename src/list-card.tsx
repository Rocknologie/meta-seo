import React from 'react'
import { Grid } from 'semantic-ui-react'
import { ServiceCard } from './card'
import { Divide } from './divider'

export const ListCard: React.FC = () => (
    <Grid centered columns={3}>
        <Grid.Row centered columns={3}>
            <Grid.Column >
                <ServiceCard img='./img/seo.png' title='Référencement Naturel' content='Contenue test'></ServiceCard>                         
            </Grid.Column>
            <Grid.Column >
                <ServiceCard img='./img/mobile.png' title='Référencement Mobile' content='Contenue test'></ServiceCard>
            </Grid.Column>
        </Grid.Row>
        <Divide></Divide>
        <Grid.Row centered columns={3}>
            <Grid.Column>
                <ServiceCard img='./img/screen.png' title='Référencement social (SMO)' content='Contenue test'></ServiceCard>                        
            </Grid.Column>
            <Grid.Column>
                <ServiceCard img='./img/ecrou.jpg' title='Netlinking' content='Contenue test'></ServiceCard>
            </Grid.Column>
        </Grid.Row>
        <Divide></Divide>
        <Grid.Row centered columns={3}>
            <Grid.Column>
                <ServiceCard img='./img/schema.png' title='Audit SEO' content='Contenue test'></ServiceCard>                         
            </Grid.Column>
            <Grid.Column>
                <ServiceCard img='./img/pc.png' title='Formations' content='Contenue test'></ServiceCard>
            </Grid.Column>
        </Grid.Row>
        <Divide></Divide>
        <Grid.Row centered columns={3}>
            <Grid.Column>
                <ServiceCard img='./img/computer-schema.png' title='E-Réputation' content='Contenue test'></ServiceCard>                       
            </Grid.Column>
        </Grid.Row> 
    </Grid>
)