import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo : 'auth', pathMatch : 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'statics', loadChildren: './statics/statics.module#StaticsModule' },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash : true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
