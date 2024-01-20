import {
  Suspense,
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
import useLocale from 'hooks/useLocale';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import useFooterHeight from 'hooks/useFooterHeight';

const App = () => {
  const localeData = useLocale();
  const { footerHeight, ref } = useFooterHeight();

  return (
    localeData?.mainPage
      ? (
        <div>
          <Suspense fallback={<Spinner positionFixedCenter />}>
            <Navbar />
            <Routes>
              <Route
                path={routs.mainPath}
                element={(
                  <>
                    <MainPage data={localeData.mainPage} />
                    <ServicesPage data={localeData.servicesPage} />
                    <AboutPage data={localeData.aboutPage} />
                    <ArticlesPage data={localeData.articlesPage} />
                    <ContactPage data={localeData.contactPage} />
                  </>
                  )}
              />
              <Route
                path={`${routs.articlePath}:id`}
                element={(
                  <Suspense fallback={<Spinner positionFixedCenter />}>
                    <ArticleDetailsPage data={localeData.articlesPage} />
                  </Suspense>
                  )}
              />
              <Route
                path={`${routs.servicePath}:id`}
                element={(
                  <Suspense fallback={<Spinner positionFixedCenter />}>
                    <ServiceDetailsPage data={localeData.servicesPage} />
                  </Suspense>
                  )}
              />
              <Route path="*" element={<NotFoundPage footerHeight={footerHeight} />} />
            </Routes>
            <Footer data={localeData.footer} ref={ref} />
          </Suspense>
        </div>
      ) : <Spinner positionFixedCenter />
  );
};

export default App;
