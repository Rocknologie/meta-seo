import React from 'react'
import { Navbar } from './navbar'
import { LineFeed } from './header'
import { Container } from 'semantic-ui-react'
import { ListCard } from './list-card'

export const MainPage: React.FC = () => (
     <div>
          <LineFeed></LineFeed>
          <Container>
               {/* Call Menu */}
               <Navbar></Navbar>
             
               {/* Call service list */}
               <ListCard></ListCard>
          </Container> 
     </div>
)