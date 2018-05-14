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

// Home page route.
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

    res.render('pages/index', context);
  } catch (error) {
    console.error(error);
  }
});

router.get('*', (req, res) => {
  res.status(404).send('404');
});

module.exports = router;
