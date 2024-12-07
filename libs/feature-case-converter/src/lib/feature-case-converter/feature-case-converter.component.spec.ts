import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCaseConverterComponent } from './feature-case-converter.component';

describe('FeatureCaseConverterComponent', () => {
  let component: FeatureCaseConverterComponent;
  let fixture: ComponentFixture<FeatureCaseConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCaseConverterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCaseConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
