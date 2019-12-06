import express from "express";

import { UserController } from "../controller/userController";

export class Routes{
    public static configRoutes(app:express.Application){
        app.get('/', (req: express.Request, res: express.Response) => {
            res.json({"success": "server is up and running!"})
        });
        let userObjCont = new UserController();
        app.post('/registeruser', userObjCont.RegisterUser);
        app.get('/getallusers', userObjCont.getAllUsers);
        app.get('/getuser/:sno', userObjCont.getUserByID);
        app.put('/updateuser/:sno', userObjCont.updateUser);
        app.delete('/deleteuser/:sno', userObjCont.deleteUser);
    }
}