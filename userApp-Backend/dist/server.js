"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var confRoutes_1 = require("./startup/confRoutes");
var dbConfig_1 = require("./startup/dbConfig");
var DisplayUser = /** @class */ (function () {
    function DisplayUser() {
        // configure express:
        this.app = express_1.default();
        var port = Number(process.env.PORT) || 3000;
        this.app.listen(port, "localhost", function () {
            console.log("server is configured on port: " + port);
        });
        this.app.use(express_1.default.static(path_1.default.join(__dirname, '../../dist')));
        // configuring CORS :
        this.app.use(cors_1.default());
        // configuring Body-Parser:
        this.configBodyParser();
        this.app.get('*', function (req, res) {
            res.sendFile(path_1.default.join(__dirname));
        });
        // configuring the API's:
        confRoutes_1.Routes.configRoutes(this.app);
        // DB configuration:
        dbConfig_1.DB.connectToDb();
    }
    DisplayUser.prototype.configBodyParser = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
    };
    return DisplayUser;
}());
var disUser = new DisplayUser();
