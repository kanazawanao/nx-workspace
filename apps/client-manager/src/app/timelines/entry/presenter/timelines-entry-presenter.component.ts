import { BaseComponent } from '../../../base/base.component';
import { TimelinesEntryControlName } from '../skills-entry-control-name';
import { FormGroup } from '@angular/forms';
import { EditType } from '@workspace/constants';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'client-manager-timelines-entry-presenter',
  templateUrl: './timelines-entry-presenter.component.html',
  styleUrls: ['./timelines-entry-presenter.component.scss'],
})
export class TimelinesEntryPresenterComponent
  extends BaseComponent
  implements OnInit, OnDestroy {
  @Input() formGroup: FormGroup;
  @Input() editMode: EditType;
  @Output() registEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  controlName = TimelinesEntryControlName;
  constructor() {
    super();
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
