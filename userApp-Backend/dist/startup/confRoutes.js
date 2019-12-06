"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userController_1 = require("../controller/userController");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.configRoutes = function (app) {
        app.get('/', function (req, res) {
            res.json({ "success": "server is up and running!" });
        });
        var userObjCont = new userController_1.UserController();
        app.post('/registeruser', userObjCont.RegisterUser);
        app.get('/getallusers', userObjCont.getAllUsers);
        app.get('/getuser/:sno', userObjCont.getUserByID);
        app.put('/updateuser/:sno', userObjCont.updateUser);
        app.delete('/deleteuser/:sno', userObjCont.deleteUser);
    };
    return Routes;
}());
exports.Routes = Routes;
