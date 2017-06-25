import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Col, Row } from 'react-bootstrap'
import { Motion, spring } from 'react-motion'

import Background from '../static/images/box-bg60.png'


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

const TAndM = styled.span`
  float: left;
  padding: 5px;
`
const S = styled.span`
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
  border: 2px dashed white;
`

const x = 5


class PlayZone extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { Data } = this.props
    console.log(Data)
    return (
      <CoverMainZone>
        <MainZone>
          <Motion style={{ x: spring(this.state.open ? 2000 : 0) }} >
            {({ x }) =>
              <Box
                style={{
                  zIndex: '100',
                  WebkitTransform: `translate3d(${x}px, 0, 0)`,
                  transform: `translate3d(${x}px, 0, 0)`,
                  transitionDuration: '1s',
                  transitionTimingFunction: 'linear',
                }}
              />
            }
          </Motion>
          <Nothing>
            <StartPoint> { '<-' } Start here <br /></StartPoint>
            <EndPoint style={{ marginLeft: `${(Data.S1 * 200) - 284}`, marginTop : `20px` }} > End here { '->' }</EndPoint>
            <EndZone style={{ width: `${((Data.S2 - Data.S1) * 200)}` }} />
          </Nothing>
          <Floor style={{ borderTop: `${Data.uk * 10}px dashed rgba(255,255,255,0.5)` }} >
            <TAndM> ú(s) = { Number((Data.us).toFixed(2)) }, ú(k) = { Number((Data.uk).toFixed(2)) }, t = 0.3s, m = 40kg</TAndM><S>{'< '}---------------- S = [ { Number((Data.S1).toFixed(2)) } to { Number((Data.S2).toFixed(2)) } ] m ---------------{' >'}</S>
          </Floor>
          {/*<button onClick={this.handleClick}> click !@@@</button>*/}
        </MainZone>
      </CoverMainZone>
    )
  }
}

export default PlayZone