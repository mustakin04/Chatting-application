import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    information: localStorage.getItem("userInformation") ?
     JSON.parse(localStorage.getItem("userInformation")) : null,
}
export const userSlice = createSlice(
    {
        name: 'userInfo',
        initialState,
        reducers: {
            userInformation: (state, action) => {
                state.information = action.payload
            }
        }

    }
)
export const { userInformation } = userSlice.actions;
export default userSlice.reducer