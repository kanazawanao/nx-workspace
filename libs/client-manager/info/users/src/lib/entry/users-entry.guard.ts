import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { UsersFacade } from '../data-access/+state/users.facade';

@Injectable()
export class UsersEntryGuard implements CanActivate {
  constructor(private usersEntryFacade: UsersFacade) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const id = route.params.id;
    if (id === 'entry') {
      this.usersEntryFacade.clearUpdateInitUserEntry();
      return of(true);
    }
    this.usersEntryFacade.loadUpdateInitUsersEntry(id);
    return of(true);
  }
}
