import {
  Suspense,
  useContext,
  useEffect,
  useState,
} from 'react';
import Navbar from 'components/Navbar/Navbar';
import MainPage from 'pages/MainPage/MainPage';
import ServicesPage from 'pages/ServicesPage/ServicesPage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from 'pages/AboutPage/AboutPage';
import ArticlesPage from 'pages/ArticlesPage/ArticlesPage';
import Spinner from 'components/Spinner/Spinner';
import ContactPage from 'pages/ContactPage/ContactPage';
import Footer from 'components/Footer/Footer';
import ArticleDetailsPage from 'pages/ArticleDetailsPage/ArticleDetailsPage';
import routs from 'config/routeConfig/routeConfig';
import ServiceDetailsPage from 'pages/ServiceDetailsPage/ServiceDetailsPage';
import { I18nContext } from 'react-i18next';
import JsonDataRu from '../data/dataRu.json';
import JsonDataEn from '../data/dataEn.json';

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const { i18n } = useContext(I18nContext);

  useEffect(() => {
    const handleLanguageChange = () => {
      if (i18n.language === 'ru') {
        setLandingPageData(JsonDataRu);
      } else {
        setLandingPageData(JsonDataEn);
      }
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    landingPageData
      ? (
        <div>
          <Suspense fallback={<Spinner positionFixedCenter />}>
            <Navbar />
            <Routes>
              <Route
                path={routs.mainPath}
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
                path={`${routs.articlePath}:id`}
                element={(
                  <Suspense fallback={<Spinner positionFixedCenter />}>
                    <ArticleDetailsPage data={landingPageData.articlesPage} />
                  </Suspense>
                  )}
              />
              <Route
                path={`${routs.servicePath}:id`}
                element={(
                  <Suspense fallback={<Spinner positionFixedCenter />}>
                    <ServiceDetailsPage data={landingPageData.servicesPage} />
                  </Suspense>
                  )}
              />
            </Routes>
            <Footer data={landingPageData.footer} />
          </Suspense>
        </div>
      ) : <Spinner positionFixedCenter />
  );
};

export default App;
