import { Router } from 'express'

import {
  addProject,
  deleteProject,
  editProject,
  getProject,
  getProjects,
} from '../controllers/projectController'
import {
  createUser,
  // getUser,
  getUserByEmail,
  googleLogin,
} from '../controllers/userController'
import {
  createPost,
  deletePost,
  editPost,
  getPosts,
} from '../controllers/blogController'

const router = Router()

router.get('/getProjects', getProjects)
router.post('/addProject', addProject)
router.delete('/deleteProject/:id', deleteProject)
//Edit
router.get('/getProject/:id', getProject)
router.put('/editProject/:id', editProject)

//Google Auth
router.post('/auth/google', googleLogin)

//User
router.post('/createUser', createUser)
router.get('/getUserByEmail/:email', getUserByEmail)

//Blog
router.get('/getPosts', getPosts)
router.post('/createPost', createPost)
router.put('/editPost/:id', editPost)
router.delete('/deletePost/:id', deletePost)

export default router
