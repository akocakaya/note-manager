import express from 'express';
import mongoose from 'mongoose';

import User from './models/user';

const app = express();

mongoose.connect('mongodb://localhost/note-manager-db', {useNewUrlParser: true, useUnifiedTopology: true})
.then(
    app.listen(3001, () => {
        console.log('MongoDb connected');
        console.log('Note manager app listening on port 3001');
    })
).catch(err => {
    console.log(err);
});

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/user/save', async (req, res) => {
    const exampleUser = new User({
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
