import type { Component } from 'solid-js';
import { For } from 'solid-js';

const projects = [
  {
    name: 'chessu',
    url: 'https://github.com/nizewn/chessu',
    description:
      'An online multiplayer chess site built with React, Next.js, Express/Node.js, and socket.io.'
  },
  {
    name: 'Dodong',
    url: 'https://github.com/nizewn/Dodong',
    description: 'A music bot for the Discord chat platform built with discord.js and Node.'
  },
  {
    name: 'moodle-scrape',
    url: 'https://github.com/nizewn/moodle-scrape',
    description:
      'A simple Node.js package for scraping student data and resources from Moodle LMS sites.'
  }
];

const Projects: Component = () => {
  return (
    <For each={projects}>
      {(p, i) => (
        <div class={i() === projects.length - 1 ? '' : 'space-bottom'}>
          <p>
            <a class="link" href={p.url} target="_blank">
              {p.name}
            </a>
          </p>
          <p>{p.description}</p>
        </div>
      )}
    </For>
  );
};

export default Projects;
