import { lazy } from 'solid-js';
import NotFound from './routes/404';
import Home from './routes/Home';

const routes = [
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/projects',
    component: lazy(() => import('./routes/Projects'))
  },
  {
    path: '/chat',
    component: lazy(() => import('./routes/Chat'))
  }
];

export default routes;
