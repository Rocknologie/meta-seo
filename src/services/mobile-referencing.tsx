import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'
import { AsideComponent } from '../components/aside'
import { MetaTags } from 'react-meta-tags'
import { LineFeed } from '../components/line-feed'

export const MobileReferncingPage: React.FC = () => (
    <div>
        <MetaTags>
            <title>Référencement mobile - Meta-SEO</title>
            <meta name="description" content='Le référencement mobile permet d’améliorer le positionnement d’un contenu web adapté aux appareils mobiles.' />
        </MetaTags>
        
        <LineFeed />

        <Grid>
            <Grid.Column only='widescreen' widescreen={12}>
                <article>
                    <Header as='h1' textAlign='left'>Référencement mobile</Header>
                    <p>Le référencement mobile permet, tout comme le référencement naturel, d’améliorer le positionnement d’un contenu web (que ce soit un site web ou une application web) sur les résultats des moteurs de recherche, mais également sur les places de marché d’applications mobiles telles que l’AppStore d’Apple et le Play Store de Google.</p>
                    <Image src='/img/' size='large' alt='AppStore et GooglePlay'/>

                    <p>Aujourd’hui, avec un volume de recherches sur les appareils mobiles qui a dépassé celui sur les ordinateurs avec 58% de recherches contre 42% sur ordinateurs en 2018, le référencement mobile a prit une place toujours plus importante au fil du temps, et il est devenu essentiel pour générer toujours plus de trafic dans un monde se tournant de plus en plus vers le digital. Sans référencement mobile, vous n’atteindrez jamais la visibilité optimale et vous n’aurez pas exploité la totalité du potentiel de votre contenu mobile. En effet, étant donné la place extrêmement importante qu’a pris ce type de référencement aujourd’hui, il en devient désormais un incontournable si vous souhaitez avoir une bonne visibilité.</p>
                    <p>Il existe trois façons pour démarrer sur un référencement mobile optimal :</p>
                    <ul>
                        <li>L’URL différente entre la version Desktop et la version mobile : “www.monsite.com” et “m.monsite.com” ;</li>
                        <li>Le contenu dynamique envoyé par le serveur web en fonction de l’appareil utilisé ;</li>
                        <li>Le “Responsive Design”, qui est actuellement la méthode la plus utilisée.</li>
                    </ul>

                    <p>Notre équipe d’experts vous guidera vers un référencement mobile optimal en vous garantissant un flux de trafic en constante augmentation, et ce quelque soit la technologie mobile que vous utilisez (nous nous adaptons à toutes les situations). Notre prestation vous permettra d’optimiser efficacement votre contenu mobile sans que vous n’ayez à intervenir sur le référencement mobile. En clair, nous nous occupons de tout ! Suite à cela, nous vous garantissons une nette augmentation du trafic vers votre site web ou vers votre application web, ainsi qu’une visibilité accrue.</p>
                </article>
            </Grid.Column> 

            <Grid.Column only='widescreen' widescreen={4}>
                <AsideComponent />
            </Grid.Column>  
        </Grid>        
    </div>
)