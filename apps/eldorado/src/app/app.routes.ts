import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  { path: '', component: NxWelcomeComponent, pathMatch: 'full' },
  {
    path: 'accounts',
    loadComponent: () =>
      import('@nx-demo/accounts-store-page-feature-list').then(
        (c) => c.AccountsStorePageFeatureListComponent
      ),
  },
];
