import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureDeleteTaskComponent } from './feature-delete-task.component';

describe('FeatureDeleteTaskComponent', () => {
  let component: FeatureDeleteTaskComponent;
  let fixture: ComponentFixture<FeatureDeleteTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDeleteTaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureDeleteTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
