import React, { Component } from 'react'
import TitlesList from '../components/TitlesList'
import axios from 'axios'

class TitlesListContainer extends Component {
  state = {
    titles: []
  }

  async getTitles() {
    try {
      const response = await axios(`https://warner-abernathy.herokuapp.com/api/titles`)
      console.log("I am AXIOS result:", response.data)

      this.setState({ titles: response.data })
      console.log("I am STATE:", this.state)

    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getTitles()
  }

  handleInputChange(event) {
    // let currentList = []
    // let newList = []
    // if (e.target.value !== "") {
    //   currentList = this.state.titles
    //   newList = currentList.filter(item => {
    //     const lc = item.toLowerCase();
    //     const filter = e.target.value.toLowerCase();
    //     return lc.includes(filter);
    //   })
    // } else {
    //   newList = this.state.titles;
    // }
    // this.setState({
    //   titles: newList
    // });
  }

  render() {
    return (
      <div className="column-left col-12 pr-3 m-0">
        <div className="bg-left bg-white p-2">
          <h4 className="pt-1 pb-2 text-info">Current Movie Titles</h4>
          <input
            placeholder="Search ..."
            onChange={this.handleInputChange}
          />
          <TitlesList titles={this.state.titles} />
        </div>
      </div>
    )
  }
}

export default TitlesListContainer
