"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUniversity = void 0;
const university_models_1 = __importDefault(require("../models/university.models"));
const findUniversity = async (name) => {
    const university = await university_models_1.default.findOne({ name });
    return university;
};
exports.findUniversity = findUniversity;
//# sourceMappingURL=university.services.js.map