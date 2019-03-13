require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

app.enable('trust proxy');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.set('port', process.env.PORT || 8888);

const server = app.listen(app.get('port'), () => {
  console.log(`🚀 API server running on port ${server.address().port}`);
});
