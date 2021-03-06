const express = require('express');
const { getUsername } = require('./user');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => {
  const { username } = req.query;
  return res.send({ username: username || getUsername() });
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
