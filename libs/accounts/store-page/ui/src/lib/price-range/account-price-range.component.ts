import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@nx-demo/models';

@Component({
  selector: 'lib-account-price-range',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-price-range.component.html',
  styleUrl: './account-price-range.component.css',
})
export class AccountPriceRangeComponent {
  user: User = {
    name: 'test',
    id: 'test',
  };
}
