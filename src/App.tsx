import type { Component } from 'solid-js';
import { useRoutes } from '@solidjs/router';

import routes from './routes';

import Window from './components/Window/Window';
import Footer from './components/Footer/Footer';

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <div class="wrapper">
      <Window>
        <Routes />
      </Window>
      <Footer />
    </div>
  );
};

export default App;
