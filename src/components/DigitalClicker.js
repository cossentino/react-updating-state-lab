

import React from 'react'


export default class DigitalClicker extends React.Component {


  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClickEvent = () => {
    this.setState(pState => {
      return {
        timesClicked: pState.timesClicked + 1
      }
    })
  }

  render() {
    return(
      <button onClick={this.handleClickEvent}>{this.state.timesClicked}</button>
    )
  }
}
