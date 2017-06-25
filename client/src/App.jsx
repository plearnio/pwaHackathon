import React, { Component } from 'react';
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-bootstrap'

import './static/css/App.css';

import PlayZone from './components/PlayZone'
import Random from './components/Random'

const Panel = styled(Grid)`
  border-radius: 10px;
  background-color: #252526;
  height: 700px;
  color: #ddd;
  padding: 0px;
  margin-top: 50px;
`

const FButton = styled.button`
  width: 200px;
  padding: 20px;
  border: 3px dashed rgba(255,255,255,0.5);
  background-color: transparent;
  color: white;
  font-size: 120%;
`

const FMeter = styled.div`
  width: 200px;
  padding: 20px;
  background-color: transparent;
  color: white;
  font-size: 130%;
`

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isToggle: false,
      isMove: false,
      isCorrect: false,
      F: 0,
      m: 40,
      Sx: 0,
      ux: 0,
      vx: 0,
      t: 0.3,
      a1: 0,
      a2: 0,
      us: 0.1,
      uk: 0.1,
      N: 0,
      g: 9.8,
      S1: 0,
      S2: 0,
      x: 0,
    }
    this.handleData = this.handleData.bind(this)
  }

  handleData(data) {
    console.log(data)
    this.setState(data)
  }

  handleResult(data) {
    console.log(data)
    // this.setState(data)
  }

  render() {
    return(
      <center>
        <Panel>
          <PlayZone Data={this.state} />
          <Random setData={this.handleData} getResult={this.handleResult} />
        </Panel>
      </center>
    )
  }
}

export default App;
