import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["Quiz"],
  endpoints: (builder) => ({
    getAllQuiz: builder.query({
      query: () => `/quizzes`,
      providesTags: ["Quiz"],
    }),
  }),
});

export const { useGetAllQuizQuery } = quizApi;
