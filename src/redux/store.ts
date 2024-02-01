import { configureStore } from "@reduxjs/toolkit";
import { posts } from "./api";
import { myReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    api: posts.reducer,
    myReducer: myReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(posts.middleware),
});
