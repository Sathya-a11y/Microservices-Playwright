import 'tsconfig-paths/register';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import { loginRoutes } from '../src/route/loginRoute';

const PORT: number = parseInt(process.env.PORT || '8080', 10); // Use process.env.PORT if set, otherwise default to 8080
const MONGO_URI: string = process.env.MONGO_URI || 'mongodb://localhost:27017/logindb'; // Use process.env.MONGO_URI if set, otherwise default

const app: Application = express();
app.use(express.json());
mongoose
    .connect(MONGO_URI, {})
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch((err: any) => {
        console.error('MongoDB Connection Error:', err);
        process.exit(1);
    });


app.use('/api/login', loginRoutes);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});


app.listen(PORT, () => {
    console.log(`Login Service running on port ${PORT}`);
});
