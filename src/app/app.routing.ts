import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' }
];
