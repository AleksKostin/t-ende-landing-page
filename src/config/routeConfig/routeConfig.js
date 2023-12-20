import { ROOT_PATH } from '../global';

export default {
  mainPath: [`${ROOT_PATH}/`].join(),
  servicesPath: [ROOT_PATH, '#services-page'].join('/'),
  articlesPath: [ROOT_PATH, '#articles-page'].join('/'),
  aboutPath: [ROOT_PATH, '#about-page'].join('/'),
  contactPath: [ROOT_PATH, '#contact-page'].join('/'),
  articlePath: [ROOT_PATH, 'article/'].join('/'),
};
