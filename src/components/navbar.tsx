import React from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

export const Navbar: React.FC = () => (
  <Menu inverted>
    <Menu.Item name='meta-seo' href='/home'>
      <img alt='logo' src='logo.png'/>
      </Menu.Item>
    <Menu.Item name='agence' href='/agence'>Notre agence</Menu.Item>

    <Dropdown item text='Services'>
      <Dropdown.Menu>
        <Dropdown.Item> Référencement
          <Dropdown>
            <Dropdown.Menu>
              <Dropdown.Item  href='referencement-naturel'>Référencement naturel</Dropdown.Item>
              <Dropdown.Item  href='referencement-mobile'>Référencement mobile</Dropdown.Item>
              <Dropdown.Item href='referencement-social'>Référencement social (SMO)</Dropdown.Item>
              <Dropdown.Item href='netlinking'>Netlinking</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Dropdown.Item  href='audit-seo'>Audit SEO</Dropdown.Item>
        <Dropdown.Item href='formation'>Formations</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Menu.Menu position='right'>
      <Menu.Item name='blog' href='blog'>Blog</Menu.Item>
      <Menu.Item name='contact' href='contact'>Contact</Menu.Item>
    </Menu.Menu>
  </Menu>
)