import React from 'react'
import { AsideComponent } from '../components/aside'
import { Grid, Header, Image } from 'semantic-ui-react'
import { MetaTags } from 'react-meta-tags'
import { LineFeed } from '../components/line-feed'

export const NetlinkingPage: React.FC = () => (
    <div>
        <MetaTags>
            <title>SEO Backlinks - Meta-SEO</title>
            <meta name="description" content=' La stratégie des SEO backlinks a pour but d’augmenter la popularité de votre site web. Le but est de vous faire connaître auprès des sites web ayant le même thème que le votre et de gagner la confiance de vos internautes.' />
        </MetaTags>
        
        <LineFeed />
        <Grid>
            <Grid.Column only='widescreen' widescreen={12}>
                <Header as='h1' textAlign='left'>Le Netlinking : SEO backlinks</Header>
                <p>Le netlinking, également appelé linking externe ou SEO backlinks, est un procédé qui permet d’augmenter le nombre de liens vers un site. Cette stratégie a pour but d’augmenter la popularité de votre site web, et par conséquent, générer toujours plus de trafic vers celui-ci. Le but est de vous faire connaître auprès des sites web ayant le même thème que le votre, mais c’est aussi un moyen de gagner la confiance de vos internautes si ces liens sont pertinents et intéressants pour eux.</p>
                <Image src='/img/' size='large' alt='Backlink'/>
                <p>Les algorithmes des moteurs de recherche traitent et comptent les liens pointant vers votre site, pour ensuite créer une sorte d’indice de confiance qui va entrer en jeu dans le positionnement de votre site web sur les pages de résultats de ceux-ci lorsque les internautes saisissent les bons mots-clés. Nous pouvons également faire le travail que font ces algorithmes afin de mieux repérer les sources contenant des liens vers notre site web. Cela permet, en plus d’analyser la popularité et la confiance de ces sources, de visualiser ou est-ce que l’on parle de nous et dans quels domaines.</p>

                {/* Paragraphe 1 */}
                <Header as='h2' textAlign='left'>Les liens et leur utilité</Header>
                <p>Les liens entre les pages web constituent un élément fondamental du référencement. Google parcours les pages grâce à ceux-ci, et c’est pour cela qu’il faut concevoir un bon maillage interne au sein de votre site web. Cependant attention à ne pas en faire trop : ce qu’on appelle les “fermes à liens” sont interdites et sanctionnées par Google.
                    Il faut également produire un contenu riche et intéressant afin d’avoir des liens pertinents pour vos internautes.
                </p>
                <Image src='/img/' size='large' alt='Algorithme et backlinks'/>
                <p>Notre prestation vous permettra de gagner beaucoup de visibilité grâce à nos experts qui mettront tout en oeuvre pour générer des SEO backlinks, mais également crawler régulièrement votre site internet afin d’analyser continuellement les liens externes et leurs sources.</p>
            </Grid.Column> 

            <Grid.Column only='widescreen' widescreen={4}>
                <AsideComponent />
            </Grid.Column>  
        </Grid>        
    </div>
)