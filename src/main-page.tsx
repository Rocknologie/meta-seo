import React from 'react'

import { LineFeed } from './line-feed'
import { Container } from 'semantic-ui-react'
import { ListService } from './list-service'

export const MainPage: React.FC = () => (
     <div>
          <LineFeed></LineFeed>    
                   
          {/* Call service list */}
          <ListService></ListService>
     </div>
)