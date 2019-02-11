const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');


const app = express();
app.use(bodyParser.json());











const port = 4000;
app.listen(port, () => `server is running on port ${port}`);