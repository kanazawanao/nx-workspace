import * as UsersActions from './users.actions';
import { UsersEffects } from './users.effects';
import { UsersFacade } from './users.facade';
import { MockUsersService } from '../mock-users.service';
import { UsersService } from '../users.service';
import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';
import { IUser } from '@workspace/api-interfaces';
import { USERS_FEATURE_KEY, State, reducer } from './users.reducer';

interface TestSchema {
  users: State;
}

describe('UsersFacade', () => {
  let facade: UsersFacade;
  let store: Store<TestSchema>;
  const createUsersEntity = (id: number, name = '') =>
    ({
      id,
      firstName: name || `name-${id}`,
    } as IUser);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(USERS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([UsersEffects]),
        ],
        providers: [
          UsersFacade,
          { provide: UsersService, useValue: MockUsersService },
        ],
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
      facade = TestBed.get(UsersFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allUsers$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(UsersActions.loadUsers());

        list = await readFirst(facade.allUsers$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadUsersSuccess` to manually update list
     */
    it('allUsers$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allUsers$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          UsersActions.loadUsersSuccess({
            users: [createUsersEntity(1), createUsersEntity(2)],
          })
        );

        list = await readFirst(facade.allUsers$);
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
