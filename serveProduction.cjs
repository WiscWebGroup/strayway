const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 7890

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => console.log(`Running on PORT ${PORT}`));
