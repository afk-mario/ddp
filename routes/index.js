/* eslint no-console: ["error", { allow: ["info", "error"] }] */

const express = require('express');
const got = require('got');
const Remarkable = require('remarkable');

const md = new Remarkable();

const router = express.Router();
const API_URL = 'https://api.ellugar.co/podcast/json/';
const API_SINGLE = `${API_URL}podcast/1/`;
const API_LIST = `${API_URL}episodes/detras-del-pixel/`;
const DEFAULT_META = {
  title: 'Detrás del Pixel',
  description: 'Sitio web para detrás del pixel',
  preview_url: 'https://detrasdelpixel.com/preview.png',
};

// Home page route.
router.get('/', async (req, res) => {
  try {
    const podcastRequest = await got(API_SINGLE, { json: true });
    const listRequest = await got(API_LIST, { json: true });
    const podcast = podcastRequest.body;
    const list = listRequest.body
      .reverse()
      .map(episode => Object.assign(episode, { md: md.render(episode.text) }));
    const single = list[0];
    const context = { ...DEFAULT_META, podcast, list, single };

    context.title = podcast.title;
    context.description = podcast.small_text;

    res.render('pages/index', context);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
