import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState, state => {
  return state.counter;
});

export const getAuthorName = createSelector(getCounterState, state => {
  return state.author;
})
