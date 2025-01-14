import { UserRepository } from '../../src/repo/userRepository';                


export class LoginService {
    private userRepo: UserRepository;

    constructor(userRepo: UserRepository) {
        this.userRepo = userRepo;
    }

    async registerUser(username: string, password: string): Promise<string> {
        const user = await this.userRepo.addUser(username, password);
        return `User ${user.username} registered successfully.`;
    }

    async authenticateUser(username: string, password: string): Promise<string> {
        const user = await this.userRepo.getUserByUsername(username);
        if (!user || user.password !== password) {
            throw new Error('Invalid username or password.');
        }
        return 'Authentication successful.';
    }

    async deleteUser(username: string): Promise<string> {
        const user = await this.userRepo.deleteUserByUsername(username);
        if (!user) throw new Error('User not found.');
        return `User ${username} deleted successfully.`;
    }
}
