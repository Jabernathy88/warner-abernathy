import React, { Component } from 'react'
import TitlesList from '../components/TitlesList'

class TitlesListFilter extends Component {
  state = {
    initialTitles: [],
    filteredTitles: []
  }

  filterList = (event) => {
    let titles = this.state.initialTitles;
    titles = titles.filter((title) => {
      return title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ filteredTitles: titles });
  }

  componentDidMount() {
    this.setState({
      initinitialTitlesialItems: this.props.titles,
      filteredTitles: this.props.titles
    })
    console.log(this.state)
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search" onChange={this.filterList} />
        </form>
        <TitlesList titles={this.state.filteredTitles} />
      </div>
    )
  }
}

export default TitlesListFilter
