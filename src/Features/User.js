import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'user',
    initialState:{value:{name:'', age:0, email:''}},

    reducers:{
       sendData: (state, action) => {
        state.value = action.payload
       },
       emptyData:(state, action) =>{
        state.value = action.payload
       }
      
    }
})

export const {sendData, emptyData} = userSlice.actions

export default userSlice.reducer;