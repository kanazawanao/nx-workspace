import * as SkillsActions from './skills.actions';
import { SkillsFacade } from './skills.facade';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ISkill } from '@workspace/api-interfaces';

export const SKILLS_FEATURE_KEY = 'skills';

export interface State extends EntityState<ISkill> {
  selectedId?: string | number; // which Skills record has been selected
  loaded: boolean; // has the Skills list been loaded
  error?: string | null; // last known error (if any)
}

export interface SkillsPartialState {
  readonly [SKILLS_FEATURE_KEY]: State;
}

export const skillsAdapter: EntityAdapter<ISkill> = createEntityAdapter<
  ISkill
>();

export const initialState: State = skillsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const skillsReducer = createReducer(
  initialState,
  on(SkillsActions.loadSkills, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(SkillsActions.loadSkillsSuccess, (state, { skills }) =>
    skillsAdapter.setAll(skills, { ...state, loaded: true })
  ),
  on(SkillsActions.loadSkillsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return skillsReducer(state, action);
}
