import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountPriceRangeComponent } from './account-price-range.component';

describe('PriceRangeComponent', () => {
  let component: AccountPriceRangeComponent;
  let fixture: ComponentFixture<AccountPriceRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountPriceRangeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountPriceRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
