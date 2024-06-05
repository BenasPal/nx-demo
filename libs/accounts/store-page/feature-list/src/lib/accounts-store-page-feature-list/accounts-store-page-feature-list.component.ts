import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StorePageService } from '@nx-demo/accounts-store-page-data-access';
import { Account } from '@nx-demo/accounts-store-page-models';
import { PriceRangeComponent } from '@nx-demo/accounts-store-page-ui';
import { User } from '@nx-demo/models';

@Component({
  selector: 'lib-accounts-store-page-feature-list',
  standalone: true,
  imports: [CommonModule, PriceRangeComponent],
  templateUrl: './accounts-store-page-feature-list.component.html',
  styleUrl: './accounts-store-page-feature-list.component.css',
})
export class AccountsStorePageFeatureListComponent {
  user: User = {
    name: 'test',
    id: 'test',
  };

  account: Account = {
    name: 'test',
    id: 'test',
  };
  constructor(private service: StorePageService) {}
}
