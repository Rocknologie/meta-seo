import React from 'react'
import { Navbar } from './navbar'
import { LineFeed } from './line-feed'

export const Header: React.FC = () => (
    <div>
        <LineFeed></LineFeed>
        <LineFeed></LineFeed>
        <Navbar></Navbar>
    </div>
)