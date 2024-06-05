import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@nx-demo/models';

@Component({
  selector: 'lib-price-range',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-range.component.html',
  styleUrl: './price-range.component.css',
})
export class PriceRangeComponent {
  user: User = {
    name: 'test',
    id: 'test',
  };
}
