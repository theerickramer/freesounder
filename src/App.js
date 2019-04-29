import React, { Component } from 'react';

export default class App extends Component {
  state = {}
  
  setSearch = e => {
    this.setState({
      search: e.target.value
    })
  }

  search = () => {
    fetch(`/search?q=${this.state.search}`)
    this.setState({
      search: ''
    })
  };

  render() {
    return (
      <div>
        <input onChange={this.setSearch} />
        <button onClick={this.search}>Search</button>
      </div>
    );
  }
}
