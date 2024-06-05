import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountsStorePageFeatureListComponent } from './accounts-store-page-feature-list.component';

describe('AccountsStorePageFeatureListComponent', () => {
  let component: AccountsStorePageFeatureListComponent;
  let fixture: ComponentFixture<AccountsStorePageFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsStorePageFeatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountsStorePageFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
