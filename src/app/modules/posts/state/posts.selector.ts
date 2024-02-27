import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from '../../../core/data/interfaces';

export const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});
