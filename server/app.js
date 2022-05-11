const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 4000;

const posts = require('./posts.json');

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.redirect(308, '/posts');
});

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
