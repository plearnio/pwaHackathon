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
      x: 0
    }
    this.timer = null
    this.addOne = this.addOne.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.Toggle = this.Toggle.bind(this)
    this.random()
  }

  addOne() {
    this.setState({ F: this.state.F + 2 })
    this.timer = setTimeout(this.addOne, 20)
  }

  Toggle() {
    this.setState({ isToggle: !this.state.isToggle }, () => {
      if (this.state.isToggle) this.addOne()
      else this.stopTimer()
    })
  }

  check() {
    console.log(this.state.Sx)
    if (this.state.Sx <= this.state.S2 && this.state.Sx >= this.state.S1) {
      this.setState({ isCorrect: true, F: 0 }, () => {
        console.log(this.state.isCorrect)
        this.random()
      })
    } else {
      this.setState({ isCorrect: false, F: 0 }, () => {
        console.log(this.state.isCorrect)
        this.random()
      })
    }
  }

  stopTimer() {
    clearTimeout(this.timer)
    this.calculate()
  }

  random() {
    this.state.x = (Math.random() * (0.6 - 0.3)) + 0.3
    this.state.S2 = (Math.random() * (5.1 - 0.9)) + 0.9
    this.state.uk = (Math.random() * (0.5 - 0.1)) + 0.1
    this.state.us = (Math.random() * (0.5 - 0.1)) + 0.1
    this.state.S1 = this.state.S2 - this.state.x
    this.setState(this.state)
  }

  calculate() {
    this.state.N = this.state.m * this.state.g * Math.cos(0)
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
          this.check()
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
        <div> a1 {this.state.a1} </div>
        <div> a2 {this.state.a2} </div>
        <div> us {this.state.us} </div>
        <div> uk {this.state.uk} </div>
        <div> S {this.state.Sx} </div>
        <div> S1 {this.state.S1}</div>
        <div> S2 {this.state.S2}</div>
        <div> x {this.state.x}</div>
      </div>
    )
  }
}

export default Random
