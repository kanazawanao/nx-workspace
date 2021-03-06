import { TimelinesListContainerComponent } from './container/timelines-list-container.component';
import { TimelinesListPresenterComponent } from './presenter/timelines-list-presenter.component';
import { TimelinesListGuard } from './timelines-list.guard';
import { TimelinesDataAccessModule } from '../data-access/timelines-data-access.module';
import { TimelinesService } from '../timelines.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { UiTableModule } from '@workspace/ui';
import { TimelinesFacade } from '../data-access/+state/timelines.facade';

@NgModule({
  declarations: [
    TimelinesListPresenterComponent,
    TimelinesListContainerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiTableModule,
    TimelinesDataAccessModule,
    RouterModule,
    MatButtonModule,
  ],
  exports: [TimelinesListContainerComponent],
  providers: [TimelinesFacade, TimelinesListGuard, TimelinesService],
})
export class TimelinesListModule {}
