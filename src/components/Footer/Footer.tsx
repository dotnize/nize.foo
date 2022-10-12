import type { Component } from 'solid-js';

import './Footer.css';

import mail from '../../assets/footer/email.svg';
import github from '../../assets/footer/github.svg';
import gitlab from '../../assets/footer/gitlab.svg';
import linkedin from '../../assets/footer/linkedin.svg';
import twitter from '../../assets/footer/twitter.svg';

const Footer: Component = () => {
  return (
    <footer>
      <a href="mailto:contact@nize.ph" title="Email">
        <img src={mail} alt="Email" />
      </a>
      <a href="https://github.com/nizewn" title="GitHub" target="_blank">
        <img src={github} alt="GitHub" />
      </a>
      <a href="https://gitlab.com/nizewn" title="GitLab" target="_blank">
        <img src={gitlab} alt="GitLab" />
      </a>
      <a href="https://linkedin.com/in/nize" title="LinkedIn" target="_blank">
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a href="https://twitter.com/nizewn" title="Twitter" target="_blank">
        <img src={twitter} alt="Twitter" />
      </a>
      <br />
      nize &#169; 2022
    </footer>
  );
};

export default Footer;
