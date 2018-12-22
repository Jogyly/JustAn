import React from 'react';
import Level from "../Level/Level.js";
import readTextFile from "../utils/readTextFile.js";
import makeTree from "../utils/makeTree.js";

class App extends React.Component{
  state = {
    load: false,
    characters: null,
  }

  componentWillMount = () => {
    readTextFile("./characterInfo.json", this.loadRes);
  }

  loadRes = (response) => {
    if (!response || !response.characters) {
      return null;
    }

    const characters = makeTree(response.characters);
    this.setState({
      load: true,
      characters: characters,
    })
  }

  render() {
    if (!this.state.load) return ("");
    return (
      <Level characters={this.state.characters} />
  )};
};


export default App;