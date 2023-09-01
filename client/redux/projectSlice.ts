import { createSlice } from '@reduxjs/toolkit'
import { IProject } from '../src/types/dataTypes'

const initialState: { projectData: IProject | null } = {
  projectData: null,
}

export const projectSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    editProject: (state, action) => {
      const project: IProject = action.payload
      state.projectData = project
    },
  },
})

export const { editProject } = projectSlice.actions

export default projectSlice.reducer
