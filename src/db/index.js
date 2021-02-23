import mongoose from 'mongoose';

const connectDb = () => {
    console.log('MongoDb connected');

    return mongoose.connect(
        process.env.MONGOOSE_URI, 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }
    )
};

export default connectDb;
