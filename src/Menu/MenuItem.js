import React from 'react'
import './MenuItem.css'

class MenuItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name,
      value: this.props.value,
      color: this.props.color,
      icon: this.props.icon
    }
  }
  // TODO remove this ;s
  componentWillReceiveProps (props) {
    this.setState({
      name: props.name,
      value: props.value
    })
  }

  render () {
    return (
      <div className='item' style={{ backgroundColor: this.state.color }}>
        <div className='icon'> <i className={this.props.icon} /> </div>
        <div className='text'>
          <div className='title'>
            {this.state.value}
          </div>
          <div className='count'>
            {this.state.name}
          </div>
        </div>
      </div>
    )
  }
}

export default MenuItem
