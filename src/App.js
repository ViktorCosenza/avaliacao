import React from 'react'
import './App.css'

import Menu from './Menu/Menu'
import Graph from './Graph/Graph'
import Reports from './reports/Reports'

function App () {
  return (
    <div className='App'>
      <header>
        <Menu> I am a children </Menu>
      </header>
      <div className='main-content'>

        <div className='graph'>
          <header>
            Site Traffic Overview
          </header>
          <Graph />
        </div>

        <div className='reports'>
          <header> Reports </header>
          <Reports />
        </div>

      </div>
    </div>
  )
}

export default App
