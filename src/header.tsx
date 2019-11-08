import React from 'react'
import { Navbar } from './navbar'
import { LineFeed } from './line-feed'

export const Header: React.FC = () => (
    <div>
        <LineFeed />
        <LineFeed />
        <Navbar />
    </div>
)