import { counterReducer } from "../modules/counter/state/counter.reducer";
import { postsReducer } from "../modules/posts/state/posts.reducer";

export const appReducer = {
  counter: counterReducer,
  posts: postsReducer,
}
