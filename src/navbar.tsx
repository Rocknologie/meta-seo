import React from 'react'
import { Menu } from 'semantic-ui-react'

export const Navbar: React.FC = () => (
      <Menu>
        <Menu.Item
          name='editorials'
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          name='reviews'
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
)