import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AirQualityIndexComponent } from './indexes/air-quality-index/air-quality-index.component';
import { UvIndexComponent } from './indexes/uv-index/uv-index.component';
import { AirQualityIndexService } from './indexes/air-quality-index/air-quality-index.service';
import { UvIndexService } from './indexes/uv-index/uv-index.service';
import { AngularMaterialModule } from './shared/angular-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AirQualityIndexMapComponent } from './maps/air-quality-map/air-quality-map.component';
import { AirQualityMapService } from './maps/air-quality-map/air-quality-map.service';
import { UvIndexMapComponent } from './maps/uv-index-map/uv-index-map.component';
import { UvIndexMapService } from './maps/uv-index-map/uv-index-map.service';

@NgModule({
  declarations: [
    AppComponent,
    AirQualityIndexComponent,
    UvIndexComponent,
    DashboardComponent,
    AirQualityIndexMapComponent,
    UvIndexMapComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NoopAnimationsModule,
  ],

  providers: [AirQualityIndexService, UvIndexService, MatDatepickerModule, DatePipe, AirQualityMapService, UvIndexMapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
