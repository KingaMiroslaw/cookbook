import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealsApi = createApi({
  reducerPath: "mealsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_MEALS_API_URL,
  }),
  endpoints: (builder) => ({
    getMeals: builder.query<any, void>({
      query: () =>
        `/recipes/random?apiKey=${process.env.REACT_APP_MEALS_API_KEY}&number=9`,
    }),
  }),
});

export const { useGetMealsQuery } = mealsApi;
