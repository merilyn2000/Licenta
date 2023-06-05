import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AirQualityIndexComponent } from './indexes/air-quality-index/air-quality-index.component';
import { UvIndexComponent } from './indexes/uv-index/uv-index.component';
import { AirQualityIndexMapComponent } from './maps/air-quality-map/air-quality-map.component';
import { UvIndexMapComponent } from './maps/uv-index-map/uv-index-map.component';

const routes: Routes = [
  { path: '', component: AirQualityIndexComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'air-quality-index', component: AirQualityIndexComponent },
  { path: 'uv-index', component: UvIndexComponent },
  { path: 'air-quality-index-map', component: AirQualityIndexMapComponent },
  { path: 'uv-index-map', component: UvIndexMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
