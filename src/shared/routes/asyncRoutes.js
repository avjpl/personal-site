import { AsyncComponent } from '../components/utils';

export const routes = [
  {
    component: AsyncComponent(() => System.import('../components/Home')),
    path: '/',
    exact: true,
  },
  {
    component: AsyncComponent(() => System.import('../components/Portfolio')),
    path: '/portfolio',
    exact: true,
  },
  {
    component: AsyncComponent(() => System.import('../components/About')),
    path: '/about',
    exact: true,
  },
];
