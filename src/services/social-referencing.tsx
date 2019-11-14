import React from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'
import { AsideComponent } from '../components/aside'
import { MetaTags } from 'react-meta-tags'
import { LineFeed } from '../components/line-feed'

export const SocialReferencingPage: React.FC = () => (
    <div>
         <MetaTags>
            <title>Visibilité SEO - Meta-SEO</title>
            <meta name="description" content='Le référencement social agit sur la visibilité SEO au sein des différents réseaux sociaux. Notre agence vous offre des services de community management et bien plus, afin d’améliorer la visibilité de votre entreprise / marque.' />
        </MetaTags>
        
        <LineFeed />

        <Grid>
            <Grid.Column only='widescreen' widescreen={12}>
                <Header as='h1' textAlign='left'>Le référencement social et la visibilité SEO</Header>
                <p>Le référencement social, également appelé Social Média Optimization (SMO) chez nos amis anglophones, est un type de référencement différent des référencements naturel et mobile : il n’agit pas directement sur les pages de résultats des moteurs de recherche, mais plutôt sur la visibilité SEO au sein des différents réseaux sociaux où sont diffusées vos annonces, vos posts et vos articles.</p>
                <Image src='/img/' size='large' alt='Réseaux sociaux'/>

                <p>Vous l’aurez compris, le référencement social a pour but de promouvoir votre site web sur les réseaux sociaux, via une panoplie d’outils comme, le plus connu par exemple, le Community Management.</p>
                <Image src='/img/' size='large' alt='Community Management'/>

                <p>Nos experts feront le nécessaire pour augmenter la visibilité SEO de votre site web, via la gestion de votre compte sur chacun de vos réseaux sociaux, notament Facebook, Twitter, Instagram, LinkedIn ou encore Pinterest : Images de profil, images de couverture, description, bio, et le plus important, des posts et les articles avec un contenu le plus optimisé possible pour attirer un maximum d’internautes vers votre site web et ainsi créer une communauté autour de votre entreprise ou de votre marque. Le résultat étant un trafic amélioré, des relais de vos différents posts (exemple : les retweets sur Twitter, les partages sur Facebook ou sur LinkedIn), et une meilleure image de votre marque ou de votre entreprise.</p>
            </Grid.Column> 

            <Grid.Column only='widescreen' widescreen={4}>
                <AsideComponent />
            </Grid.Column>  
        </Grid>        
    </div>
)