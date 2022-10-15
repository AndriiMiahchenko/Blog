import {configureStore} from "@reduxjs/toolkit";
import likeReducer from "./likeReducer";
import cartReducer from "./cartReducer";

export const store = configureStore({
    reducer: {
        postsLikeState: likeReducer,
        postsInCart: cartReducer,
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch