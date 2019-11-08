import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

interface TeamCardProps {
    img: string;
    title: string;
    content: string;
    alt: string;
}

export const TeamCard: React.FC<TeamCardProps> = (props) => (
    <Card centered color='yellow'>
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
            <Icon name='instagram' size='large' />
            <Icon name='pinterest' size='large' />
            <Icon name='twitter' size='large' />
            <Icon name='facebook' size='large' />
        </Card.Content>
    </Card>
)