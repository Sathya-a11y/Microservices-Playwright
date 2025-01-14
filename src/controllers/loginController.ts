import { Request, Response, NextFunction } from 'express';
import { LoginService } from '../../src/services/loginService';
import { UserRepository } from '../../src/repo/userRepository';

const userRepo = new UserRepository();
const loginService = new LoginService(userRepo);

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
        const message = await loginService.registerUser(username, password);
        res.status(201).json({ message });
    } catch (error) {
        next(error);
    }
};

export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
        const message = await loginService.authenticateUser(username, password);
        res.status(200).json({ message });
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username } = req.params;
        const message = await loginService.deleteUser(username);
        res.status(200).json({ message });
    } catch (error) {
        next(error);
    }
};