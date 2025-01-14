import 'tsconfig-paths/register';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import { accountRoutes } from '../src/route/accountRoute';

const PORT: number = parseInt(process.env.PORT || '8081', 10); 
const MONGO_URI: string = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/accountdb'; 

const app: Application = express();

mongoose
    .connect(MONGO_URI, {})
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch((err: any) => {
        console.error('MongoDB Connection Error:', err);
        process.exit(1);
    });

app.use('/api/account', accountRoutes);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});


app.listen(PORT, () => {
    console.log(`Account Service running on port ${PORT}`);
});
