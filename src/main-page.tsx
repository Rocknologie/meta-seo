import React from 'react'
import { LineFeed } from './components/line-feed'
import { Header } from 'semantic-ui-react'
import { ListService } from './list-service'
import { Divide } from './components/divider'
import { MetaTags } from 'react-meta-tags'

export const MainPage: React.FC = () => (
     <div>
          <MetaTags>
            <title>Agence de référencement de site web - Meta-SEO</title>
            <meta name="description" content="Optimisez votre site grâce à MetaSEO, l’agence de référencement de site web : référencement naturel, référencement mobile, visibilité SEO, Audits SEO." />
        </MetaTags>
        
          <LineFeed />    
                   
          <Header as='h1' textAlign='left'>Meta-SEO - L'agence de référencement de site web</Header>

          <p>Le référencement de site web est devenu un point clé pour générer du trafic sur votre site web. Une bonne visibilité ainsi qu’une performance accrue sont primordiales pour parvenir à répondre aux besoins de vos clients ou de vos internautes, tout type de site confondu (e-commerce, forum, services, etc…).</p>

          <Divide />
          {/* Call service list */}
          <ListService />
     </div>
)