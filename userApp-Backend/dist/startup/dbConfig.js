"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var DB = /** @class */ (function () {
    function DB() {
    }
    // connecting to Db:
    DB.connectToDb = function () {
        mongoose_1.default.connect(this.connectionStr, { useNewUrlParser: true })
            .then(function () { return console.log('DB connection successfull'); })
            .catch(function (err) { console.log('DB connection failled'); console.log(err); });
    };
    ;
    // configuring the Mongo Db Url:
    DB.connectionStr = 'mongodb+srv://abdalpasha:abdal123@abdal-s91co.mongodb.net/UserApp?retryWrites=true&w=majority';
    return DB;
}());
exports.DB = DB;
;
