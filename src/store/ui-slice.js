import {createSlice} from "@reduxjs/toolkit"

const uiInitialState = {toggleCart:false}

const UiSlice = createSlice({
    name:"uiSlice",
    initialState: uiInitialState,
    reducers:{
        showCart(state){
            state.toggleCart=!state.toggleCart

        }
    }
})
export const  uiSliceActions = UiSlice.actions 
export default UiSlice.reducer;