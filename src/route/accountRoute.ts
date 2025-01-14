import express from 'express';
import { createAccount, getAccount, updateAccount, deleteAccount } from '../../src/controllers/accountController';

const arouter = express.Router();

arouter.post('/create', createAccount);
arouter.get('/:id', getAccount);
arouter.put('/:id', updateAccount);
arouter.delete('/:id', deleteAccount);

export const accountRoutes = arouter;