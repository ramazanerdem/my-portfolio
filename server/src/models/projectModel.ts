import mongoose from 'mongoose'
import { IProject } from '../types/dataTypes'

const projectSchema = new mongoose.Schema<IProject>({
  // _id: String,
  title: String,
  image: String,
  description: String,
  live_url: String,
  github_url: String,
})

const ProjectModel = mongoose.model<IProject>('Project', projectSchema)
export default ProjectModel
