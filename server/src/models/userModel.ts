import mongoose from 'mongoose'
import { IUser } from '../types/userTypes'

const userSchema = new mongoose.Schema<IUser>({
  email: String,
  given_name: String,
  picture: String,
})

const UserModel = mongoose.model<IUser>('User', userSchema)
export default UserModel
