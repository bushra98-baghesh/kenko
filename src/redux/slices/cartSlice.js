import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const sortedArr1 = [...arr1].sort((a, b) => a.id - b.id);
  const sortedArr2 = [...arr2].sort((a, b) => a.id - b.id);

  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i].id !== sortedArr2[i].id) {
      return false;
    }
  }

  return true;
}

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};
const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setAddItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItems = state.cartItems.filter(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;

      if (existingItems.length === 0) {
        const tempProduct = {
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        };
        state.cartItems.push(tempProduct);
        state.totalAmount += tempProduct.totalPrice;
        toast.success("Added successfully");
      } else {
        let matchedExistingItem = null;
        for (const existingItem of existingItems) {
          if (
            existingItem &&
            areArraysEqual(
              existingItem.extraIngredients,
              newItem.extraIngredients
            ) &&
            existingItem.note == newItem.note
          ) {
            matchedExistingItem = existingItem;
            break;
          }
        }

        if (!matchedExistingItem) {
          const tempProduct = {
            ...newItem,
            quantity: 1,
            totalPrice: newItem.price,
          };
          state.cartItems.push(tempProduct);
          state.totalAmount += tempProduct.totalPrice;
          toast.success("Added successfully");
        } else {
          matchedExistingItem.quantity++;
          state.totalAmount += matchedExistingItem.price;
          matchedExistingItem.totalPrice =
            Number(matchedExistingItem.totalPrice) + Number(newItem.price);
        }
      }
    },
    deleteItem: (state, action) => {
      const { id, extraIngredients, note } = action.payload;

      const existingItems = state.cartItems.filter(
        (item) =>
          item.id === id &&
          areArraysEqual(item.extraIngredients, extraIngredients) &&
          item.note === note
      );

      if (existingItems.length > 0) {
        const totalQuantityToRemove = existingItems.reduce(
          (total, item) => total + item.quantity,
          0
        );

        state.cartItems = state.cartItems.filter(
          (item) =>
            !(
              item.id === id &&
              areArraysEqual(item.extraIngredients, extraIngredients) &&
              item.note === note
            )
        );

        state.totalQuantity -= totalQuantityToRemove;
        toast.success("Removed successfully");
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    setIncreaseItemQTY: (state, action) => {
      state.totalQuantity++;

      // Find the item with the matching ID and extraIngredients
      const matchingItem = state.cartItems.find(
        (item) =>
          item.id === action.payload.id &&
          areArraysEqual(
            item.extraIngredients,
            action.payload.extraIngredients
          ) &&
          item.note == action.payload.note
      );

      if (matchingItem) {
        matchingItem.quantity++;
        state.totalAmount += matchingItem.price;
        matchingItem.totalPrice += Number(action.payload.price);
      }
    },
    setDecreaseItemQTY: (state, action) => {
      // Find the item with the matching ID and extraIngredients
      const matchingItem = state.cartItems.find(
        (item) =>
          item.id === action.payload.id &&
          areArraysEqual(
            item.extraIngredients,
            action.payload.extraIngredients
          ) &&
          item.note == action.payload.note
      );

      if (matchingItem && matchingItem.quantity > 0) {
        state.totalQuantity--;
        matchingItem.quantity--;
        state.totalAmount -= matchingItem.price;
        matchingItem.totalPrice -= Number(action.payload.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});
export const {
  setAddItemToCart,
  deleteItem,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
} = CartSlice.actions;

export default CartSlice.reducer;
