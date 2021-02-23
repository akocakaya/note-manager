import _env from 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';

import connectDb from './db';

import { NoteRoute, AuthRoute } from './api/route';

const app = express();

var bodyParserJSON = bodyParser.json();
app.use(bodyParserJSON);

const router = express.Router();

NoteRoute(router);
AuthRoute(router);

app.use(router);

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
