import { Request, Response } from 'express'
import PostModel from '../models/postModel'

export const getPosts = async (_: Request, res: Response) => {
  try {
    const posts = await PostModel.find()
    res.json(posts)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

export const createPost = async (req: Request, res: Response) => {
  try {
    const post = await PostModel.create(req.body)
    res.json(post)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

export const deletePost = async (req: Request, res: Response) => {
  const id = req.params.id

  try {
    const post = await PostModel.findByIdAndDelete(id)
    res.json(post)
    console.log('Deleted Post')
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

export const editPost = async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const post = await PostModel.findByIdAndUpdate(id, req.body)
    res.json(post)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}
