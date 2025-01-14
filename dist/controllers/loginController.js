"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.authenticateUser = exports.registerUser = void 0;
const loginService_1 = require("../../src/services/loginService");
const userRepository_1 = require("../../src/repo/userRepository");
const userRepo = new userRepository_1.UserRepository();
const loginService = new loginService_1.LoginService(userRepo);
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const message = yield loginService.registerUser(username, password);
        res.status(201).json({ message });
    }
    catch (error) {
        next(error);
    }
});
exports.registerUser = registerUser;
const authenticateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const message = yield loginService.authenticateUser(username, password);
        res.status(200).json({ message });
    }
    catch (error) {
        next(error);
    }
});
exports.authenticateUser = authenticateUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username } = req.params;
        const message = yield loginService.deleteUser(username);
        res.status(200).json({ message });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteUser = deleteUser;
