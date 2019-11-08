import React from 'react'
import { Form, Button, Header, Icon } from 'semantic-ui-react'
import { LineFeed } from './line-feed'

export const Contact: React.FC = () => (
    <div>
        <LineFeed />
        <Header as='h1' textAlign='left'>Nous contacter</Header>

        <Form>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Nom' placeholder='Doe' />
                <Form.Input fluid label='Prénom' placeholder='John' />
            </Form.Group>
            <Form.Input fluid label='Société' />
            <Form.Input fluid label='E-mail' placeholder='votre-adresse@domaine.fr' />
            <Form.Input fluid label='Téléphone' placeholder='0600000000' />
            <Form.TextArea label='Votre message' placeholder='Ecrivez votre message...' />
            <Button color='blue' type='submit'>
                <Icon name='check' /> Envoyer
            </Button>
        </Form>
    </div>
)