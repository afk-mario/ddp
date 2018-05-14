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

function formatBytes(bytes, decimals) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const num = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
  return `${num} ${sizes[i]}`;
}

router.get('/', async (req, res) => {
  try {
    const podcastRequest = await got(API_SINGLE, { json: true });
    const listRequest = await got(API_LIST, { json: true });
    const podcast = podcastRequest.body;
    const list = listRequest.body.reverse().map(episode =>
      Object.assign(episode, {
        md: md.render(episode.text),
        frmtDateMobile: new Date(episode.dateCreated).toLocaleDateString(
          'es-mx',
          {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
          },
        ),
        frmtDateDesktop: new Date(episode.dateCreated).toLocaleDateString(
          'es-mx',
          {
            year: '2-digit',
            month: 'short',
            day: '2-digit',
          },
        ),
        frmtSize: formatBytes(episode.audio_size),
      }),
    );
    const single = list[0];
    const context = { ...DEFAULT_META, podcast, list, single };

    context.title = podcast.title;
    context.description = podcast.small_text;

    res.render('pages/home', context);
  } catch (error) {
    console.error(error);
  }
});

router.get('/episodio/:episodeSlug', async (req, res) => {
  try {
    const podcastRequest = await got(API_SINGLE, { json: true });
    const listRequest = await got(API_LIST, { json: true });
    const podcast = podcastRequest.body;
    const list = listRequest.body.reverse().map(episode =>
      Object.assign(episode, {
        md: md.render(episode.text),
        frmtDateMobile: new Date(episode.dateCreated).toLocaleDateString(
          'es-mx',
          {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
          },
        ),
        frmtDateDesktop: new Date(episode.dateCreated).toLocaleDateString(
          'es-mx',
          {
            year: '2-digit',
            month: 'short',
            day: '2-digit',
          },
        ),
        frmtSize: formatBytes(episode.audio_size),
      }),
    );
    const single = list.find(
      episode => episode.slug === req.params.episodeSlug,
    );

    if (!single) {
      res.status(404);

      // respond with html page
      if (req.accepts('html')) {
        const context = { ...DEFAULT_META, podcast, url: req.url };
        res.render('pages/404', context);
        return;
      }

      // respond with json
      if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
      }

      // default to plain-text. send()
      res.type('txt').send('Not found');
      return;
    }

    const context = { ...DEFAULT_META, podcast, list, single };

    context.title = single.title;
    context.description = single.small_text;
    context.preview_url = single.image;

    res.render('pages/episode', context);
  } catch (error) {
    console.error(error);
  }
});

router.get('/acerca-de', async (req, res) => {
  const podcastRequest = await got(API_SINGLE, { json: true });
  const podcast = podcastRequest.body;
  podcast.md = md.render(podcast.text);

  const context = { ...DEFAULT_META, podcast };
  res.render('pages/about', context);
});

router.get('*', async (req, res) => {
  res.status(404);
  const podcastRequest = await got(API_SINGLE, { json: true });
  const podcast = podcastRequest.body;

  // respond with html page
  if (req.accepts('html')) {
    const context = { ...DEFAULT_META, podcast, url: req.url };
    res.render('pages/404', context);
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

module.exports = router;
