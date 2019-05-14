import React, { Component } from 'react'
import Rainbow from './highoc/rainbow'

export class About extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <h4 className="center">About</h4>
            <p>The Desktop Ninja goal is to help people build their desktop</p>
            <p>by selecting different computer component that are compatible with each other</p>
        </div>
      </div>
    )
  }
}

export default Rainbow(About)
