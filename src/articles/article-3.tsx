import React from 'react'
import { Image, Header, Grid } from 'semantic-ui-react'
import { LineFeed } from '../components/line-feed'
import { MetaTags } from 'react-meta-tags'

export const Article3Page: React.FC = () => (
    <div>
        <MetaTags>
            <title>Pourquoi avoir recours à une agence de seo ?</title>
            <meta name="description" content="Avoir recours à une agence de SEO plutôt que de devoir tout apprendre sur le tas pourrait vous faire gagner beaucoup de temps et d’argent. Le référencement est peuplé de bonnes pratiques qui doivent être respectées." />
        </MetaTags>
        
        <LineFeed />    

        <Header as='h1' color='black'>Pourquoi avoir recours à une agence de seo ?</Header> 
        <Image alt='agence de seo' src='' />        
        
        <p>Le référencement (également appelé SEO pour Search Engine Optimization), c’est un domaine vaste et complexe, mais sans lui votre site web pourrait ne pas être aussi visible que vous le souhaitez. Avoir recours à une agence de SEO plutôt que de devoir tout apprendre sur le tas pourrait vous faire gagner beaucoup de temps et d’argent, mais c’est également une question d’expertise car il ne faut pas faire n’importe quoi : le référencement est peuplé de bonnes pratiques qui, si elles ne sont pas respectées, pourraient inverser la donne et réduire la visibilité de votre site web.</p>
        

        {/* Paragraphe 1 */}
        <Header as='h2' color='black'>Une agence de SEO, c’est quoi exactement ?</Header>
        <p>Le rôle d’une agence de SEO, c’est simplement s’occuper de référencer votre site pour qu’il génère le plus de trafic possible. Les prestations dépendent de chaque agence car le référencement est un vaste domaine pouvant aller au simple référencement naturel, au mobile, ou même en dehors de votre site web, sur les réseaux sociaux. Plutôt que de tout faire soi-même, ce qui pourrait être un travail déroutant, les agences SEO sont spécialisées et feront un excellent travail sur la visibilité de votre site internet.</p>

        {/* Paragraphe 2 */}
        <Header as='h2' color='black'>Un large choix de services</Header> 
        <p>Une agence de SEO peut proposer plusieurs services de référencement différents, et il faut savoir à lequel nous devons faire affaire pour ne pas partir dans quelque chose d’inutile sur le long terme. Que choisir si l’on veut augmenter sa position dans les résultats de recherches de Google ? Et si je veux simplement améliorer mes réseaux sociaux ?</p>
        <Image alt='question' src='' />
        <p>Pour le savoir, nous allons vous exposer une liste non exhaustive de services parmis les plus connus et ce qu’ils en sont concrètement.</p>


        <Header as='h3' color='black'>Le référencement naturel</Header>
        <p>C’est le plus connu de tous. C’est simplement le fait de parvenir à se positionner au sommet des résultats de recherches de vos internautes en se basant sur l’analyse de mots-clés, la gestion des balises HTML5, et la rédaction de contenu optimisé.</p>
        <Header as='h3' color='black'>Le référencement mobile</Header>
        <p>Le petit frère du référencement naturel, ou plutôt devrions-nous dire son grand frère depuis peu, car aujourd’hui, c’est sur les smartphones que l’on fait le plus de recherches sur Internet. Le référencement mobile, c’est le résultat d’une optimisation de votre site web ou de votre application mobile.</p>
        <Header as='h3' color='black'>Le référencement social</Header>
        <p>Également appelé SMO (Social Media Optimization), ce type de référencement se fait au niveau des réseaux sociaux. En effet, la visibilité sur ceux-ci peut contribuer à un flux de trafic largement amélioré si vos comptes sont optimisés. Contenu des posts, images, description, tout est revu à la loupe.</p>
        <Image alt='types de référencement' src='' />
        <p>Si vous ne savez toujours pas où partir, certaines agences de SEO sont également équipées d’outils puissants d’audit SEO afin de laisser les experts vous diriger vers la solution qui répond parfaitement à vos attentes.</p>

    </div>
)