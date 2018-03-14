import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo : 'auth', pathMatch : 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
