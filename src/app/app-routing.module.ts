import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AirQualityIndexComponent } from './indexes/air-quality-index/air-quality-index.component';
import { UvIndexComponent } from './indexes/uv-index/uv-index.component';

const routes: Routes = [
  // { path: '', component: AirQualityIndexComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'air-quality-index', component: AirQualityIndexComponent },
  { path: 'uv-index', component: UvIndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
