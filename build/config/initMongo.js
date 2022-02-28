"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = __importDefault(require("./env"));
const initMongo = async () => {
    mongoose_1.default.connection.on('error', () => console.log('Error'));
    mongoose_1.default.connection.on('connected', () => console.log('Connected'));
    try {
        return await mongoose_1.default.connect(env_1.default.DATABASE.MONGO_URI);
    }
    catch (err) {
        console.log('Error');
    }
};
exports.default = initMongo;
//# sourceMappingURL=initMongo.js.map