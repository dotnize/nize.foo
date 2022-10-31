import type { Component } from 'solid-js';
import { A } from '@solidjs/router';

import './Nav.css';

const Nav: Component = () => {
  return (
    <nav class="space-bottom">
      <A href="/" title="home" class="navlink space-right">
        home.txt
      </A>
      <A href="/projects" title="projects" class="navlink space-right">
        projects.txt
      </A>
      <A href="/chat" title="chat" class="navlink">
        chat.sh
      </A>
    </nav>
  );
};

export default Nav;
