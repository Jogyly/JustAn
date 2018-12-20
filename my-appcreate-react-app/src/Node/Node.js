import React from 'react';
import style from "./Node.css"; 

class Node extends React.Component{
  state = {
    name: this.props.name,
    show: false,
    character: this.props.character,
  }

  renderCharacter = () => {
    return (
      <div className="popup">
        <div className="name">
          { this.state.character.name }
        </div>
        <div className="description">
          { this.state.character.description }
        </div>
        <div className="img">
          { this.state.character.img }
        </div>
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
          { this.state.character.name }
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