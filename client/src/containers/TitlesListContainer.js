import React, { Component } from 'react'
import TitlesList from '../components/TitlesList'

class TitlesListContainer extends Component {
  render() {
    return (
      <div className="column-left col-12 pr-3 m-0">
      <div className="bg-left bg-white p-2">
        <h4 className="pt-1 pb-2 text-info">Your Latest Posts</h4>
        <TitlesList />
      </div>
    </div>
    )
  }
}

export default TitlesListContainer
