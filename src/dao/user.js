import mongoose from 'mongoose';
import userSchema from '../model/user';

userSchema.statics = {
    create: (data, cb) => {
        const user = new mongoose.model('User')(data);
        user.save(cb);
    },

    get: (query, cb) => {
        mongoose.model('User').find(query, cb);
    },

    updateUser: (query, updateData, cb) => {
        mongoose.model('User').findAndUpdate(query, {$set: updateData}, {new: true}, cb);
    }
}

const userModel = mongoose.model('User', userSchema);

export default userModel;
