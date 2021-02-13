import mongoose from 'mongoose';

const connectDb = () => {
    console.log('MongoDb connected');

    return mongoose.connect(
        'mongodb://localhost/note-manager-db', 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }
    )
};

export default connectDb;
