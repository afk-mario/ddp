exports.API_ROOT = 'https://api.ellugar.co/';
exports.API_URL = `${exports.API_ROOT}podcast/json/`;
exports.API_SINGLE = `${exports.API_URL}podcast/1/`;
exports.API_LIST = `${exports.API_URL}episodes/detras-del-pixel/`;
exports.API_BLOG_LIST = `${
  exports.API_ROOT
}diary/posts/?tags__name=detras-del-pixel`;

exports.DEFAULT_META = {
  title: 'Detrás del Pixel',
  description: 'Sitio web para detrás del pixel',
  preview_url: 'https://detrasdelpixel.com/img/preview.jpg',
};
