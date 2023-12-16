import { Suspense, useEffect, useState } from 'react';
import Navbar from 'components/Navbar/Navbar';
import MainPage from 'pages/MainPage/MainPage';
import JsonData from 'data/data.json';
import ServicesPage from 'pages/ServicesPage/ServicesPage';
import { BrowserRouter } from 'react-router-dom';
import AboutPage from 'pages/AboutPage/AboutPage';
import ArticlesPage from 'pages/ArticlesPage/ArticlesPage';
import Spinner from 'components/Spinner/Spinner';
import ContactPage from 'pages/ContactPage/ContactPage';
import Footer from 'components/Footer/Footer';

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner positionFixedCenter />}>
        <Navbar />
        <MainPage data={landingPageData.mainPage} />
        <ServicesPage data={landingPageData.servicesPage} />
        <AboutPage data={landingPageData.aboutPage} />
        <ArticlesPage data={landingPageData.articlesPage} />
        <ContactPage data={landingPageData.contactPage} />
        <Footer data={landingPageData.footer} />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
