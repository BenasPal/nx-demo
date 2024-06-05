import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { User } from '@nx-demo/models';
import { ButtonComponent } from '@nx-demo/ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  user: User = {
    name: 'test',
    id: 'test',
  };

  title = 'admin';
}
