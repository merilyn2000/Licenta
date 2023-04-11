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

  constructor(
    private airQualityIndexService: AirQualityIndexService,
    private datepipe: DatePipe,
    private airQualityMapService: AirQualityMapService
  ) {}

  lastRecordedValue: string;
  lastRecordedDate: Date;

  ngAfterViewInit(): void {
    this.loadCircleMarkersForRealData();
    this.initMap();
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

  private loadCircleMarkersForRealData() {
    this.airQualityIndexService
      .getAirQualityIndexData()
      .subscribe((response) => {
        let responseValues: string[] = [];
        let responseDates: Date[] = [];

        response.feeds.forEach((feed: any) => {
          responseValues.push(feed.field4);
          responseDates.push(feed.created_at);
        });

        this.lastRecordedValue = responseValues[responseValues.length - 1];
        this.lastRecordedDate = new Date(
          responseDates[responseDates.length - 1]
        );

        const circle = L.circleMarker([46.7784, 23.6172], {
          radius: 50,
          color: AirQualityMapHelper.getLevelColor(this.lastRecordedValue),
          fillColor: AirQualityMapHelper.getLevelColor(this.lastRecordedValue),
          fillOpacity: 0.8,
        });

        circle
          .bindPopup('')
          .setPopupContent(
            `${AirQualityMapHelper.getLevelText(this.lastRecordedValue)}` +
              '<hr>' +
              AirQualityMapHelper.getLevelImage(this.lastRecordedValue) +
              '<hr>' +
              `<h3><strong>Last update : ${this.datepipe.transform(
                this.lastRecordedDate,
                'MMM d, y, h:mm:ss a'
              )} </strong></h3>`
          )
          .openPopup();

        circle.addTo(this.map);
      });
  }
}
