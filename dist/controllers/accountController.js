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
exports.deleteAccount = exports.updateAccount = exports.getAccount = exports.createAccount = void 0;
const accountService_1 = require("../../src/services/accountService");
const accountRepository_1 = require("../../src/repo/accountRepository");
const accountRepo = new accountRepository_1.AccountRepository();
const accountService = new accountService_1.AccountService(accountRepo);
const createAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        const account = yield accountService.createAccount(name, email);
        res.status(201).json({ data: account });
    }
    catch (error) {
        next(error);
    }
});
exports.createAccount = createAccount;
const getAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const account = yield accountService.getAccount(id);
        res.status(200).json({ data: account });
    }
    catch (error) {
        next(error);
    }
});
exports.getAccount = getAccount;
const updateAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const account = yield accountService.updateAccount(id, name, email);
        res.status(200).json({ data: account });
    }
    catch (error) {
        next(error);
    }
});
exports.updateAccount = updateAccount;
const deleteAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const message = yield accountService.deleteAccount(id);
        res.status(200).json({ message });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteAccount = deleteAccount;
