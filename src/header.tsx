import React from 'react'
import { Navbar } from './components/navbar'
import { LineFeed } from './components/line-feed'

export const Header: React.FC = () => (
    <div>
        <LineFeed />
        <LineFeed />
        <Navbar />
    </div>
)