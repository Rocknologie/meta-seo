import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import { LineFeed } from '../components/line-feed'
import { MetaTags } from 'react-meta-tags'

export const FormationPage: React.FC = () => (
    <div>
        <MetaTags>
            <title>Comment référencer son site - Meta-SEO</title>
            <meta name="description" content='Comment référencer son site ? Notre agence SEO répond à cette question en vous proposant diverses formations.' />
        </MetaTags>
        
        <LineFeed />
        <Header as='h1' textAlign='left'>Comment référencer son site ?</Header>

        {/* Formation description */}
        <p>Notre agence SEO vous propose diverses formations afin de vous permettre d’apprendre à référencer correctement votre contenu web, que ce soit un site web ou une application mobile. Vous serez capable de réaliser des audits SEO complets et détaillés pour pouvoir par la suite optimiser efficacement et augmenter votre flux de trafic.
            Nous proposons plusieurs formations afin de répondre à vos besoin le plus précisément possible.
        </p>

        <Image src='/img/pc.png' size='large' alt='formation seo'/>

        {/* Paragraphe 1 */}
        <Header as='h2' textAlign='left'>Formation “Référencement naturel"</Header>  
        <p>Comment référencer son site ? Mais surtout, par où commencer ? Cette formation vous permettra de connaître la base du référencement SEO : le référencement naturel. Les algorithmes des moteurs de recherche et les balises HTML5 n’auront plus aucun secret pour vous !</p>
    
        {/* Paragraphe 2 */}
        <Header as='h2' textAlign='left'>Formation “Référencement mobile”</Header>    
        <p>Cette formation est devenue primordiale depuis ces dernières années où le digital prend une place de plus en plus importante dans notre quotidien. Grâce à cette formation, vous serez capable de référencer votre contenu web (site web ou application mobile) de façon optimale, que ce soit sur les pages de résultats des moteurs de recherche, ou sur les places de marché telles que l’AppStore et le Google Play Store.</p>
        
        {/* Paragraphe 3 */}
        <Header as='h2' textAlign='left'>Formation “Référencement social et visibilité”</Header>    
        <p>Comment référencer son site grâce aux réseaux sociaux ? Cette formation vous offrira les compétences clés pour parvenir à augmenter la visibilité, la popularité et le nombre de backlinks de votre site web. Vous serez capable de gérer correctement vos comptes sur les réseaux sociaux, vos posts et vos backlinks de façon précise et ciblée pour vos internautes.</p>
        
        {/* Paragraphe 4 */}
        <Header as='h2' textAlign='left'>Formation “Référencement global”</Header>    
        <p>Cette formation est tout simplement le regroupement des trois formations présentées ci-dessus. Elle vous permettra de connaître à la fois le référencement naturel, le référencement mobile, et le référencement social. Vous allez recevoir tous les points-clés du référencement en général et vous gagnerez de nombreuses compétences dans le domaine du SEO. En clair, vous serez un expert du référencement de site web !</p>
    </div>
)