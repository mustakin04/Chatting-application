import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './Slice/Slice'

export const store = configureStore({
  reducer: {
    userInfo:userSlice
  },
})