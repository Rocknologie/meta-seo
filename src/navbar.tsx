import React from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

  export const Navbar: React.FC = () => (
      <Menu inverted>
        <Menu.Item name='meta-seo'>Meta-SEO</Menu.Item>
        <Menu.Item name='agence'>Agence</Menu.Item>

        <Dropdown item text='Services'>
          <Dropdown.Menu>
            <Dropdown.Item> Référencement
              <Dropdown>
                <Dropdown.Menu>
                  <Dropdown.Item>Référencement naturel</Dropdown.Item>
                  <Dropdown.Item>Référencement mobile</Dropdown.Item>
                  <Dropdown.Item>Référencement social (SMO)</Dropdown.Item>
                  <Dropdown.Item>Netlinking</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
            <Dropdown.Item>Audit SEO</Dropdown.Item>
            <Dropdown.Item>Formations</Dropdown.Item>
            <Dropdown.Item>E-Réputation</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Menu position='right'>
          <Menu.Item name='blog'>Blog</Menu.Item>
          <Menu.Item name='contact'>Contact</Menu.Item>
        </Menu.Menu>
    </Menu>
)