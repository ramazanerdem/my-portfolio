import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../src/types/userTypes'

const initialState: { userData: IUser | null } = {
  userData: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action) => {
      const user: IUser = action.payload
      state.userData = user
    },
    logoutUser: (state) => {
      state.userData = null
    },
  },
})

export const { createUser, logoutUser } = userSlice.actions

export default userSlice.reducer
