import express from 'express';

import { UserServices } from '../services/userServices';

export class UserController{
    public async RegisterUser(req:express.Request, res: express.Response){
        let RegisteredUser = await UserServices.RegisterUser(req, res);
        res.json(RegisteredUser);
    }

    public async getAllUsers(req: express.Request, res: express.Response){
        let users = await UserServices.getAllUSers(req, res);
        res.json(users);
    }

    public async getUserByID(req: express.Request, res: express.Response){
        let user = await UserServices.getUser(req, res);
        res.json(user);
    }

    public async updateUser(req: express.Request, res: express.Response){
        let updatedUser = await UserServices.updateUser(req, res);
        res.json(updatedUser);
    }

    public async deleteUser(req: express.Request, res: express.Response){
        let deletedUser = await UserServices.deleteUser(req, res);
        res.json(deletedUser);
    }
}