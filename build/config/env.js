"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const config = dotenv_1.default.config();
const env = {
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
    SERVER: {
        PORT: process.env.PORT || 8000,
    },
    DATABASE: {
        MONGO_URI: process.env.MONGO_URI,
    },
};
exports.default = env;
//# sourceMappingURL=env.js.map