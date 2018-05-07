import ready from 'document-ready';

import HeaderGradient from './header-gradient/';
import './style';

ready(() => {
  const header = new HeaderGradient('#header');
  header.init();

  const episodes = Array.from(document.querySelectorAll('.episode-single'));

  const handleClick = e => {
    e.preventDefault();
    const active = document.querySelector('.active');
    if (active) {
      active.classList.remove('active');
    }
    e.currentTarget.classList.add('active');
    e.currentTarget.scrollIntoView({
      behavior: 'instant',
      block: 'start',
      inline: 'end',
    });
    window.scrollBy(0, -50);
  };

  episodes.forEach(node => {
    node.addEventListener('click', handleClick);
  });
});
