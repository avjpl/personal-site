import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import About from '../components/About';

export const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: Portfolio,
    path: '/portfolio',
    exact: true,
  },
  {
    component: About,
    path: '/about',
    exact: true,
  },
];
