import type { Component } from 'solid-js';
import { For } from 'solid-js';

const projects = [
  {
    name: 'Dodong',
    url: 'https://github.com/nizeic/Dodong',
    description: 'A music bot for the Discord chat platform built with discord.js and Node.'
  },
  {
    name: 'moodle-scrape',
    url: 'https://github.com/nizeic/moodle-scrape',
    description:
      'A simple Node.js package for scraping student data and resources from Moodle LMS sites.'
  },
  {
    name: 'chessu',
    url: 'https://github.com/nizeic/chessu',
    description:
      'An online multiplayer chess site built on React and Express/Node.js with socket.io.'
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
