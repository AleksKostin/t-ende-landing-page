import { useState, useEffect } from 'react';
import Store from '../app/store';

const useStore = () => {
  const [store, updateStore] = useState(Store.get());

  useEffect(() => {
    const handleUpdate = (event) => {
      updateStore(event.detail);
    };

    Store.events.forEach((eventName) => {
      window.addEventListener(eventName, handleUpdate);
    });

    return () => {
      Store.events.forEach((eventName) => {
        window.removeEventListener(eventName, handleUpdate);
      });
    };
  }, []);

  return [store, Store.set.bind(Store)];
};

export default useStore;
