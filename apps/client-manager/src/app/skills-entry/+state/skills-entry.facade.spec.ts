import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { SkillsEntryEntity } from './skills-entry.models';
import { SkillsEntryEffects } from './skills-entry.effects';
import { SkillsEntryFacade } from './skills-entry.facade';

import * as SkillsEntrySelectors from './skills-entry.selectors';
import * as SkillsEntryActions from './skills-entry.actions';
import {
  SKILLSENTRY_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './skills-entry.reducer';

interface TestSchema {
  skillsEntry: State;
}

describe('SkillsEntryFacade', () => {
  let facade: SkillsEntryFacade;
  let store: Store<TestSchema>;
  const createSkillsEntryEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SkillsEntryEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(SKILLSENTRY_FEATURE_KEY, reducer),
          EffectsModule.forFeature([SkillsEntryEffects]),
        ],
        providers: [SkillsEntryFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(SkillsEntryFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allSkillsEntry$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(SkillsEntryActions.loadSkillsEntry());

        list = await readFirst(facade.allSkillsEntry$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadSkillsEntrySuccess` to manually update list
     */
    it('allSkillsEntry$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allSkillsEntry$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          SkillsEntryActions.loadSkillsEntrySuccess({
            skillsEntry: [
              createSkillsEntryEntity('AAA'),
              createSkillsEntryEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allSkillsEntry$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});