import { CounterState } from './CounterState';
import { PostsState } from './PostsState';

export interface AppState {
  counter: CounterState;
  posts: PostsState;
}
