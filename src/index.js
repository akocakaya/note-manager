import express from 'express';
import bodyParser from 'body-parser';

import connectDb from './db';

import { NoteRoute, UserRoute } from './api/route';

const app = express();

var bodyParserJSON = bodyParser.json();
app.use(bodyParserJSON);

const router = express.Router();

NoteRoute(router);
UserRoute(router);

app.use(router);

connectDb().then(
    app.listen(3001, () => {
        console.log('Note manager app listening on port 3001');
    })
).catch(err => {
    console.log(err);
});

app.get('/', (_req, res) => {
    res.send('Hello world');
});
