import { lazy, Suspense } from 'solid-js';

import Home from './routes/Home';
import Projects from './routes/Projects';

const NotFound = lazy(() => import('./routes/404'));
const Chat = lazy(() => import('./routes/Chat'));

const ChatSuspenseWrapper = () => {
  return (
    <Suspense fallback={<p>$ Loading...</p>}>
      <Chat />
    </Suspense>
  );
};

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
    component: Projects
  },
  {
    path: '/chat',
    component: ChatSuspenseWrapper
  }
];

export default routes;
