import { useState, useEffect } from 'react';
import Store from '../app/store';

const useStore = () => {
  const [store, updateStore] = useState(Store.get());

  useEffect(() => {
    const handleUpdate = (event) => {
      updateStore(event.detail);
    };

    window.addEventListener(Store.updateEvent, handleUpdate);

    return () => {
      window.removeEventListener(Store.updateEvent, handleUpdate);
    };
  }, []);

  return [store, Store.set.bind(Store)];
};

export default useStore;
