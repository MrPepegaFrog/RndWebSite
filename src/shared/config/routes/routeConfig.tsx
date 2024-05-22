import { AboutPage } from '@/pages/aboutPage';
import { CareerPage } from '@/pages/career';
import { CasePage } from '@/pages/casePage';
import { CaseSinglePage } from '@/pages/caseSinglePage';
import { ContactPage } from '@/pages/contactPage';
import { MainPage } from '@/pages/mainPage';
import { NotFoundPage } from '@/pages/notFoundPage';
import { PressCenterPage } from '@/pages/pressCenterPage';

export enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
  CASE = 'case',
  CASE_SINGLE = 'case_single',
  PRESS_CENTER = 'press_center',
  CONTACTS = 'contacts',
  CAREER = 'career',
  NOT_FOUND = 'not_found'
}

export const routePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: '/about',
  [AppRoute.CASE]: '/case',
  [AppRoute.CASE_SINGLE]: '/case/:id',
  [AppRoute.PRESS_CENTER]: '/pressCenter',
  [AppRoute.CONTACTS]: '/contacts',
  [AppRoute.CAREER]: '/career',
  [AppRoute.NOT_FOUND]: '*'
};

const NAME_ROUTES: Record<string, string> = {
  [routePath[AppRoute.MAIN]]: 'ГЛАВНАЯ',
  [routePath[AppRoute.ABOUT]]: 'О КОМПАНИИ',
  [routePath[AppRoute.CASE]]: 'КЕЙСЫ',
  [routePath[AppRoute.PRESS_CENTER]]: 'ПРЕСС-ЦЕНТР',
  [routePath[AppRoute.CONTACTS]]: 'КОНТАКТЫ',
  [routePath[AppRoute.CAREER]]: 'КАРЬЕРА'
};

interface RouteType {
  path: (typeof routePath)[AppRoute];
  element: JSX.Element;
  name: string;
}

export const pageRoutes: Array<Omit<RouteType, 'name'>> = [
  {
    path: routePath[AppRoute.MAIN],
    element: <MainPage />
  },
  {
    path: routePath[AppRoute.ABOUT],
    element: <AboutPage />
  },
  {
    path: routePath[AppRoute.CASE],
    element: <CasePage />
  },
  {
    path: routePath[AppRoute.CASE_SINGLE],
    element: <CaseSinglePage />
  },
  {
    path: routePath[AppRoute.CAREER],
    element: <CareerPage />
  },
  {
    path: routePath[AppRoute.PRESS_CENTER],
    element: <PressCenterPage />
  },
  {
    path: routePath[AppRoute.CONTACTS],
    element: <ContactPage />
  },
  {
    path: routePath[AppRoute.NOT_FOUND],
    element: <NotFoundPage />
  }
];

export const routes: RouteType[] = pageRoutes
  .filter(
    ({ path }) => path !== routePath[AppRoute.NOT_FOUND] && path !== routePath[AppRoute.CASE_SINGLE]
  )
  .map((data) => ({
    ...data,
    name: NAME_ROUTES[data.path]
  }));
