import React, {
  Suspense,
} from 'react';
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
import routs from 'config/routeConfig/routeConfig';
import useLocale from 'hooks/useLocale';
import Layout from 'layouts/Layout';
import { ServiceDetailsPageAsync } from 'pages/ServiceDetailsPage/ServiceDetailsPage.async';
import { ArticleDetailsPageAsync } from 'pages/ArticleDetailsPage/ArticleDetailsPage.async';
import { NotFoundPageAsync } from 'pages/NotFoundPage/NotFoundPage.async';

const App = () => {
  const localeData = useLocale();

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
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
        errorElement={<NotFoundPageAsync positionFixedCenter />}
        loader={({ params }) => {
          const items = localeData.articlesPage.articles;
          const article = items.find((item) => (
            item.id === params.id
          ));

          if (!article) {
            throw new Response('Not Found', { status: 404 });
          }

          return null;
        }}
        element={(
          <Suspense fallback={<Spinner positionCenter />}>
            <ArticleDetailsPageAsync data={localeData.articlesPage} />
          </Suspense>
        )}
      />
      <Route
        path={`${routs.servicePath}:id`}
        errorElement={<NotFoundPageAsync />}
        loader={({ params }) => {
          const items = localeData.servicesPage.blocks;
          const block = items.find((item) => (
            item.id === params.id
          ));

          if (!block) {
            throw new Response('Not Found', { status: 404 });
          }

          return null;
        }}
        element={(
          <Suspense fallback={<Spinner positionFixedCenter />}>
            <ServiceDetailsPageAsync data={localeData.servicesPage} />
          </Suspense>
        )}
      />
      <Route
        path="*"
        element={(
          <Suspense fallback={<Spinner positionFixedCenter />}>
            <NotFoundPageAsync />
          </Suspense>
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
