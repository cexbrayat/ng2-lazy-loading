import { Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

export const routes = [
  { path: '', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent }
];
