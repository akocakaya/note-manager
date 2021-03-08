import mongoose from 'mongoose';

const schema = mongoose.Schema(
    {
        title: String,
        content: String,
        userId: String
    }, 
    { 
        timestamps: true,
        versionKey: '_versionKey'
    }
);

schema.method('toJSON', function() {
    var obj = this.toObject();
    
    obj.id = obj._id;
    delete obj._id;
    delete obj.userId;

    return obj;
});

const noteModel = mongoose.model('note', schema);

export default noteModel;
