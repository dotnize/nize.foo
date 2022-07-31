import { lazy } from 'solid-js';

const routes = [
  {
    path: '*',
    component: lazy(() => import('./routes/404'))
  },
  {
    path: '/',
    component: lazy(() => import('./routes/Home'))
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
