import mongoose from 'mongoose'
import { IPost } from '../types/postTypes'

const postSchema = new mongoose.Schema<IPost>({
  title: String,
  image: String,
  content: String,
})

const PostModel = mongoose.model<IPost>('Post', postSchema)
export default PostModel
