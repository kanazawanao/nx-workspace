import { SkillsListPresenterComponent } from './skills-list-presenter.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiTableModule } from '@workspace/ui';
import { of } from 'rxjs';

export default {
  title: 'SkillsListPresenterComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [
      CommonModule,
      ReactiveFormsModule,
      UiTableModule,
      BrowserAnimationsModule,
    ],
  },
  component: SkillsListPresenterComponent,
  props: {
    skills$: of([]),
    displayedColumns: [
      'id',
      'skillType',
      'skillName',
      'experienceYears',
      'skillLevel',
    ],
  },
});
