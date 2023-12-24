import { initialState } from './initialState';

class Store {
  constructor(defaultData) {
    this.state = defaultData;
    this.updateEvent = 'updateStore';
  }

  get() {
    return this.state;
  }

  set(newState) {
    // Обновляем состояние
    this.state = { ...this.state, ...newState };

    // Уведомляем подписчиков о том, что состояние изменилось
    window.dispatchEvent(new CustomEvent(this.updateEvent, { detail: this.state }));
  }
}

export default new Store(initialState);
