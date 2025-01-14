"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountRoutes = void 0;
const express_1 = __importDefault(require("express"));
const accountController_1 = require("../../src/controllers/accountController");
const arouter = express_1.default.Router();
arouter.post('/create', accountController_1.createAccount);
arouter.get('/:id', accountController_1.getAccount);
arouter.put('/:id', accountController_1.updateAccount);
arouter.delete('/:id', accountController_1.deleteAccount);
exports.accountRoutes = arouter;
