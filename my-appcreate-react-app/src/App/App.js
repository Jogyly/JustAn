import React from 'react';
import Node from "../Node/Node.js";
import utils from "../utils/utils.js";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      load: false,
    }
  }

  componentWillMount = () => {
    utils("./characterInfo.json", this.loadRes);
  }

  loadRes = (response) => {
    debugger;
    console.dir(response);
  }

  render() {
    if (!this.state.load) return ("");
    return (
      <Node/>
  )}
}


export default App;