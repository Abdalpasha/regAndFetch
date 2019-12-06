import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';   
import path, { dirname } from 'path';

import { Routes } from './startup/confRoutes';
import { DB } from './startup/dbConfig';



class DisplayUser{
    app: express.Application;
    constructor(){

        // configure express:
        this.app = express();
        const port = Number(process.env.PORT) || 3000
        this.app.listen(port, "localhost", () => {
            console.log(`server is configured on port: ${port}`);
        });

        this.app.use(express.static(path.join(__dirname, '../../dist')));

        // configuring CORS :
        this.app.use(cors())    

        // configuring Body-Parser:
        this.configBodyParser();
        
        this.app.get('*', (req: express.Request, res: express.Response) => {
            res.sendFile(path.join(__dirname ));
        });


        // configuring the API's:
        Routes.configRoutes(this.app);
        
        // DB configuration:
        DB.connectToDb();
    }
    configBodyParser(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }
}

const disUser = new DisplayUser();