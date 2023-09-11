import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://62.72.30.43/api",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getProductDetails: builder.query({
      query: (id) => `show_product/${id}`,
    }),
    getProductIngredients: builder.query({
      query: (id) => `ingredients/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductDetailsQuery,
  useGetProductIngredientsQuery,
} = productsApi;
