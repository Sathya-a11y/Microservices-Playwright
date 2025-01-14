"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("tsconfig-paths/register");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const accountRoute_1 = require("../src/route/accountRoute");
const PORT = parseInt(process.env.PORT || '8081', 10);
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/accountdb';
const app = (0, express_1.default)();
mongoose_1.default
    .connect(MONGO_URI, {})
    .then(() => {
    console.log('MongoDB Connected');
})
    .catch((err) => {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
});
app.use('/api/account', accountRoute_1.accountRoutes);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});
app.listen(PORT, () => {
    console.log(`Account Service running on port ${PORT}`);
});
