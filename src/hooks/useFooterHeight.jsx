import {
  useEffect,
  useState,
  useRef,
} from 'react';

const useFooterHeight = () => {
  const [footerHeight, setFooterHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const newHeight = ref.current.offsetHeight;
        setFooterHeight(newHeight);
      }
    };

    updateHeight();

    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [ref]);

  return { footerHeight, ref };
};

export default useFooterHeight;
