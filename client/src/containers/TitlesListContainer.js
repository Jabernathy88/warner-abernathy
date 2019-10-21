import React, { Component } from 'react'
import TitlesListFilter from './TitlesListFilter'
import axios from 'axios'

class TitlesListContainer extends Component {
  state = {
    titles: [],
    filtered: []
  }

  async getTitles() {
    try {
      const response = await axios(`http://localhost:3001/api/titles`)
      console.log("I am AXIOS result:", response.data)

      this.setState({titles: response.data})
      console.log("I am STATE:", this.state)

    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getTitles()
  }

  render() {
    return (
      <div className="column-left col-12 pr-3 m-0">
      <div className="bg-left bg-white p-2">
        <h4 className="pt-1 pb-2 text-info">Your Latest Posts</h4>
        <TitlesListFilter titles={this.state.titles} />
      </div>
    </div>
    )
  }
}

export default TitlesListContainer
