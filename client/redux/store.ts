import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import projectReducer from './projectSlice'
import blogReducer from './blogSlice'

export const store = configureStore({
  reducer: {
    users: userReducer,
    project: projectReducer,
    post: blogReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
