import { Suspense, useEffect, useState } from 'react';
import Navbar from 'components/Navbar/Navbar';
import MainPage from 'pages/MainPage/MainPage';
import JsonData from 'data/data.json';
import ServicesPage from 'pages/ServicesPage/ServicesPage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from 'pages/AboutPage/AboutPage';
import ArticlesPage from 'pages/ArticlesPage/ArticlesPage';
import Spinner from 'components/Spinner/Spinner';
import ContactPage from 'pages/ContactPage/ContactPage';
import Footer from 'components/Footer/Footer';
import ArticleDetailsPage from 'pages/ArticleDetailsPage/ArticleDetailsPage';

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Suspense fallback={<Spinner positionFixedCenter />}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <MainPage data={landingPageData.mainPage} />
                <ServicesPage data={landingPageData.servicesPage} />
                <AboutPage data={landingPageData.aboutPage} />
                <ArticlesPage data={landingPageData.articlesPage} />
                <ContactPage data={landingPageData.contactPage} />
              </>
            )}
          />
          <Route
            path="/article/:id"
            element={(
              <Suspense fallback={<Spinner positionFixedCenter />}>
                <ArticleDetailsPage data={landingPageData.articlesPage} />
              </Suspense>
            )}
          />
        </Routes>
        <Footer data={landingPageData.footer} />
      </Suspense>
    </div>
  );
};

export default App;
