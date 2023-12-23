import { initialState } from './initialState';

class Store {
  constructor(defaultData) {
    this.state = defaultData;
    this.events = Object.keys(initialState);
  }

  get() {
    return this.state;
  }

  set(newState) {
    // Обновляем состояние
    this.state = { ...this.state, ...newState };

    // Уведомляем подписчиков о том, что состояние изменилось
    Object.keys(newState).forEach((eventName) => {
      window.dispatchEvent(new CustomEvent(eventName, { detail: this.state }));
    });
  }
}

export default new Store(initialState);
