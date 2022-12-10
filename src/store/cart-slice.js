import { createSlice } from "@reduxjs/toolkit";

// const HumanSlice = createSlice({
//   name:"cart",
//   initialState:"",
//   reducers:{

//   }

// }

// )

// export const HumanActions = HumanSlice.actions
// export default HumanSlice.reducer

const cartInitialState = { items: [], totalQuantity: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItemToTheCart(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.itemId === newItem.id);
      if (existingItem) {
        
        existingItem.quantity++
        existingItem.totalPrice = newItem.price + existingItem.totalPrice 
        
        
      }
      else {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice:newItem.price,
          title:newItem.title
        });
        
      }
      
        
      
    

      // but it can also be done directly in REDUX toolkit jaisay uper kia 
      // if (existingItem) {
      //   const ItemsList = state.items;
      //   const existingItemIndex = state.items.findIndex(existingItem);
      //   ItemsList[existingItemIndex] = {
      //     ...existingItem,
      //     amount: existingItem.amount + 1,
      //   };
      //   return;
      // }
    },

    removerItemFromTheCart(state,action){
      // item dhondna ha index
      //
      const id = action.payload
      const existingItem = state.items.find(item=>item.itemId===id)
      if (existingItem.quantity===1) {
        state.items=state.items.filter(item=>item.itemId!==existingItem.itemId)
        
      }else{
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }
      state.totalQuantity--;
       
    }
  },
});

export const carttActions = cartSlice.actions;
export default cartSlice.reducer;
