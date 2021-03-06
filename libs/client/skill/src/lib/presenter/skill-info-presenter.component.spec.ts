import { SkillInfoPresenterInputData } from './skill-info-presenter-input-data';
import { SkillInfoPresenterComponent } from './skill-info-presenter.component';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiTableModule } from '@workspace/ui';
import { of } from 'rxjs';
const inputData = new SkillInfoPresenterInputData();
inputData.displayedColumn = [];
inputData.dataSource$ = of();
describe('SkillInfoPresenterComponent', () => {
  let component: SkillInfoPresenterComponent;
  let fixture: ComponentFixture<SkillInfoPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillInfoPresenterComponent],
      providers: [
        { provide: 'apiUrl', useValue: 'https://localhost:3333/api' },
      ],
      imports: [CommonModule, UiTableModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillInfoPresenterComponent);
    component = fixture.componentInstance;
    component.inputData = inputData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
