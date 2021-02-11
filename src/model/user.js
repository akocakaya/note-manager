import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        }
    },
    {
        timestamps: true
    }
);

export default userSchema;
