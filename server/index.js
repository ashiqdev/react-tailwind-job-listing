const express = require('express');
const data = require('./data.json');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ jobs: data });
});

const PORT = 7777;

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
