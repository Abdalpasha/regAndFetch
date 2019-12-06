"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
// create a schema type User Model:
var UserSchema = new mongoose_1.default.Schema({
    sno: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    imageurl: String,
    nofreps: Number
});
exports.UserModel = mongoose_1.default.model('user', UserSchema);
