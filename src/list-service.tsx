import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { ServiceCard } from './service-card'
import { Divide } from './components/divider'

export const ListService: React.FC = () => (
    <div>
        <Header as='h2' textAlign='left'>Référencement de site web</Header>

        <Grid textAlign='center' columns='equal' divided>
            <Grid.Row>
                <Grid.Column>
                    <ServiceCard alt='Référencement naturel' img='./img/seo.png' title='Référencement Naturel' content='Saviez-vous que la majorité des internautes ne consultait que la première page de Google ? C’est ainsi qu’apparaître en première page est devenu un enjeu essentiel.' href='/services/referencement-naturel'/>                         
                </Grid.Column>
                <Grid.Column>
                    <ServiceCard alt='Référencement mobile' img='./img/mobile.png' title='Référencement Mobile' content='Aujourd’hui, plus de la moitié des recherches Google sont effectuées depuis un smartphone. Les moteurs de recherche classent les résultats en fonction de la version mobile de vos pages, c’est pour cela qu’il est primordial d’optimiser votre site web pour les appareils mobiles.' href='/services/referencement-mobile'/>
                </Grid.Column>
                <Grid.Column>
                    <ServiceCard alt='Référencement social' img='./img/screen.png' title='Référencement social (SMO)' content='Si vous souhaitez davantage de visibilité et de trafic, cette section est faite pour vous. Avec le SMO, nous mettons tout en oeuvre pour assurer une excellente visibilité de vos messages sur les réseaux sociaux.' href='/services/referencement-social'/>                        
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
        <Divide />
        <Header as='h2' textAlign='left'>Nos services supplémentaires de référencement de site web</Header>

        <Grid textAlign='center' columns='equal' divided>     
            <Grid.Row>
                <Grid.Column>
                    <ServiceCard alt='Netlinking ecrou' img='./img/ecrou.jpg' title='Netlinking' content='Les moteurs de recherche se basent en grande partie sur le nombre et la qualités des liens reçus par les sites web pour classer leurs résultats.' href='/services/netlinking'/>
                </Grid.Column>
                <Grid.Column>
                    <ServiceCard alt='Audit' img='./img/schema.png' title='Audit SEO' content='Nous offrons un service d’audit SEO afin de vérifier avec vous ce qui est à améliorer pour booster votre site web.' href='/services/audit-seo'/>                         
                </Grid.Column>
                <Grid.Column>
                    <ServiceCard alt='Formations' img='./img/pc.png' title='Formations' content='Nous vous proposons des formations en lien avec tous nos services afin de vous rendre autonome sur le référencement SEO.' href='/services/formations'/>
                </Grid.Column>
            </Grid.Row>
        </Grid>  
    </div>
)