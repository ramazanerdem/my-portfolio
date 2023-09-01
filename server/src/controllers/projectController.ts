import { Request, Response } from 'express'
import ProjectModel from '../models/projectModel'
import * as dotenv from 'dotenv'
dotenv.config()

export const getProjects = async (_: Request, res: Response) => {
  try {
    const projects = await ProjectModel.find()
    res.json(projects)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

export const addProject = async (req: Request, res: Response) => {
  try {
    const project = await ProjectModel.create(req.body)
    res.json(project)
    console.log('Created Project')
  } catch (err) {
    console.log('Update Error: ' + err)
    res.json(err)
  }
}

export const deleteProject = async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const project = await ProjectModel.findByIdAndDelete(id)
    res.json(project)
    console.log('Deleted Project')
  } catch (err) {
    console.log('Error message: ' + err)
    res.json(err)
  }
}

export const getProject = async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const project = await ProjectModel.findById(id)
    res.json(project)
  } catch (err) {
    console.log('Error message: ' + err)
    res.json(err)
  }
}

export const editProject = async (req: Request, res: Response) => {
  const id = req.params.id
  // const { title, image, description, live_url, github_url } = req.body
  try {
    const project = await ProjectModel.findByIdAndUpdate(id, req.body)
    res.json(project)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}
