import mongoose, { Document, Schema, model } from 'mongoose';

export interface IAccount extends Document {
    name: string;
    email: string;
}
const AccountSchema = new Schema<IAccount>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});
export const AccountModel = mongoose.model<IAccount>('Account', AccountSchema);