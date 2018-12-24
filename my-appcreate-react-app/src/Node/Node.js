import React from 'react';
import style from "./Node.css"; 

class Node extends React.Component{
  state = {
    name: this.props.name,
    show: false,
    character: this.props.character,
    edit: false,
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
        <span className="edit" onClick={this.edit}>
          &Xi;
        </span>
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

  renderEdit = () => {
    return (
      <div className="popup" ref={this.refWrapPopup}>
        <span className="cross" onClick={this.changeShow}>
          &times;
        </span>
        <input className="name" type="text" name='value'
          value={ this.state.character.name }
        />
        <textarea className="description" name='value'
          value={ this.state.character.description }
        />
        <div className="img">
          <img src={`./img/${this.state.character.id}.jpg`} alt={this.state.character.id}></img>
        </div>
        <div className="actions">
          <button>Сохранить</button>
          <button>Отменить</button>
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

  handleChange = (e) => {
    if (e.target.name == "name") {

    } 
    this.setState({[e.target.name]: e.target.value})
  }

  addCharacter = () => {
    
  }

  changeShow = () => {
    this.setState({
      show: !this.state.show,
    });
  }

  edit = () => {
    this.setState({
      edit: !this.state.edit,
    })
  }

  render() {
    console.log(this.state.show + " " + this.state.edit);
    return (
      <div className="commonNode">
        <div className="node" ref={this.refWrap}>
          { this.state.character.name }
        </div>
        <button onClick={this.addCharacter}>+</button>
        {
          this.state.show && 
            (this.state.edit 
              ? this.renderEdit()
              : this.renderCharacter()
            )
        }
      </div>
    );
  }
}

export default Node;