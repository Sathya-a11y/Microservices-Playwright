import { Request, Response, NextFunction } from 'express';
import { AccountService } from '../../src/services/accountService';
import { AccountRepository } from '../../src/repo/accountRepository';

const accountRepo = new AccountRepository();
const accountService = new AccountService(accountRepo);

export const createAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email } = req.body;
        const account = await accountService.createAccount(name, email);
        res.status(201).json({ data: account });
    } catch (error) {
        next(error);
    }
};

export const getAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const account = await accountService.getAccount(id);
        res.status(200).json({ data: account });
    } catch (error) {
        next(error);
    }
};

export const updateAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const account = await accountService.updateAccount(id, name, email);
        res.status(200).json({ data: account });
    } catch (error) {
        next(error);
    }
};

export const deleteAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const message = await accountService.deleteAccount(id);
        res.status(200).json({ message });
    } catch (error) {
        next(error);
    }
};
