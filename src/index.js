import express from 'express';
import mongoose from 'mongoose';

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


