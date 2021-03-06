import * as SkillTypesActions from './skill-types.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ISkillType } from '@workspace/api-interfaces';
import { EditType } from '@workspace/constants';

export const SKILL_TYPES_FEATURE_KEY = 'skillTypes';

export interface State extends EntityState<ISkillType> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
  editerMode: EditType;
  workSkillTypeEntry?: ISkillType;
}

export interface SkillTypesPartialState {
  readonly [SKILL_TYPES_FEATURE_KEY]: State;
}

export const skillTypesAdapter: EntityAdapter<ISkillType> = createEntityAdapter<ISkillType>();

export const initialState: State = skillTypesAdapter.getInitialState({
  loaded: false,
  editerMode: EditType.create,
});

const skillTypesReducer = createReducer(
  initialState,
  on(SkillTypesActions.loadSkillTypes, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(SkillTypesActions.clearUpdateInitSkillTypeEntry, (state) => ({
    ...state,
    workSkillTypeEntry: { skillTypeName: '' },
  })),
  on(SkillTypesActions.loadSkillTypesSuccess, (state, { skillTypes }) =>
    skillTypesAdapter.setAll(skillTypes, { ...state, loaded: true })
  ),
  on(SkillTypesActions.loadSkillTypesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(SkillTypesActions.loadUpdateInitSkillTypeEntry, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    SkillTypesActions.loadUpdateInitSkillTypeEntrySuccess,
    (state, { initSkillTypeEntry }) => ({
      ...state,
      loaded: true,
      selectedId: initSkillTypeEntry.id,
      workSkillTypeEntry: initSkillTypeEntry,
    })
  ),
  on(
    SkillTypesActions.loadUpdateInitSkillTypeEntryFailure,
    (state, { error }) => ({
      ...state,
      error,
    })
  ),
  on(SkillTypesActions.createSkillType, (state) => ({
    ...state,
    loaded: false,
  })),
  on(SkillTypesActions.createSkillTypeSuccess, (state) => ({
    ...state,
    loaded: true,
  })),
  on(SkillTypesActions.createSkillTypeFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  on(SkillTypesActions.updateSkillType, (state) => ({
    ...state,
    loaded: false,
  })),
  on(SkillTypesActions.updateSkillTypeSuccess, (state) => ({
    ...state,
    loaded: true,
  })),
  on(SkillTypesActions.updateSkillTypeFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  on(SkillTypesActions.deleteSkillType, (state) => ({
    ...state,
    loaded: false,
  })),
  on(SkillTypesActions.deleteSkillTypeSuccess, (state) => ({
    ...state,
    loaded: true,
  })),
  on(SkillTypesActions.deleteSkillTypeFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  })),
  on(SkillTypesActions.setEditerMode, (state, { editerMode }) => ({
    ...state,
    editerMode: editerMode,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return skillTypesReducer(state, action);
}
