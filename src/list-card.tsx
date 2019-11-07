import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { ServiceCard } from './service-card'
import { Divide } from './divider'
import { equal } from 'assert'

export const ListCard: React.FC = () => (
    <div>
        <Header as='h1' textAlign='left'>Agence de référencement de site web</Header>

        <p>Le référencement de site web est devenu un point clé pour générer du trafic sur votre site web. Une bonne visibilité ainsi qu’une performance accrue sont primordiales pour parvenir à répondre aux besoins de vos clients ou de vos internautes, tout type de site confondu (e-commerce, forum, services, etc…).</p>

        <Header as='h2' textAlign='left'>Référencement de site web</Header>

        <Grid textAlign='center' columns='equal' divided>
            <Grid.Row>
                <Grid.Column>
                    <ServiceCard img='./img/seo.png' title='Référencement Naturel' content='Saviez-vous que la majorité des internautes ne consultait que la première page de Google ? C’est ainsi qu’apparaître en première page est devenu un enjeu essentiel.' href='referencement-naturel'/>                         
                </Grid.Column>
                <Grid.Column>
                    <ServiceCard img='./img/mobile.png' title='Référencement Mobile' content='Aujourd’hui, plus de la moitié des recherches Google sont effectuées depuis un smartphone. Les moteurs de recherche classent les résultats en fonction de la version mobile de vos pages, c’est pour cela qu’il est primordial d’optimiser votre site web pour les appareils mobiles.' href='referencement-mobile'/>
                </Grid.Column>
                <Grid.Column>
                    <ServiceCard img='./img/screen.png' title='Référencement social (SMO)' content='Si vous souhaitez davantage de visibilité et de trafic, cette section est faite pour vous. Avec le SMO, nous mettons tout en oeuvre pour assurer une excellente visibilité de vos messages sur les réseaux sociaux.' href='referencement-social'/>                        
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
        <Divide></Divide>
        <Header as='h2' textAlign='left'>Nos services supplémentaires de référencement de site web</Header>

        <Grid textAlign='center' columns='equal' divided>     
            <Grid.Row>
                <Grid.Column>
                    <ServiceCard img='./img/ecrou.jpg' title='Netlinking' content='Les moteurs de recherche se basent en grande partie sur le nombre et la qualités des liens reçus par les sites web pour classer leurs résultats.' href='netlinking'/>
                </Grid.Column>
                <Grid.Column>
                    <ServiceCard img='./img/schema.png' title='Audit SEO' content='Nous offrons un service d’audit SEO afin de vérifier avec vous ce qui est à améliorer pour booster votre site web.' href='audit-seo'/>                         
                </Grid.Column>
                <Grid.Column>
                    <ServiceCard img='./img/computer-schema.png' title='E-Réputation' content='L’e-réputation est un point important pour gagner la confiance de vos internautes et améliorer votre image de marque.' href='e-reputation'/>                       
                </Grid.Column>
                <Grid.Column>
                    <ServiceCard img='./img/pc.png' title='Formations' content='Nous vous proposons des formations en lien avec tous nos services afin de vous rendre autonome sur le référencement SEO.' href='formation'/>
                </Grid.Column>
            </Grid.Row>
        </Grid>  
    </div>
)