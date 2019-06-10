import React from 'react'
import './Menu.css'

class Menu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visitors: 50
    }
  }

  render () {
    return (
      <div className='menu'>
        <ul>
          <div>Visitors {this.state.visitors} </div>
          <div>Users </div>
          <div>Sales </div>
          <div>Orders </div>
        </ul>
      </div>
    )
  }
}

export default Menu
