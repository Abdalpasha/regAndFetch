import mongoose from 'mongoose';

// create a schema type User Model:
const UserSchema = new mongoose.Schema({
    sno: {type:Number, required: true},
    name: {type: String, required: true},
    email: {type:String, required: true},
    imageurl: String,
    nofreps: Number
});

export const UserModel = mongoose.model('user', UserSchema);