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
        <img src={mail} alt="Email" width={25} height={25} />
      </a>
      <a href="https://github.com/nizewn" title="GitHub" target="_blank">
        <img src={github} alt="GitHub" width={25} height={25} />
      </a>
      <a href="https://gitlab.com/nizewn" title="GitLab" target="_blank">
        <img src={gitlab} alt="GitLab" width={25} height={25} />
      </a>
      <a href="https://linkedin.com/in/nize" title="LinkedIn" target="_blank">
        <img src={linkedin} alt="LinkedIn" width={25} height={25} />
      </a>
      <a href="https://twitter.com/nizewn" title="Twitter" target="_blank">
        <img src={twitter} alt="Twitter" width={25} height={25} />
      </a>
      <br />
      nize &#169; {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
