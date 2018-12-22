import { observable } from 'mobx';

class Store {
  @observable characters;

  constructor(characters) {
    this.characters = characters;
  }

  initializeStore = (characters) => {
    this.characters = characters;
  }
}

export default Store;