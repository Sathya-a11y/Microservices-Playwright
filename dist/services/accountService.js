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
exports.AccountService = void 0;
class AccountService {
    constructor(accountRepo) {
        this.accountRepo = accountRepo;
    }
    createAccount(name, email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.accountRepo.createAccount(name, email);
        });
    }
    getAccount(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.accountRepo.getAccountById(id);
        });
    }
    updateAccount(id, name, email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.accountRepo.updateAccount(id, name, email);
        });
    }
    deleteAccount(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.accountRepo.deleteAccount(id);
        });
    }
}
exports.AccountService = AccountService;
