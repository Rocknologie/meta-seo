import React from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'
import { AsideComponent } from '../components/aside'
import { MetaTags } from 'react-meta-tags'
import { LineFeed } from '../components/line-feed'

export const NaturalReferencingPage: React.FC = () => (
    <div>
        <MetaTags>
            <title>Référencement naturel - Meta-SEO</title>
            <meta name="description" content='Le référencement naturel est un moyen efficace de générer plus de trafic sur votre site web.' />
        </MetaTags>
        
        <LineFeed />
        
        <Grid>
            <Grid.Column only='widescreen' widescreen={12}>
                <article>
                    <Header as='h1' textAlign='left'>Référencement naturel</Header>
                    <p>Le référencement naturel, c’est l’un des moyens les plus efficaces pour générer plus de trafic sur votre site web. C’est en améliorant la structure de votre site web, en travaillant les mots-clés, en ajoutant du contenu optimisé sur chacune de vos pages, que le référencement naturel parviendra à vous faire monter au sommet des résultats de chacunes des requêtes des internautes, tout moteur de recherche confondu : Google, Bind, Yahoo, Ecosia, DuckDuckGo pour ne citer que les plus populaires.</p>
                    <Image src='/img/' size='large' alt='Requête moteur de recherche'/>
                    <Image src='/img/' size='large' alt='Référencement naturel'/>

                    <p>Aujourd’hui, les internautes sont de plus en plus précis et intransigeants sur leurs requêtes, et les moteurs de recherche demandent beaucoup plus de critères spécifiques pour positionner leurs résultats. Votre site web doit suivre les bonnes pratiques du référencement naturel afin de répondre à ces critères. C’est donc également un travail de veille : il faut être capable de se tenir informé sur les dernières mises à jour des algorithmes des moteurs de recherche et des tendances actuelles.</p>

                    {/* Paragraphe 1 */}
                    <Header as='h1' textAlign='left'>Les bonnes pratiques</Header>
                    <p>Il y a une chose qui ne doit pas être prise à la légère, c’est les bonnes pratiques du référencement naturel. En effet, nombreuses sont les techniques visant à optimiser son référencement naturel et nombreuses sont les personnes ne respectant malheureusement pas ces techniques-là par manque de connaissances. Les bonnes pratiques ne sont pas là pour faire joli, bien au contraire : si elles ne sont pas mises en place, la visibilité de votre site internet risquerait d’avoir l’effet inverse, c’est à dire une diminution nette de votre référencement naturel, et par conséquent une position médiocre sur les pages de résultats des moteurs de recherche.</p>
                    <p>Notre agence vous permet de palier à ce potentiel problème que vous pourriez rencontrer si vous souhaitez référencer votre site internet par vos propres moyens. Nous nous occupons de tout, du contenu-même de votre site, en passant par les balises sémantiques.</p>
                </article>
            </Grid.Column> 

            <Grid.Column only='widescreen' widescreen={4}>
                <AsideComponent />
            </Grid.Column>  
        </Grid>        
    </div>
)