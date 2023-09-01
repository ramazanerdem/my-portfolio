import { createSlice } from '@reduxjs/toolkit'
import { IPost } from '../src/types/postTypes'

const initialState: { postData: IPost | null } = {
  postData: null,
}

export const postSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getPost: (state, action) => {
      const post: IPost = action.payload
      state.postData = post
    },
  },
})

export const { getPost } = postSlice.actions

export default postSlice.reducer
