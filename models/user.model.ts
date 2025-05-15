import mongoose, { Schema, HydratedDocument } from 'mongoose';

export interface IUser {
  username: string;
  password: string;
}

export type IUserDocument = HydratedDocument<IUser>;

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model<IUser>('User', UserSchema);
