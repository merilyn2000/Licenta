import { DatePipe } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { AirQualityIndexService } from 'src/app/indexes/air-quality-index/air-quality-index.service';
import { AirQualityMapHelper } from './air-quality-map.helper';
import { AirQualityMapService } from './air-quality-map.service';

@Component({
  selector: 'app-air-quality-map',
  templateUrl: './air-quality-map.component.html',
  styleUrls: ['./air-quality-map.component.css'],
})
export class AirQualityIndexMapComponent implements AfterViewInit {
  private map: L.Map;
  private lastRecordedValue: string;
  private lastRecordedDate: Date;

  constructor(private airQualityMapService: AirQualityMapService) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.airQualityMapService.loadCircleMarkersForRealData(
      this.lastRecordedValue,
      this.lastRecordedDate,
      this.map
    );
    this.airQualityMapService.loadCircleMarkersForMockData(this.map);
  }

  private initMap() {
    this.map = L.map('map').setView([46.7784, 23.6172], 15);

    const titles = L.tileLayer(
      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );

    titles.addTo(this.map);
  }
}
