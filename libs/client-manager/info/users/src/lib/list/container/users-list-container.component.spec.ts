import { UsersListContainerComponent } from './users-list-container.component';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IUser } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';
import { MockUsersFacade } from '../../data-access/+state/mock-users.facade';
import { UsersFacade } from '../../data-access/+state/users.facade';
import { UsersService } from '../../users.service';
import { MockUsersService } from '../../mock-users.service';

@Component({
  selector: 'client-manager-users-list-presenter',
  template: '',
  styleUrls: [],
})
export class MockUsersListPresenterComponent {
  @Input() users$: Observable<IUser[]>;
  @Input() displayedColumns: string[];
  @Output() selectEvent = new EventEmitter();
}

describe('UsersListContainerComponent', () => {
  let component: UsersListContainerComponent;
  let fixture: ComponentFixture<UsersListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UsersListContainerComponent,
        MockUsersListPresenterComponent,
      ],
      providers: [
        {
          provide: UsersFacade,
          useValue: MockUsersFacade,
        },
        {
          provide: UsersService,
          useValue: MockUsersService,
        },
      ],
      imports: [CommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
