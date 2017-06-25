import React from 'react'
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-bootstrap'

import Background from '../static/images/box-bg60.png'

console.log(Background)

const CoverMainZone = styled.div`
  width: 100%;
  backgroud-color: white;
  overflow-x: auto;
`

const MainZone = styled.div`
  margin-top: 30px;
  width: 1000px;
  height: 300px;
  padding-top: 190px;
  background-color: #1e1e1e;
  border: 2px solid rgba(255,255,255,0.5);;
`
const Title = styled.span`
  color: white;
  background-color: #555556;
  border-radius: 10px;
  padding: 10px;
  border-color: 10px;
  font-family: sans-serif;
`
const Box = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  float: left;
`

const Nothing = styled.div`
  width: 936px;
  // background-color: white;
  height: 60px;
  position: relative;
  float: left;
`

const Floor = styled.div`
  background-color: #1e1e1e;
  height: 46px;
  width: 996px;
  float: left;
`

const Us = styled.span`
  float: left;
  padding: 5px;
`
const Uk = styled.span`
  float: left;
  padding: 5px;
  margin-left: 100px;
`

const StartPoint = styled.span`
  float: left;
  padding: 5px;
  width: 100px;
`

const EndPoint = styled.span`
  float: left;
  padding: 5px;
  width: 100px;
`

const EndZone = styled.div`
  float: left;
  padding: 5px;
  height: 60px;
  background-color: #3f3f46;
`

const x = 5


const PlayZone = ({ Data }) => (
  <CoverMainZone>
    <MainZone>
      <Box />
      <Nothing>
        <StartPoint> { '<-' } Start here </StartPoint>
        <EndPoint style={{ marginLeft: `${(Data[0] * 200) - 284}` }} > End here { '->' }</EndPoint>
        <EndZone style={{ width: `${((Data[1] - Data[0]) * 200)}` }} > ! </EndZone>
      </Nothing>
      <Floor style={{ borderTop: `${x}px dashed rgba(255,255,255,0.5)` }} >
        <Us> ú(s) = 0.1</Us><Uk> ú(k) = 0.1 </Uk>
      </Floor>
    </MainZone>
  </CoverMainZone>
)

export default PlayZone