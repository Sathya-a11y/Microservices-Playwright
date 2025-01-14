"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("tsconfig-paths/register");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const loginRoute_1 = require("../src/route/loginRoute");
const PORT = parseInt(process.env.PORT || '8080', 10); 
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/logindb'; 
const app = (0, express_1.default)();
app.use(express_1.default.json());
mongoose_1.default
    .connect(MONGO_URI, {})
    .then(() => {
    console.log('MongoDB Connected');
})
    .catch((err) => {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
});
app.use('/api/login', loginRoute_1.loginRoutes);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});
app.listen(PORT, () => {
    console.log(`Login Service running on port ${PORT}`);
});