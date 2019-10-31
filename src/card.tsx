import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

interface ServiceCardProps {
    img: string;
    title: string;
    content: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = (props) => (
    <Card color='yellow'>
        <Image src={props.img} size='medium' wrapped ui={false}/>
        <Card.Content color='blue'>
            <Card.Header ><p>{props.title}</p></Card.Header>
            <Card.Description><p>{props.content}</p></Card.Description>           
        </Card.Content>
        <Card.Content extra>
        <Button color='blue'>
            Voir l'offre
          </Button>
        </Card.Content>
    </Card> 
)


{/* 
    <Card>
            <Image src='./img/marvin-meyer.jpg' wrapped ui={false} />
            <Card.Content>
            <Card.Header>Titre</Card.Header>
             <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            
            <Card.Description>
                CONTENUE 
            </Card.Description>
            </Card.Content>
        </Card> 
*/}