import React from 'react'

import { LineFeed } from './line-feed'
import { Container } from 'semantic-ui-react'
import { ListCard } from './list-card'

export const MainPage: React.FC = () => (
     <div>
          <LineFeed></LineFeed>    
                   
          {/* Call service list */}
          <ListCard></ListCard>
     </div>
)