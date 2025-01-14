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
exports.LoginService = void 0;
class LoginService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    registerUser(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepo.addUser(username, password);
            return `User ${user.username} registered successfully.`;
        });
    }
    authenticateUser(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepo.getUserByUsername(username);
            if (!user || user.password !== password) {
                throw new Error('Invalid username or password.');
            }
            return 'Authentication successful.';
        });
    }
    deleteUser(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepo.deleteUserByUsername(username);
            if (!user)
                throw new Error('User not found.');
            return `User ${username} deleted successfully.`;
        });
    }
}
exports.LoginService = LoginService;
