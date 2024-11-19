import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureAddTaskComponent } from './feature-add-task.component';

describe('FeatureAddTaskComponent', () => {
  let component: FeatureAddTaskComponent;
  let fixture: ComponentFixture<FeatureAddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureAddTaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
