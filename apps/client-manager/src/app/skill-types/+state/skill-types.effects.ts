import * as SkillTypesActions from './skill-types.actions';
import { SkillTypesService } from '../skill-types.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

@Injectable()
export class SkillTypesEffects {
  loadSkillTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillTypesActions.loadSkillTypes),
      fetch({
        run: (action) => {
          return this.skillTypesService
            .fetchSkills()
            .pipe(
              map((res) =>
                SkillTypesActions.loadSkillTypesSuccess({ skillTypes: res })
              )
            );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return SkillTypesActions.loadSkillTypesFailure({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private skillTypesService: SkillTypesService
  ) {}
}