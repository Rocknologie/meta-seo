import React from 'react'
import { LineFeed } from './line-feed'
import { Header } from 'semantic-ui-react'
import { ListService } from './list-service'
import { Divide } from './divider'

export const MainPage: React.FC = () => (
     <div>
          <LineFeed />    
                   
          <Header as='h1' textAlign='left'>Agence de référencement de site web</Header>

          <p>Le référencement de site web est devenu un point clé pour générer du trafic sur votre site web. Une bonne visibilité ainsi qu’une performance accrue sont primordiales pour parvenir à répondre aux besoins de vos clients ou de vos internautes, tout type de site confondu (e-commerce, forum, services, etc…).</p>

          <Divide />
          {/* Call service list */}
          <ListService />
     </div>
)