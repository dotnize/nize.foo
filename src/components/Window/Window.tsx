import type { ParentComponent } from 'solid-js';
import { createMemo } from 'solid-js';
import { useLocation } from '@solidjs/router';

import './Window.css';
import Nav from '../Nav/Nav';
import Input from '../Input/Input';

const Window: ParentComponent = (props) => {
  const location = useLocation();
  const route = createMemo(() => location.pathname.slice(1));

  return (
    <div class="window">
      <div class="titlebar">
        nize.ph
        <div class="titlebar-buttons close" />
        <div class="titlebar-buttons max" />
        <div class="titlebar-buttons min" />
      </div>
      <section class="content">
        <span class="cmd">ls</span>
        <Nav />
        <span class="cmd">{route() === 'chat' ? `./chat.sh` : `cat ${route() || 'home'}.txt`}</span>

        {props.children}

        {route() === 'chat' ? null : <Input />}
      </section>
    </div>
  );
};

export default Window;
