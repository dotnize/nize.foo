import { lazy } from 'solid-js';
import Home from './routes/Home';
import Projects from './routes/Projects';

const routes = [
  {
    path: '*',
    component: lazy(() => import('./routes/404'))
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/chat',
    component: lazy(() => import('./routes/Chat'))
  }
];

export default routes;
