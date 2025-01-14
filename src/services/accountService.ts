import { AccountRepository } from '../../src/repo/accountRepository';

export class AccountService {
    private accountRepo: AccountRepository;

    constructor(accountRepo: AccountRepository) {
        this.accountRepo = accountRepo;
    }

    async createAccount(name: string, email: string) {
        return await this.accountRepo.createAccount(name, email);
    }

    async getAccount(id: string) {
        return await this.accountRepo.getAccountById(id);
    }

    async updateAccount(id: string, name: string, email: string) {
        return await this.accountRepo.updateAccount(id, name, email);
    }

    async deleteAccount(id: string) {
        return await this.accountRepo.deleteAccount(id);
    }
}
