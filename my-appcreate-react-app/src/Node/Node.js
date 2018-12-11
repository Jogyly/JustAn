import React from 'react';
import style from "./Node.css"; 

class Node extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      show: false,
    }
  }

  renderCharacter = () => {
    return (
      <div>
        Character
      </div>
    );
  }

  changeShow = () => {
    this.setState({
      show: !this.state.show,
    })
  }

  render() {
    return (
      <div>
        <div className="node" onClick={this.changeShow}>
          hello
        </div>
        {
          this.state.show &&
            this.renderCharacter()
        }
      </div>
    );
  }
}

export default Node;