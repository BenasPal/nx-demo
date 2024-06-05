import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@nx-demo/models';
import { AccountPriceRangeComponent } from '@nx-demo/accounts-store-page-ui';
import { Account } from '@nx-demo/accounts-store-page-models';
import { ButtonComponent } from '@nx-demo/ui';

@Component({
  selector: 'lib-feature-boosting-request',
  standalone: true,
  imports: [CommonModule, AccountPriceRangeComponent, ButtonComponent],
  templateUrl: './feature-boosting-request.component.html',
  styleUrl: './feature-boosting-request.component.css',
})
export class FeatureBoostingRequestComponent {
  user: User = {
    name: 'test',
    id: 'test',
  };
  account: Account = {
    name: 'test',
    id: 'test',
  };
}
