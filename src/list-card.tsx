import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { ServiceCard } from './service-card'
import { Divide } from './divider'

export const ListCard: React.FC = () => (
    <div>
        <Header as='h2' textAlign='left'>TITRE</Header>

        <Grid centered columns={3}>
            <Grid.Row centered columns={3}>
                <Grid.Column >
                    <ServiceCard img='./img/seo.png' title='Référencement Naturel' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' href='referencement-naturel'></ServiceCard>                         
                </Grid.Column>
                <Grid.Column >
                    <ServiceCard img='./img/mobile.png' title='Référencement Mobile' content='Contenue test' href='referencement-mobile'></ServiceCard>
                </Grid.Column>
                <Grid.Column>
                    <ServiceCard img='./img/screen.png' title='Référencement social (SMO)' content='Contenue test' href='referencement-social'></ServiceCard>                        
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
            <Divide></Divide>
            <Header as='h2' textAlign='left'>SousTitre</Header>

        <Grid centered columns={3}>     
            <Grid.Row centered columns={3}>
                <Grid.Column>
                    <ServiceCard img='./img/ecrou.jpg' title='Netlinking' content='Contenue test' href='netlinking'></ServiceCard>
                </Grid.Column>
                <Grid.Column>
                    <ServiceCard img='./img/schema.png' title='Audit SEO' content='Contenue test' href='audit-seo'></ServiceCard>                         
                </Grid.Column>
                <Grid.Column>
                    <ServiceCard img='./img/computer-schema.png' title='E-Réputation' content='Contenue test' href='e-reputation'></ServiceCard>                       
                </Grid.Column>
            </Grid.Row>
        </Grid>  

            <Divide></Divide>
            <Header as='h2' textAlign='left'>L'équipe de notre agence SEO </Header>

        <Grid centered columns={1}>
            <Grid.Row centered columns={1}>            
                <Grid.Column>
                    <ServiceCard img='./img/pc.png' title='Formations' content='Contenue test' href='formation'></ServiceCard>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)