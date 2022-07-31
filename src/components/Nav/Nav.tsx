import type { Component } from 'solid-js';
import { Link } from '@solidjs/router';

import './Nav.css';

const Nav: Component = () => {
  return (
    <nav class="space-bottom">
      <Link href="/" title="home" class="navlink space-right">
        home.txt
      </Link>
      <Link href="/projects" title="projects" class="navlink space-right">
        projects.txt
      </Link>
      <Link href="/chat" title="chat" class="navlink">
        chat.sh
      </Link>
    </nav>
  );
};

export default Nav;
