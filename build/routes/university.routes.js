"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const univesity_controllers_1 = __importDefault(require("../controllers/univesity.controllers"));
const uniRouter = express_1.default.Router();
uniRouter.get('/uni/search', univesity_controllers_1.default.findUniversity);
exports.default = uniRouter;
//# sourceMappingURL=university.routes.js.map