import { Suspense, useEffect, useState } from 'react';
import Navbar from 'components/Navbar/Navbar';
import MainPage from 'pages/MainPage/MainPage';
import JsonData from 'data/data.json';
import ServicesPage from 'pages/ServicesPage/ServicesPage';
import { BrowserRouter } from 'react-router-dom';
import AboutPage from 'pages/AboutPage/AboutPage';

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Navbar />
        <MainPage data={landingPageData.mainPage} />
        <ServicesPage data={landingPageData.servicesPage} />
        <AboutPage data={landingPageData.aboutPage} />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
