import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureBoostingRequestComponent } from './feature-boosting-request.component';

describe('FeatureBoostingRequestComponent', () => {
  let component: FeatureBoostingRequestComponent;
  let fixture: ComponentFixture<FeatureBoostingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureBoostingRequestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureBoostingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
