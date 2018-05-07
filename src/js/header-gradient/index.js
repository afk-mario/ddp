import * as basicScroll from 'basicscroll';

const gradientBG = `
  background: rgba(255, 255, 255, var(--header-background-opacity));
`;

class HeaderGradient {
  constructor(selector) {
    this.el = document.querySelector(selector);
    this.init = this.init.bind(this);
  }

  init() {
    const { el } = this;
    el.setAttribute('style', gradientBG);

    this.instance = basicScroll.create({
      elem: el,
      from: '350',
      to: '450',
      direct: true,
      props: {
        '--header-background-opacity': {
          from: '0.0',
          to: '1.0',
        },
      },
    });

    this.instanceNav = basicScroll.create({
      elem: document.querySelector('#header nav'),
      from: '450',
      to: '500',
      direct: true,
      props: {
        '--nav-opacity': {
          from: '0.0',
          to: '1.0',
        },
      },
    });

    this.instance.start();
    this.instanceNav.start();
  }
}

export default HeaderGradient;
