import type { ParentComponent } from 'solid-js';
import { createMemo } from 'solid-js';
import { useLocation, useNavigate } from '@solidjs/router';

import './Window.css';
import Nav from '../Nav/Nav';
import Input from '../Input/Input';

const Window: ParentComponent = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const route = createMemo(() => location.pathname.slice(1));

  function handleInput(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      // @ts-expect-error e.target is an EventTarget instead of HTMLInputElement
      const input = e.target.value;

      if (input.length === 0) return;

      if (input.includes('home')) {
        navigate('/');
      } else if (input.includes('chat')) {
        navigate('/chat');
      } else if (input.includes('project')) {
        navigate('/projects');
      } else {
        return; // invalid command
      }

      // @ts-expect-error e.target is an EventTarget instead of HTMLInputElement
      e.target.value = '';
    }
  }

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

        {route() === 'chat' ? null : <Input onKeyUp={handleInput} />}
      </section>
    </div>
  );
};

export default Window;
