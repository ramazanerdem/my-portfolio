import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import Contacts from './routes/contacts'
import Projects from './routes/projects'
import Blog from './routes/blog'
import Info from './routes/info'
import Tech from './routes/tech'
import HomePage from './components/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'info',
        element: <Info />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'blog',
        element: <Blog />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
)
