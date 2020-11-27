import { SkillTypesEntryPresenterComponent } from './skill-types-entry-presenter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SkillTypesEntryPresenterComponent', () => {
  let component: SkillTypesEntryPresenterComponent;
  let fixture: ComponentFixture<SkillTypesEntryPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillTypesEntryPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTypesEntryPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});