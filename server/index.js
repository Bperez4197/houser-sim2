const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');


const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db',db);
    console.log('connected to db');
}).catch(err => console.log(err));

app.get('/api/houses' , controller.read);
app.post('/api/house', controller.add_house);
app.delete('/api/house/:id', controller.delete);






const port = process.env.SERVER_PORT || 4000;
app.listen(port, () => console.log(`server is running on port ${port}`));