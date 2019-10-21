import React, { Component } from 'react'
import TitlesList from '../components/TitlesList'

class TitlesListFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: props.titles
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     filtered: this.props.titles
  //   });
  // }

  render() {
    return (
      <div>
        <form>
          <input type="text" className="input" placeholder="Search ..." />
        </form>
        <TitlesList titles={this.state.filtered} />
      </div>
    )
  }
}

export default TitlesListFilter
