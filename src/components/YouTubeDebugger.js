// Code YouTubeDebugger Component Here


import React from 'react'

const initialState = {
  errors: [],
  user: null,
  settings: {
    bitrate: 8,
    video: {
      resolution: '1080p'
    }
  }
} 


export default class YouTubeDebugger extends React.Component {


  constructor() {
    super()
    this.state = initialState
  }

  clickChangeBitrate = () => {
    this.setState(pState => {
      return {
        settings: {
          ...pState.settings,
          bitrate: 12
        }
      }
    })
  }

  clickChangeResolution = () => {
    this.setState(pState => {
      return {
        settings: {
          ...pState.settings,
          video: {
            resolution: '720p'
          }
        }
      }
    })
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.clickChangeBitrate}>Bitrate: {this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.clickChangeResolution}>Resolution: {this.state.settings.video.resolution}</button>
      </div>
    )
  }
}
