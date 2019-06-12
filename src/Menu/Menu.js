import React from 'react'
import axios from 'axios'
import './Menu.css'

import MenuItem from './MenuItem'

class Menu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visitors: 0,
      users: 0,
      sales: 0,
      orders: 0
    }
  }

  componentDidMount () {
    axios.get('https://my-json-server.typicode.com/viktorcosenza/avaliacao/information')
      .then(response => {
        const data = response.data
        this.setState({
          visitors: data.visitors,
          users: data.users,
          sales: data.sales,
          orders: data.orders
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div className='menu'>
        <ul>
          <MenuItem color='#29cb97' name='Visitors' value={this.state.visitors} icon='fas fa-eye fa-3x' />
          <MenuItem color='#fec400' name='Users' value={this.state.users} icon='fas fa-users fa-3x' />
          <MenuItem color='#4c84ff' name='Sales' value={this.state.sales} icon='fas fa-dollar-sign fa-3x' />
          <MenuItem color='#ca66ff' name='Orders' value={this.state.orders} icon='fas fa-shopping-cart fa-3x' />
        </ul>
      </div>
    )
  }
}

export default Menu
