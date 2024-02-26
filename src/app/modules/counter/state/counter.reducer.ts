import { createReducer, on } from '@ngrx/store';
import { initialState } from "./counter.state";
import { changeAuthorName, customIncrement, decrement, increment, reset } from './counter.actions';

const _counterReducer = createReducer(initialState,
  on(increment, (state: any) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),

  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),

  on(reset, (state) => {
    return {
      ...state,
      counter: 0
    }
  }),

  on(customIncrement, (state, action) => {
    // console.log(action)
      return {
        ...state,
        counter: state.counter + action.count,
      }
  }),

  on(changeAuthorName, (state, action) => {
    return {
      ...state,
      author: 'New author name'
    }
  })
)

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
