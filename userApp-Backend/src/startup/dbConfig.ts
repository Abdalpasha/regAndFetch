import mongoose from 'mongoose';

export class DB{
    // configuring the Mongo Db Url:
    private static connectionStr: string= 'mongodb+srv://abdalpasha:abdal123@abdal-s91co.mongodb.net/UserApp?retryWrites=true&w=majority';

    // connecting to Db:
    public static connectToDb(){
        mongoose.connect(this.connectionStr, {useNewUrlParser: true})
        .then(() => console.log('DB connection successfull'))
        .catch((err) => {console.log('DB connection failled'); console.log(err)});
    };
};