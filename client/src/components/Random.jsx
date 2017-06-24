import React, { Component } from 'react'

const style = {
  width: 100,
  height: 100
}
class Random extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggle: false,
      isMove: false,
      Fans: 0,
      F: 100,
      m: 40,
      Sx: 0,
      ux: 0,
      vx: 0,
      t: 0.1,
      a1: 0,
      a2: 0,
      us: 0.1,
      uk: 0.1,
      N: 0,
      g: 9.8
    }
    this.timer = null
    this.addOne = this.addOne.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.Toggle = this.Toggle.bind(this)
  }

  addOne() {
    this.setState({ F: this.state.F + 1 })
    this.timer = setTimeout(this.addOne, 5)
  }

  Toggle() {
    this.setState({ isToggle: !this.state.isToggle }, () => {
      if (this.state.isToggle) this.addOne()
      else this.stopTimer()
    })
  }

  stopTimer() {
    clearTimeout(this.timer)
    this.calculate()
  }

  calculate() {
    this.state.N = this.state.m * this.state.g * Math.cos(0)
    console.log('N'+this.state.N)
    const Fs = this.state.N * this.state.us
    const Fk = this.state.N * this.state.uk
    const calF = this.state.F - Fk
    const calF2 = -Fk
    if (this.state.F > Fs) {
      this.setState({
        isMove: true,
        a1: calF / this.state.m,
        a2: calF2 / this.state.m
      }, () => {
        const newvx = this.state.ux + (this.state.a1 * this.state.t)
        this.setState({
          Sx: (-1 * (newvx ** 2)) / (2 * this.state.a2)
        }, () => {
          console.log('S'+this.state.Sx)
        })
      })
    }
  }

  render() {
    return (
      <div>
        <div> {this.state.F}</div>
        <button onClick={this.Toggle} style={style}>+</button>
        <div>{this.state.isToggle && 'asd'}</div>
      </div>
    )
  }
}

export default Random
