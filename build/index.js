"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const env_1 = __importDefault(require("./config/env"));
const initMongo_1 = __importDefault(require("./config/initMongo"));
(0, initMongo_1.default)();
const port = env_1.default.SERVER.PORT;
app_1.default.set('port', port);
const server = http_1.default.createServer(app_1.default);
server.listen(port);
//# sourceMappingURL=index.js.map