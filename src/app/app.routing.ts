import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', children: [
    { path: '', component: AdminComponent },
    { path: 'dashboard', component: DashboardComponent }
  ]}
];
