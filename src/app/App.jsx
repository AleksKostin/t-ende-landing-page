import React from 'react';
import MainPage from 'pages/MainPage/MainPage';
import ServicesPage from 'pages/ServicesPage/ServicesPage';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import AboutPage from 'pages/AboutPage/AboutPage';
import ArticlesPage from 'pages/ArticlesPage/ArticlesPage';
import Spinner from 'components/Spinner/Spinner';
import ContactPage from 'pages/ContactPage/ContactPage';
import routes from 'config/routeConfig/routeConfig';
import useLocale from 'hooks/useLocale';
import Layout from 'layouts/Layout';
import ServiceDetailsPage from 'pages/ServiceDetailsPage/ServiceDetailsPage';
import ArticleDetailsPage from 'pages/ArticleDetailsPage/ArticleDetailsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const App = () => {
  const localeData = useLocale();

  const checkPageId = (data, id) => {
    const currentItem = data.find((item) => (
      item.id === id
    ));

    if (!currentItem) {
      throw new Response('Not Found', { status: 404 });
    }

    return null;
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route
        path={routes.mainPath}
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
        path={`${routes.articlePath}:id`}
        errorElement={<NotFoundPage />}
        loader={({ params }) => checkPageId(localeData.articlesPage.articles, params.id)}
        element={(
          <ArticleDetailsPage data={localeData.articlesPage} />
        )}
      />
      <Route
        path={`${routes.servicePath}:id`}
        errorElement={<NotFoundPage />}
        loader={({ params }) => checkPageId(localeData.servicesPage.blocks, params.id)}
        element={(
          <ServiceDetailsPage data={localeData.servicesPage} />
        )}
      />
      <Route
        path="*"
        element={(
          <NotFoundPage />
        )}
      />
    </Route>,
  ));

  return (
    localeData?.mainPage
      ? <RouterProvider router={router} />
      : <Spinner positionFixedCenter />
  );
};

export default App;
