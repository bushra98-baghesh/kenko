import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://62.72.30.43/api",
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => "categories",
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoriesApi;
