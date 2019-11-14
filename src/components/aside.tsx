import React from 'react'
import { Header } from 'semantic-ui-react'
import { LineFeed } from './line-feed'

export const AsideComponent: React.FC = () => (
    <div>
        <LineFeed />
        <Header as='h2' textAlign='left'>Nos autres services de référencement</Header>
        <ul>
            <li><a href='/services/referencement-naturel'>Référencement naturel</a></li>  
            <li><a href='/services/referencement-mobile'>Référencement mobile</a></li> 
            <li><a href='/services/referencement-social'>Référencement social</a></li> 
            <li><a href='/services/netlinking'>Netlinking</a></li>    
        </ul> 
    </div>
)