import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productsApi } from "./slices/productsApi";
import { categoriesApi } from "./slices/categoriesApi";
import cartSlice from "./slices/cartSlice";
import { cartApi } from "./slices/cartApi";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(cartApi.middleware);
  },
});

export default store;
