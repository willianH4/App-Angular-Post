import { PostsState } from '../../../core/data/interfaces';

export const initialState: PostsState = {
  posts: [
    {id: '1', title: 'Sample title 1', description: 'Sample description 1'},
    {id: '2', title: 'Sample title 2', description: 'Sample description 2'},
  ],
}
