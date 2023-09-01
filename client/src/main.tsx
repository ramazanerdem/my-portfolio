import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

import ErrorPage from './error-page'
import Contacts from './routes/contacts'
import Projects from './routes/projects/projects'
import Blog from './routes/blog/blog'
import Info from './routes/info'
import Tech from './routes/tech'
import HomePage from './components/HomePage'
import AddProject from './routes/projects/addProject'
import ProjectsLayout from './layouts/projectsLayout'
import EditProject from './routes/projects/editProject'
import BlogLayout from './layouts/blogLayout'
import AddPost from './routes/blog/addPost'
import PostDetails from './routes/blog/postDetails'
import EditPost from './routes/blog/editPost'

const client_id: string = import.meta.env.VITE_GOOGLE_CLIENT_ID

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'info',
        element: <Info />,
      },
      {
        path: 'projects',
        element: <ProjectsLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Projects />,
          },
          {
            path: 'add',
            element: <AddProject />,
          },
          {
            path: 'edit/:id',
            element: <EditProject />,
          },
        ],
      },
      {
        path: 'blog',
        element: <BlogLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: 'add',
            element: <AddPost />,
          },
          {
            path: 'post/:id',
            element: <PostDetails />,
          },
          {
            path: 'edit/:id',
            element: <EditPost />,
          },
        ],
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'tech',
        element: <Tech />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={client_id}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
)
