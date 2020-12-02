import { TimelinesEntryModel } from '../timelines-entry.model';
import { ITimeline } from '@workspace/api-interfaces';
import { Observable, of } from 'rxjs';

export class MockTimelinesDataAccessService {
  fetchTimelines(): Observable<ITimeline[]> {
    return of();
  }

  fetchTimeline(id: string): Observable<ITimeline> {
    return of();
  }

  postTimeline(timeline: TimelinesEntryModel): Observable<ITimeline> {
    return of();
  }

  updateTimeline(
    id: number,
    timeline: TimelinesEntryModel
  ): Observable<ITimeline> {
    return of();
  }
}