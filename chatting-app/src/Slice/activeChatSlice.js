import { createSlice } from '@reduxjs/toolkit'

const initialState= {
    value: localStorage.getItem("activeChatData")
    ? JSON.parse(localStorage.getItem("activeChatData")):null
    
    
  }
  export const activeChatSlice = createSlice({
    name: 'activeChat',
    initialState,
    reducers: {
      activechatinfo: (state,action) => {
        state.value=action.payload
        console.log(initialState.value)
      },
    }
  })
  export const { activechatinfo } = activeChatSlice.actions
  
export default activeChatSlice.reducer