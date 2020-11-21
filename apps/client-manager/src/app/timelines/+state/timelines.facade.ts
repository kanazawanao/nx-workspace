import * as fromTimelines from './timelines.reducer';
import * as TimelinesSelectors from './timelines.selectors';
import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

@Injectable()
export class TimelinesFacade {
  loaded$ = this.store.pipe(select(TimelinesSelectors.getTimelinesLoaded));
  allTimelines$ = this.store.pipe(select(TimelinesSelectors.getAllTimelines));
  selectedTimelines$ = this.store.pipe(select(TimelinesSelectors.getSelected));

  constructor(private store: Store<fromTimelines.TimelinesPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}