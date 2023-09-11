import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { json } from "react-router-dom";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://62.72.30.43/api" }),
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (cartData) => {
        const data = cartData.products;
        const products = data.map((item) => {
          return {
            product_id: item.id,
            ingredients: item.extraIngredients.map((ing) => {
              return { ingredient_id: ing.id };
            }),
            quantity: item.quantity,
            notes: item.note,
          };
        });
        const datatosend = {
          table_num: 1,
          branch_id: 1,
          products,
        };
        console.log(datatosend, "product");
        return {
          url: "/cart/add",
          method: "POST",
          body: datatosend,
        };
      },
    }),
  }),
});

export const { useAddToCartMutation } = cartApi;
