import { UserModel, IUser } from '../../src/models/userModel';


export class UserRepository {
    async addUser(username: string, password: string): Promise<IUser> {
        return await UserModel.create({ username, password });
    }

    async getUserByUsername(username: string): Promise<IUser | null> {
        return await UserModel.findOne({ username });
    }

    async deleteUserByUsername(username: string): Promise<IUser | null> {
        return await UserModel.findOneAndDelete({ username });
    }
}
