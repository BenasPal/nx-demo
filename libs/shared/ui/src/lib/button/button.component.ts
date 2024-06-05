import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AccountPriceRangeComponent } from '@nx-demo/accounts-store-page-ui';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {}
