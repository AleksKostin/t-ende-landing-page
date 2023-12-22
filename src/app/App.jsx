import {
  Suspense,
  useEffect,
  useState,
  useReducer,
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
import JsonDataRu from '../data/dataRu.json';
import JsonDataEn from '../data/dataEn.json';

const initialState = { lang: 'ru' };

const reducer = (state, action) => {
  switch (action.type) {
    case 'ru':
      return { lang: 'ru' };
    case 'en':
      return { lang: 'en' };
    default:
      return state;
  }
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.lang === 'ru') {
      setLandingPageData(JsonDataRu);
    } else {
      setLandingPageData(JsonDataEn);
    }
  }, [state]);

  return (
    landingPageData
      ? (
        <div>
          <Suspense fallback={<Spinner positionFixedCenter />}>
            <Navbar onDispatch={dispatch} />
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
