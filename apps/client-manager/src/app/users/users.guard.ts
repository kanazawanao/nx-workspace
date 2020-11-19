import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { UsersFacade } from './+state/users.facade';

@Injectable({
  providedIn: 'root',
})
export class UsersGuard implements CanActivate {
  constructor(private usersFacade: UsersFacade) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.usersFacade.loadUsers();
    return of(true);
  }
}
