import React from 'react';
import Node from "../Node/Node.js";
import utils from "../utils/readTextFile.js";

class App extends React.Component{
  state = {
    load: false,
    characters: null,
  }

  componentWillMount = () => {
    utils("./characterInfo.json", this.loadRes);
  }

  loadRes = (response) => {
    if (!response || !response.characters) {
      return null;
    }

    this.setState({
      load: true,
      characters: response.characters,
    })
  }

  render() {
    if (!this.state.load) return ("");
    return (
      <Node character={this.state.characters[0]}/>
  )};
};


export default App;