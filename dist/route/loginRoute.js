"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
const express_1 = __importDefault(require("express"));
const loginController_1 = require("../../src/controllers/loginController");
const router = express_1.default.Router();
router.post('/register', loginController_1.registerUser);
router.post('/authenticate', loginController_1.authenticateUser);
router.delete('/:username', loginController_1.deleteUser);
exports.loginRoutes = router;
