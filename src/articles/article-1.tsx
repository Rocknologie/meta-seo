import React from 'react'
import { Image, Header, Grid } from 'semantic-ui-react'
import { LineFeed } from '../components/line-feed'
import { MetaTags } from 'react-meta-tags'

export const Article1Page: React.FC = () => (
    <div>
        <MetaTags>
            <title>Google rend son moteur de recherche encore plus intelligent</title>
            <meta name="description" content="Suite à la mise à jour de son algorithme, le référencement Google se renforce davantage, créant ainsi une vraie bataille sans fin, toujours plus difficile, au sein de la concurrence." />
        </MetaTags>
        
        <LineFeed />    

        <Header as='h1' color='black'>Google rend son moteur de recherche encore plus intelligent</Header> 
        <Image alt='referencement google' src='' />
        
        {/* Paragraphe 1 */}
        <p>Après avoir atteint la dite “suprématie quantique”, le géant du web dont tout le monde en connaît le nom, Google, a annoncé récemment que son moteur de recherche subirait une mise à jour de son algorithme de référencement.</p>
        <p>Selon la firme de Montain View, cette année est l’une des plus mouvementées dans l’histoire de la recherche, rendant ainsi le référencement Google une vraie bataille sans fin au sein de la concurrence.</p>
        
        <Image alt='recherche google' src='' />

        {/* Paragraphe 2 */}
        <Header as='h2' color='black'>Un référencement encore plus intelligent</Header>
        <p>L’algorithme se renforce afin de donner des résultats toujours plus pertinents aux internautes, en analysant jusqu’à la façon d’écrire un ou plusieurs mots-clés, grammaticalement parlant.</p>  
        <p>Grâce à cela, le moteur de recherche gagne un peu plus la confiance de ses internautes, au détriment des techniques de référencement SEO plus complexes pour les experts dans le domaine.</p>
        
        {/* Paragraphe 3 */}
        <Header as='h2' color='black'>Un algorithme pas toujours parfait</Header>
        <p>Malgré un algorithme toujours plus performant, il reste néanmoins quelques erreurs le rendant imparfait. En effet, le Stanford Question Answering Dataset de l’Université de Stanford, un système de questions réponses réalisé pour entraîner des algorithmes en traitement automatique du langage naturel, a été utilisé pour tester le nouvel algorithme. Il s’avère que, selon <a href='https://web.stanford.edu/class/cs224n/reports/custom/15737727.pdf'>les chercheurs de cette même Université</a>, l’algorithme prends bien plus de temps pour analyser, trier et afficher des résultats un maximum pertinents, si les questions entrée pour la recherche sont longues.</p>
        <Image alt='faille système' src='' />

        {/* Paragraphe 3 */}
        <Header as='h2' color='black'>Un moteur de recherche qui reste toujours imbattable</Header>
        <p>Avec une part de marché d’environs 90%, la firme de Montain View reste le leader dans le marché des moteurs de recherche. La mise à jour annoncée de son algorithme, même si elle est effective uniquement sur les recherches en anglais pour le moment, Google prend encore plus d’avance par rapport à ses concurrents déjà loin derrière. Une fois de plus, l’entreprise reste et restera le géant mondial d’un marché du référencement toujours plus grossissant, avec ses quelques milliards de requêtes par jour uniquement pour la firme.</p>
        <Image alt='leader moteur de recherche' src='' />
            
    </div>
)