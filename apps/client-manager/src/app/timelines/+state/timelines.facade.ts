import * as TimelinesActions from './timelines.actions';
import * as fromTimelines from './timelines.reducer';
import * as TimelinesSelectors from './timelines.selectors';
import { TimelinesEntryModel } from '../entry/timelines-entry-model';
import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { EditType } from '@workspace/constants';

@Injectable()
export class TimelinesFacade {
  loaded$ = this.store.pipe(select(TimelinesSelectors.getTimelinesLoaded));
  allTimelines$ = this.store.pipe(select(TimelinesSelectors.getAllTimelines));
  selectedTimelines$ = this.store.pipe(select(TimelinesSelectors.getSelected));
  workTimeline$ = this.store.pipe(
    select(TimelinesSelectors.getWorkTimelineEntry)
  );
  editMode$ = this.store.pipe(select(TimelinesSelectors.getEditerMode));

  constructor(private store: Store<fromTimelines.TimelinesPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadTimelines() {
    this.dispatch(TimelinesActions.loadTimelines());
  }

  loadUpdateInitTimelineEntry(timelineId: string) {
    this.setEditerMode(EditType.update);
    this.dispatch(TimelinesActions.loadUpdateInitTimelineEntry({ timelineId }));
  }

  createTimeline(timelineEntry: TimelinesEntryModel) {
    this.dispatch(TimelinesActions.createTimeline({ timelineEntry }));
  }

  updateSkill(id: number, timelineEntry: TimelinesEntryModel) {
    this.dispatch(TimelinesActions.updateTimeline({ id, timelineEntry }));
  }

  setEditerMode(editerMode: EditType) {
    this.store.dispatch(TimelinesActions.setEditerMode({ editerMode }));
  }
}
