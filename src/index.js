import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import connectDb from './db';

import userRoutes from './route/user';

const app = express();

var bodyParserJSON = bodyParser.json();
app.use(bodyParserJSON);

const router = express.Router();




app.use('/api',router);

userRoutes(router);

connectDb().then(
    app.listen(3001, () => {
        console.log('Note manager app listening on port 3001');
    })
).catch(err => {
    console.log(err);
});



app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/user/save', async (req, res) => {
    const exampleUser = new UserModel({
        username: 'testName00'
    });

    const result = await exampleUser.save();

    res.send('Saved ' + result);
});

app.get('/user', async (req, res) => {
    const user = mongoose.model('User');

    const result = await user.find({});

    res.send(result);
});
