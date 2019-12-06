import express from 'express';

import { UserModel } from '../dbModel/userModel';

export class UserServices{
    // register user and save it in DB:
    public static async RegisterUser(req: express.Request, res: express.Response){
        try{
            let newUser = new UserModel(req.body);
            await newUser.save();
            return newUser;
        }catch(err){
            console.log(err);
            return err;
        };
    };

    // get all users:
    public static async getAllUSers(req: express.Request, res: express.Response){
        try{
            let allUsers = await UserModel.find().exec();
            return allUsers;
        } catch (err) {
            console.log(err);
            return err;
        };
    };


    // get user by Serial No:
    public static async getUser(req: express.Request, res: express.Response){
        try{
            let searchUser = await UserModel.findOne({sno: req.params.sno}).exec();
            return searchUser;
        }catch(err){
            return err;
        };
    };


    // update user by Serial No:
    public static async updateUser(req: express.Request, res: express.Response){
        try{
            let userItem: any = await UserModel.findOneAndUpdate({sno: req.params.sno}, req.body).exec();
            return userItem;
        } catch(err){
            console.log(err);
            return err;
        };
    };

    // delete User by Serial No:
    public static async deleteUser(req: express.Request, res: express.Response){
        try{
            let deletedUser = await UserModel.findOneAndDelete({sno: req.params.sno}).exec();
            return deletedUser
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}