import React from 'react'
import { Image, Popup } from 'semantic-ui-react'

interface PopupCityProps {
    alt: string;
    src: string;    
    href: string;
    content: string;
}

// Class Popop for city
export const PopupCity: React.FC<PopupCityProps> = (props) => (
    <Popup 
        trigger={
            <Image 
                circular
                alt={props.alt} 
                src={props.src} 
                href={props.href} 
            />
            } 
        content={props.content} 
        position='bottom center'
    />
)