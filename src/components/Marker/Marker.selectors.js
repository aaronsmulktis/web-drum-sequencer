import { createSelector, createStructuredSelector } from 'reselect';
import { currentBeatSelector } from '../../common';

const progressSelector = createSelector(
  currentBeatSelector,
  (currentBeat) => (currentBeat - 1) / 4
)

export const markerSelectors = createStructuredSelector({
  progress: progressSelector,
});