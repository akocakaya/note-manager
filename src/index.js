import _env from 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';

import connectDb from './db';

import Routes from './api/route';

const app = express();

var bodyParserJSON = bodyParser.json();
app.use(bodyParserJSON);

const router = express.Router();

Routes(router);

app.use('/api', router);

connectDb().then(
    app.listen(process.env.EXPRESS_PORT, () => {
        console.log(`Note manager app listening on port ${process.env.EXPRESS_PORT}`);
    })
).catch(err => {
    console.log(err);
});

app.get('/', (_req, res) => {
    res.send('Hello world');
});
