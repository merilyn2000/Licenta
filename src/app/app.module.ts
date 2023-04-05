import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AirQualityIndexComponent } from './indexes/air-quality-index/air-quality-index.component';
import { UvIndexComponent } from './indexes/uv-index/uv-index.component';
import { AirQualityIndexService } from './indexes/air-quality-index/air-quality-index.service';
import { UVIndexService } from './indexes/uv-index/uv-index.service';
import { AngularMaterialModule } from './shared/angular-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    AirQualityIndexComponent,
    UvIndexComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],

  providers: [AirQualityIndexService, UVIndexService, MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
