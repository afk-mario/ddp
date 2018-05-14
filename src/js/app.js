import ready from 'document-ready';

import ScrollVariable from './scroll-variable/';
import './style';

const initScrolls = () => {
  const headerFallback = `
    background: rgba(255, 255, 255, var(--header-background-opacity));
  `;

  const navFallback = `
    opacity: --nav-opacity;
  `;

  const footerFallback = `
    transform: translateY(var(--footer-position));
  `;

  const headerScroll = new ScrollVariable({
    selector: '#header',
    from: '350',
    to: '450',
    fallbackStyle: headerFallback,
    props: {
      '--header-background-opacity': {
        from: '0.0',
        to: '1.0',
      },
    },
  });

  const navScroll = new ScrollVariable({
    selector: '#header nav',
    from: '450',
    to: '500',
    fallbackStyle: navFallback,
    props: {
      '--nav-opacity': {
        from: '0.0',
        to: '1.0',
      },
    },
  });

  const footerScroll = new ScrollVariable({
    selector: '#footer',
    from: '350',
    to: '450',
    fallbackStyle: footerFallback,
    props: {
      '--footer-position': {
        from: '100%',
        to: '0%',
      },
    },
  });

  headerScroll.init();
  navScroll.init();
  footerScroll.init();
};

const handleClick = (e, node) => {
  if (node.classList.contains('active')) return;

  e.preventDefault();
  const active = document.querySelector('.active');
  if (active) {
    active.classList.remove('active');
  }

  node.classList.add('active');
  node.scrollIntoView({
    behavior: 'instant',
    block: 'start',
    inline: 'end',
  });
  window.scrollBy(0, -75);
};

ready(() => {
  initScrolls();

  const episodes = Array.from(document.querySelectorAll('.episode-single'));
  episodes.forEach(node => {
    const elCover = node.querySelector('.episode-cover');
    const elTitle = node.querySelector('.episode-title');
    elCover.addEventListener('click', e => {
      handleClick(e, node);
    });
    elTitle.addEventListener('click', e => {
      handleClick(e, node);
    });
  });
});
