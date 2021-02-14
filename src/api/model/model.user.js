import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: {
            type     : String,
            unique   : [ true, 'Username must be unique.' ],
            required : [ true, 'The username field is required.' ],
        },
        password: {
            type      : String,
            minlength : 6,
            trim      : true,
        }
    },
    {
        timestamps: true
    }
);

const userModel = mongoose.model('user', userSchema);
export default userModel;
