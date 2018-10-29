/* eslint no-console: ["error", { allow: ["info", "error"] }] */

const express = require('express');
const got = require('got');
const Remarkable = require('remarkable');
const truncate = require('truncate');

const constants = require('../lib/constants');
const formatBytes = require('../lib/utils');
const sitemap = require('../lib/sitemap');

const md = new Remarkable();

const router = express.Router();

const { API_SINGLE, API_LIST, API_BLOG_LIST, DEFAULT_META } = constants;

const dateConfigMobile = {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit',
};

const dateConfigDesktop = {
  year: '2-digit',
  month: 'short',
  day: '2-digit',
};

router.get('/', async (req, res) => {
  try {
    const podcastRequest = await got(API_SINGLE, { json: true });
    const listRequest = await got(API_LIST, { json: true });
    const podcast = podcastRequest.body;
    const list = listRequest.body.reverse().map(item =>
      Object.assign(item, {
        md: md.render(item.text),
        frmtDateMobile: new Date(item.dateCreated).toLocaleDateString(
          'es-mx',
          dateConfigMobile,
        ),
        frmtDateDesktop: new Date(item.dateCreated).toLocaleDateString(
          'es-mx',
          dateConfigDesktop,
        ),
        frmtSize: formatBytes(item.audio_size),
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

router.get('/episodio/:slug', async (req, res) => {
  try {
    const podcastRequest = await got(API_SINGLE, { json: true });
    const listRequest = await got(API_LIST, { json: true });
    const podcast = podcastRequest.body;
    const list = listRequest.body.reverse().map(item =>
      Object.assign(item, {
        md: md.render(item.text),
        frmtDateMobile: new Date(item.dateCreated).toLocaleDateString(
          'es-mx',
          dateConfigMobile,
        ),
        frmtDateDesktop: new Date(item.dateCreated).toLocaleDateString(
          'es-mx',
          dateConfigDesktop,
        ),
        frmtSize: formatBytes(item.audio_size),
      }),
    );
    const single = list.find(item => item.slug === req.params.slug);

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

router.get('/faq', async (req, res) => {
  const podcastRequest = await got(API_SINGLE, { json: true });
  const podcast = podcastRequest.body;
  podcast.md = md.render(podcast.faq);

  const context = { ...DEFAULT_META, podcast };
  res.render('pages/faq', context);
});

router.get('/blog', async (req, res) => {
  const podcastRequest = await got(API_SINGLE, { json: true });
  const listRequest = await got(API_BLOG_LIST, { json: true });
  const podcast = podcastRequest.body;
  const list = listRequest.body.map((item, i) =>
    Object.assign(item, {
      md: md.render(truncate(item.text, i === 0 ? 400 : 140)),
      frmtDateMobile: new Date(item.dateCreated).toLocaleDateString(
        'es-mx',
        dateConfigMobile,
      ),
      frmtDateDesktop: new Date(item.dateCreated).toLocaleDateString(
        'es-mx',
        dateConfigDesktop,
      ),
      frmtSize: formatBytes(item.audio_size),
    }),
  );
  podcast.md = md.render(podcast.text);

  const context = { ...DEFAULT_META, podcast, list };
  res.render('pages/article-list', context);
});

router.get('/blog/:slug', async (req, res) => {
  try {
    const podcastRequest = await got(API_SINGLE, { json: true });
    const listRequest = await got(API_BLOG_LIST, { json: true });
    const podcast = podcastRequest.body;
    const list = listRequest.body.map(item =>
      Object.assign(item, {
        md: md.render(item.text),
        frmtDateMobile: new Date(item.dateCreated).toLocaleDateString(
          'es-mx',
          dateConfigMobile,
        ),
        frmtDateDesktop: new Date(item.dateCreated).toLocaleDateString(
          'es-mx',
          dateConfigDesktop,
        ),
      }),
    );

    podcast.md = md.render(podcast.text);
    const single = list.find(article => article.slug === req.params.slug);

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
    context.preview_url = single.mainImage
      ? single.mainImage
      : DEFAULT_META.preview_url;

    res.render('pages/article-single', context);
  } catch (error) {
    console.error(error);
  }
});

router.get('/sitemap.xml', (req, res) => {
  sitemap.toXML((err, xml) => {
    if (err) {
      return res.status(500).end();
    }
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });
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
