import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './Slice/Slice'
import  activeChatSlice  from './Slice/activeChatSlice'

export const store = configureStore({
  reducer: {
    userInfo:userSlice,
    activeChat : activeChatSlice
  },
})