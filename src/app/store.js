import { Locales } from '../components/LangSwitcher/data';

const events = { lang: 'updateLocale' };
const initState = Locales.ru;

class Store {
  constructor(defaultData) {
    this.state = defaultData;
  }

  get() {
    return this.state;
  }

  set(newState) {
    // Обновляем состояние
    this.state = { ...this.state, ...newState };

    // Уведомляем подписчиков о том, что состояние изменилось
    Object.keys(newState).forEach((event) => {
      const eventName = events[event];

      if (eventName) {
        window.dispatchEvent(new CustomEvent(eventName, { detail: this.state }));
      }
    });
  }
}

export default new Store(initState);
