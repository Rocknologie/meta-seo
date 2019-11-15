import React from 'react';
import { Grid, Header } from 'semantic-ui-react'

import { Divide } from '../components/divider'
import { LineFeed } from '../components/line-feed'
import { TeamCard } from '../team-card'
import { ListCountry } from '../list-country';
import { MetaTags } from 'react-meta-tags';

export const AgencePage: React.FC = () => (
    <div>
        <MetaTags>
            <title>Notre agence SEO - Meta-SEO</title>
            <meta name="description" content="Meta-SEO est une agence SEO basée à Paris, Lyon, Bordeaux et Lille." />
        </MetaTags>
        
        <LineFeed />    
        <Header as='h1' color='black'>Notre agence SEO</Header> 
       
        {/* Agency description */}
        <p>Meta-SEO est une agence SEO créée à Lyon et basée à Paris, Lyon, Bordeaux et Lille. Composée d’une équipe de 5 experts, notre agence SEO vous offre des services efficaces de référencement naturel, mobile et social. Nous proposons également des formations en ligne pour vous perfectionner dans le domaine du référencement SEO. Au total, nous avons 4 formations, chacune décrivant les aspects du référencement (référencement naturel, référencement mobile et référencement social, aussi appelé SMO). La quatrième formation regroupe l’ensemble des trois précédentes, pour ceux souhaitant un apprentissage complet sur le référencement. Également, nous vous offrons la possibilité d’auditer votre site web afin de voir avec vous ce qui pourrait être amélioré et optimisé, cela grâce à un outil interne spécialisé et développé par nos soins.</p>
        
        <Divide />

        <Grid columns={4}>
            <Grid.Column only='widescreen' widescreen={12}>        
                <article>
                    {/* Team */}
                    <Header as='h2'textAlign='center'>L'équipe de notre agence SEO </Header>
                    <Grid>
                        <Grid.Row centered columns={3}>
                            <Grid.Column >
                                <TeamCard img='./img/nan.jpg' title='Nancy' meta='Directrice' content='Consultante en référencement naturel depuis 2012, Nancy a décidé de fonder sa propre agence SEO pour continuer à vivre de sa passion tout en gérant sa propre entreprise.' alt='dessin'></TeamCard>
                            </Grid.Column>
                            <Grid.Column >
                                <TeamCard img='./img/joe.jpg' title='Joe' meta='Responsable SEO' content='Ancien responsable d’une équipe de développeurs pour une plateforme d’e-commerce, Joe a décidé de continuer la chefferie de projet dans le domaine du référencement SEO. Il gère notre équipe composée de nos deux consultants et de notre analyste-formatrice.' alt=''></TeamCard>
                            </Grid.Column>
                            <Grid.Column >
                                <TeamCard img='./img/daniel.jpg' title='Daniel' meta='Consultant SEO' content='Fraîchement diplômé, Daniel vit de sa passion pour le consulting SEO. Il participe également à de nombreuses conférences où vous pourrez le retrouver.' alt=''></TeamCard>                         
                            </Grid.Column>              
                            <LineFeed></LineFeed>                
                            <Grid.Column >
                                <TeamCard img='./img/patrick.jpg' title='Patrick' meta='Analyste SEO' content='Grâce à de nombreuses années d’expérience, Patrick est devenu un expert SEO, notamment dans le référencement naturel, mobile et social. C’est également lui qui gère notre service d’audit SEO.' alt=''></TeamCard>
                            </Grid.Column>  
                            <Grid.Column >
                                <TeamCard img='./img/stevie.jpg' title='Stevie' meta='Analyste-formatrice SEO' content='En plus de ses compétences d’analyste SEO, Stevie est également la formatrice de notre agence SEO : c’est elle qui vous suivra lors de vos différentes formations.' alt=''></TeamCard>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </article>
            </Grid.Column>

            {/* List city */}
            <Grid.Column only='widescreen' widescreen={4}>
                <Header as='h2'textAlign='center'>Où trouver notre agence SEO ?</Header>
                <ListCountry />
            </Grid.Column>
        </Grid>
        <Divide />

       
        
    </div>
)
