import React from 'react'
import { Grid, Button, Header, Icon, Image } from 'semantic-ui-react'
import { MetaTags } from 'react-meta-tags'
import { LineFeed } from './components/line-feed'

export const BlogPage: React.FC = () => (
    <div>
        <MetaTags>
            <title>Blog - Meta-SEO</title>
            {/* <meta name="description" content="Agence de Meta-SEO basée à Bordeaux." /> */}
        </MetaTags>
        
        <LineFeed />    
        <Header as='h1' color='black'>Nos articles</Header> 
        <Grid>
            <Grid.Row>
                <Image alt='Référencement Google' src='/img/articles/referencement-google.png' size='small' />
                <Header as='h2' color='black'>Google rend son moteur de recherche encore plus intelligent</Header>
                <p>Après avoir atteint la dite “suprématie quantique”, le géant du web dont tout le monde en connaît le nom, Google, a annoncé récemment que son moteur de recherche subirait une mise à jour de son algorithme de référencement...</p>  
                <Button content="Lire l'article" href='/blog/articles/google-rend-son-moteur-de-recherche-encore-plus-intelligent'/> 
            </Grid.Row>
            <Grid.Row>
                <Image alt='Black Friday' src='/img/articles/black-friday.png' size='small' />
                <Header as='h2' color='black'>Le Black Friday et ses impacts sur le SEO</Header>
                <p>Le jour annuel tant attendu du Black Friday approche et les experts du référencement se frottent les mains. Quelques jours avant le jour J, la course au top des résultats de recherches est officiellement lancée...</p>
                <Button content="Lire l'article" href='/blog/articles/le-black-friday-et-ses-impacts-sur-le-SEO'/> 
            </Grid.Row>
            <Grid.Row>
                <Image alt='Agence de SEO' src='/img/articles/agence-de-seo.png' size='small' />
                <Header as='h2' color='black'>Pourquoi avoir recours à une agence de seo ?</Header>
                <p>Le référencement (également appelé SEO pour Search Engine Optimization), c’est un domaine vaste et complexe, mais sans lui votre site web pourrait ne pas être aussi visible que vous le souhaitez...</p>
                <Button content="Lire l'article" href='/blog/articles/pourquoi-avoir-recours-a-une-agence-de-seo'/> 
            </Grid.Row>
        </Grid>
    </div>
   
)