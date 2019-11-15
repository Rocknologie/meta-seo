import React from 'react'
import { Image, Header, Grid } from 'semantic-ui-react'
import { LineFeed } from '../components/line-feed'
import { MetaTags } from 'react-meta-tags'

export const Article2Page: React.FC = () => (
    <div>
        <MetaTags>
            <title>Le Black Friday et ses impacts sur le SEO</title>
            <meta name="description" content="Les experts du référencement nous parlent de leurs différentes techniques spéciales “SEO Black Friday” : articles sur le Black Friday, réductions alléchantes préparées, etc..." />
        </MetaTags>
        
        <LineFeed />    

        <Header as='h1' color='black'>Le Black Friday et ses impacts sur le SEO</Header> 
        <Image alt='black friday' src='/img/articles/black-friday.png' size='large'/>        
        
        <p>Le jour annuel tant attendu du Black Friday approche et les experts du référencement se frottent les mains. Quelques jours avant le jour J, la course au top des résultats de recherches est officiellement lancée.</p>

        {/* Paragraphe 1 */}
        <Header as='h2' color='black'>Une concurrence rude</Header>
        <p>Parmis les participants, de nombreux sites d’e-commerce sont présents, notamment ceux dans le secteur des technologies et de l'électroménager. Boulanger, Darty, LDLC, Ikea, MDA ou encore la Fnac pour ne citer que quelques enseignes françaises, se tirent les cheveux pour attrapper la première place au top des résultats sur tout moteur de recherche confondu, notamment celui de Google du fait de sa place extrêmement important sur le marché par rapport à ses concurrents. Ils n’ont qu’un objectif en tête : être prêt à vendre un maximum de produits pour ce Vendredi 29 Novembre.</p>
      
        {/* Paragraphe 2 */}
        <Header as='h2' color='black'>Classement actuel</Header>
        <p>Ce mardi 5 Novembre dernier, le classement de la visibilité des concurrents du Black Friday français, publié par le <a href='https://seo-data.clustaar.com/'>Clustaar</a>, montre que la concurrence de la course au top des recherches est plutôt rude, avec Boulanger qui se positionne au sommet, suivi par Darty puis par la Fnac de très près pour ne parler que du podium.</p>
        <Image alt='classement-black-friday' src='/img/articles/classement-black-friday.png'  size='large'/>
        <p>Mais cela pourrait rapidement changer avant ce jour tant attendu du Vendredi 29 Novembre, car les écarts sont plutôt serrés et le Black Friday laisse encore quelques jours au bas du classement pour rattraper ceux qui sont aisément placés au top de la visibilité.</p>

        {/* Paragraphe 3 */}
        <Header as='h2' color='black'>Et au niveau du SEO ?</Header>
        <p>Comment être positionné au sommet de ce podium et se démarquer de ses concurrents ? Les experts du référencement nous parlent de leurs différentes techniques spéciales “SEO Black Friday”. Au programme : des articles sur le Black Friday, des réductions alléchantes préparées, ou plus simplement, de l’optimisation encore plus poussée sur les sites web des e-commerçants. Une concoction performante de de ces multiples techniques permet aux participants à cette course d’anticiper leur visibilité pour le jour J.</p>
        <Image alt='réductions commerce' src='/img/articles/reductions-commerce.png'  size='large'/>
        <p>La course a déjà commencée, reste à savoir qui sera LE leader du fameux SEO Black Friday tant attendu par les marchant et surtout par les internautes, qui n’ont qu’une chose en tête : trouver le meilleur prix.</p>

    </div>
)