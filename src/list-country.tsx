import React from 'react'
import { Grid, Image, Popup } from 'semantic-ui-react'
import { PopupCity } from './popup-city'

export const ListCountry: React.FC = () => (
    <div>        
    <Grid>
        <Grid.Row columns={4}>
            <Grid.Column width={4}>
                <PopupCity alt='Ville de Lyon' src='/img/city/lyon.jpg' content='Lyon' href=''/>
                </Grid.Column>
            <Grid.Column width={4}>
                <PopupCity alt='Ville de Paris' src='/img/city/paris.jpg' content='Paris' href='https://www.google.fr/maps/place/Paris/@48.8589507,2.2770205,12z/data=!3m1!4b1!4m5!3m4!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219'/>
            </Grid.Column>
            <Grid.Column width={4}>
                <PopupCity alt='Ville de Lille' src='/img/city/lille.jpg' content='Lille' href='https://www.google.fr/maps/place/Lille/@50.6311167,3.0121411,13z/data=!3m1!4b1!4m5!3m4!1s0x47c2d579b3256e11:0x40af13e81646360!8m2!3d50.62925!4d3.057256'/>   
            </Grid.Column>
            <Grid.Column width={4}>
                <PopupCity alt='Ville de Bordeaux' src='/img/city/bordeaux.jpg' content='Bordeaux' href='https://www.google.fr/maps/place/Bordeaux/@44.8637834,-0.6211603,13z/data=!3m1!4b1!4m5!3m4!1s0xd5527e8f751ca81:0x796386037b397a89!8m2!3d44.837789!4d-0.57918'/> 
            </Grid.Column>   
        </Grid.Row>             
    </Grid></div>
    
)