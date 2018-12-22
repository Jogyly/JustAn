import React from 'react';
import style from "./Node.css"; 
import { observer } from 'mobx-react';

@observer
class Node extends React.Component{
  state = {
    name: this.props.name,
    show: false,
    character: this.props.character,
  }

  componentDidMount = () => {
    document.addEventListener("click", this.handleClick);
  }

  componentWillUnmount = () => {
    document.removeEventListener("click", this.handleClick);
  }

  renderCharacter = () => {
    return (
      <div className="popup" ref={this.refWrapPopup}>
        <span className="cross" onClick={this.changeShow}>
          &times;
        </span>
        <div className="name">
          { this.state.character.name }
        </div>
        <div className="description">
          { this.state.character.description }
        </div>
        <div className="img">
          <img src={`./img/${this.state.character.id}.jpg`} alt={this.state.character.id}></img>
        </div>
      </div>
    );
  }

  refWrapPopup = (node) => {
    this.wrapPopup = node;
  }

  refWrap = (node) => {
    this.wrap = node;
  }

  handleClick = (event) => {
    if (!this.state.show && this.wrap.contains(event.target)) {
      this.changeShow();
      return;
    }

    if (this.state.show && !this.wrapPopup.contains(event.target)) {
      this.changeShow();
    }
  }

  addCharacter = () => {
    
  }

  changeShow = () => {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div className="commonNode">
        <div className="node" ref={this.refWrap}>
          { this.state.character.name }
        </div>
        <button onClick={this.addCharacter}>+</button>
        {
          this.state.show &&
            this.renderCharacter()
        }
      </div>
    );
  }
}

export default Node;