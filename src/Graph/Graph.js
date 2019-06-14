import React from 'react'
import axios from 'axios'
import './Graph.css'

import { Bar } from 'react-chartjs-2'

class Graph extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {},
      options: props.options,
      legend: props.legend
    }
  }

  static defaultProps = {
    displayTitle:false,
    displayLegend: false,
  }

  componentDidMount () {
    axios.get('https://my-json-server.typicode.com/viktorcosenza/avaliacao/sales')
      .then(response => {
        const months = []
        const values = []
        for (const datapoint of response.data) {
          months.push(datapoint.month)
          values.push(datapoint.sales)
        }
        this.setState({
          data: {
            labels: months,
            datasets: [
              {
                label: '',
                data: values,
                backgroundColor: '#4c84ff'
              }
            ]
          }
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div className='bar-chart'>
        <Bar
          data={this.state.data}
          options={{
            title:{
              display: this.props.displayTitle,
              text: this.props.location,
              fontSize:25
            },
            legend:{
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            maintainAspectRatio: false,
            responsive: true
          }}
        />
      </div>
    )
  }
}

export default Graph
