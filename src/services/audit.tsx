import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import { MetaTags } from 'react-meta-tags'
import { LineFeed } from '../components/line-feed'

export const AuditPage: React.FC = () => (
    <div>
        <MetaTags>
            <title>Audit SEO - Meta-SEO</title>
            <meta name="description" content='L’audit SEO que nous vous proposons est fait pour vous donner des informations détaillées sur ce qui pourrait être optimisé pour votre site web.' />
        </MetaTags>
        
        <LineFeed />
        <Header as='h1' textAlign='left'>Audit SEO</Header>

        {/* Formation description */}
        <p>Vous souhaitez savoir si votre site web a besoin d’être optimisé, vous souhaitez savoir par où commencer pour améliorer son référencement ? L’audit SEO que nous proposons est fait pour répondre à toutes ces questions. Notre agence dispose d’un outil puissant dans le but de réaliser des audits SEO complets et détaillés. Développé et maintenu par nos soins, notre outil propriétaire est en permanence mis à jour en fonction des nouvelles tendances et des bonnes pratiques de SEO émergentes, tout type de référencement confondu (naturel, mobile, social). L’objectif est d’analyser en profondeur le contenu de votre site web, ses mots-clés et ses balises HTML.</p>

        <Image src='/img/' size='large' alt='Audit SEO outil'/>

        <LineFeed />

        <p>Notre outil d’audit SEO se découpe en réalité en plusieurs audits différents :</p>

        <ul>
            <li>Un audit des mots-clés pour savoir quels mots-clés sont utilisés pour chacune de vos pages web, avec une analyse profonde du contenu de chacun de vos articles;</li>
            <li>Un audit technique qui va de son côté traiter le contenu de votre code HTML pour en déterminer si les bonnes pratiques sont mises en oeuvre : les balises de meta description, de headers (toutes tailles), de titre, ainsi que le placement des balises HTML5 telles que les balises header, footer, aside, section, article, etc…;</li>
            <li>Un audit de visibilité qui se base sur les backlinks et la popularité des sites web sur lequel ils sont placés.</li>
        </ul>

        <p>Nous analysons donc de façon autonome le rapport rendu par notre outil et nous vous proposons de prendre rendez-vous, soit par visioconférence, soit directement dans l’une de nos agences, si jamais vous en avez l’occasion, afin de discuter avec vous de ce qui peut être à améliorer ou à optimiser, toujours dans le but de générer plus de trafic vers votre site web et augmenter sa visibilité. Suite à notre rendez-vous, nous vous proposerons les services adéquats en fonction des résultats de notre outil, de vos besoins, ou alors des formations enrichissantes.</p>
    </div>
)