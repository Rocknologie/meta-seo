import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

interface ServiceCardProps {
    img: string;
    title: string;
    content: string;
    href: string;
    alt: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = (props) => (
    <Card color='yellow' centered >
        <Image alt={props.alt} src={props.img}  height='50' wrapped ui={false}/>
        <Card.Content color='blue'>
            <Card.Header >
                <p>{props.title}</p>
            </Card.Header>
            <Card.Description>
                <p>{props.content}</p>
            </Card.Description>           
        </Card.Content>
        <Card.Content extra>
        <Button color='blue' href={props.href}>
            Voir l'offre
          </Button>
        </Card.Content>
    </Card> 
)
