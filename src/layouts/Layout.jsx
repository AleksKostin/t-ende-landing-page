import React, {
  Suspense,
} from 'react';
import Navbar from 'components/Navbar/Navbar';
import {
  Outlet,
} from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';
import Footer from 'components/Footer/Footer';
import useLocale from 'hooks/useLocale';

const Layout = () => {
  const localeData = useLocale();

  return (
    <Suspense fallback={<Spinner positionFixedCenter />}>
      <Navbar />
      <Outlet />
      <Footer data={localeData.footer} />
    </Suspense>
  );
};

export default Layout;
