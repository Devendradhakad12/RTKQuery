import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostTypes } from "../types";

export const posts = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<PostTypes[], string>({
      query: () => "posts",
      providesTags: ["posts"],
    }),
    newPost: builder.mutation<PostTypes, PostTypes>({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["posts"],
    }),
    updatePost: builder.mutation<PostTypes, PostTypes>({
      query: (post) => ({
        url: `posts/${post.id}`,
        method: "PATCH",
        body: post.id,
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const { useGetPostsQuery, useNewPostMutation, useUpdatePostMutation } =
  posts;
