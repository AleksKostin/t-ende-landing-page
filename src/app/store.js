import { initialState } from './initialState';

const storeEvents = { lang: 'updateLocale' };

class Store {
  constructor(defaultData) {
    this.state = defaultData;
    this.events = storeEvents;
  }

  get() {
    return this.state;
  }

  set(newState) {
    // Обновляем состояние
    this.state = { ...this.state, ...newState };

    // Уведомляем подписчиков о том, что состояние изменилось
    Object.keys(newState).forEach((key) => {
      const eventName = storeEvents[key];

      if (eventName) {
        window.dispatchEvent(new CustomEvent(eventName, { detail: this.state }));
      }
    });
  }
}

export default new Store(initialState);
