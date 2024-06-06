import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@nx-demo/models';
import { ButtonComponent } from '@nx-demo/ui';
import { AccountPriceRangeComponent } from '@nx-demo/accounts-store-page-ui';
import { Account } from '@nx-demo/accounts-store-page-models';

@Component({
  selector: 'lib-feature-boosting-request',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './feature-boosting-request.component.html',
  styleUrl: './feature-boosting-request.component.css',
})
export class FeatureBoostingRequestComponent {
  user: User = {
    name: 'test',
    id: 'test',
  };
}
