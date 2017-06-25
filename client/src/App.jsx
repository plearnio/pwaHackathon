import React from 'react';
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-bootstrap'

import './static/css/App.css';

import PlayZone from './components/PlayZone'

const Panel = styled(Grid)`
  border-radius: 10px;
  background-color: #252526;
  height: 500px;
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

const App = () => (
  <center>
    <Panel>
      <PlayZone Data={[4.7, 5]} />
      <FMeter> F = </FMeter>
      <FButton> PUSH SI ! </FButton>
    </Panel>
  </center>
)

export default App;
