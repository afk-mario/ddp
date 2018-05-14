import * as basicScroll from 'basicscroll';

class ScrollVariable {
  constructor({ selector, from, to, props, fallbackStyle }) {
    this.el = document.querySelector(selector);
    this.props = props;
    this.from = from;
    this.to = to;
    this.fallbackStyle = fallbackStyle;
    this.init = this.init.bind(this);
  }

  init() {
    const { el, props, from, to, fallbackStyle } = this;
    el.setAttribute('style', fallbackStyle);

    this.instance = basicScroll.create({
      elem: el,
      from,
      to,
      props,
      direct: true,
    });

    this.instance.start();
  }
}

export default ScrollVariable;
