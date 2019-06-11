import React from 'react'
import './Graph.css'

import { Bar } from 'react-chartjs-2'

class Graph extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: props.data,
      options: props.options,
      legend: props.legend
    }
  }

  render () {
    return (
      <div className='bar-chart'>
        <Bar
          data={this.state.data}
          options={this.state.options}
          legend={this.state.legend}
        />
      </div>
    )
  }
}

export default Graph
