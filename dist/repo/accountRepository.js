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
exports.AccountRepository = void 0;
const accountModel_1 = require("../../src/models/accountModel");
class AccountRepository {
    createAccount(name, email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield accountModel_1.AccountModel.create({ name, email });
        });
    }
    getAccountById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield accountModel_1.AccountModel.findById(id);
        });
    }
    updateAccount(id, name, email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield accountModel_1.AccountModel.findByIdAndUpdate(id, { name, email }, { new: true });
        });
    }
    deleteAccount(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield accountModel_1.AccountModel.findByIdAndDelete(id);
        });
    }
}
exports.AccountRepository = AccountRepository;
