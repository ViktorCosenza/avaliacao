import React from 'react'
import './Menu.css'

import MenuItem from './MenuItem'

class Menu extends React.Component {
  render () {
    return (
      <div className='menu'>
        <ul>
          <MenuItem color='#29cb97' name='Visitors' value='500' icon='fas fa-eye fa-3x' />
          <MenuItem color='#fec400' name='Users' value='100' icon='fas fa-users fa-3x' />
          <MenuItem color='#4c84ff' name='Sales' value='200 ' icon='fas fa-dollar-sign fa-3x' />
          <MenuItem color='#ca66ff' name='Orders' value='300 ' icon='fas fa-shopping-cart fa-3x' />
        </ul>
      </div>
    )
  }
}

export default Menu
