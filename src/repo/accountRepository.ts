import { AccountModel, IAccount } from '../../src/models/accountModel';

export class AccountRepository {
    async createAccount(name: string, email: string): Promise<IAccount> {
        return await AccountModel.create({ name, email });
    }

    async getAccountById(id: string): Promise<IAccount | null> {
        return await AccountModel.findById(id);
    }

    async updateAccount(id: string, name: string, email: string): Promise<IAccount | null> {
        return await AccountModel.findByIdAndUpdate(id, { name, email }, { new: true });
    }

    async deleteAccount(id: string): Promise<IAccount | null> {
        return await AccountModel.findByIdAndDelete(id);
    }
}
