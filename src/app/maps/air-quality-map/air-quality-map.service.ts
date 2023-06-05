import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { AirQualityMapHelper } from './air-quality-map.helper';
import { DatePipe } from '@angular/common';
import { AirQualityIndexService } from 'src/app/indexes/air-quality-index/air-quality-index.service';

@Injectable()
export class AirQualityMapService {
  constructor(
    private datepipe: DatePipe,
    private airQualityIndexService: AirQualityIndexService
  ) {}

  public loadCircleMarkersForRealData(
    lastRecordedValue: string,
    lastRecordedDate: Date,
    map: L.Map
  ) {
    this.airQualityIndexService
      .getAirQualityIndexData()
      .subscribe((response) => {
        let responseValues: string[] = [];
        let responseDates: Date[] = [];

        response.feeds.forEach((feed: any) => {
          responseValues.push(feed.field4);
          responseDates.push(feed.created_at);
        });

        lastRecordedValue = responseValues[responseValues.length - 1];
        lastRecordedDate = new Date(responseDates[responseDates.length - 1]);

        const circle = L.circleMarker([46.7784, 23.6172], {
          radius: 50,
          color: AirQualityMapHelper.getQualityIndexColor(lastRecordedValue),
          fillColor:
            AirQualityMapHelper.getQualityIndexColor(lastRecordedValue),
          fillOpacity: 0.4,
        });

        const popupContent =
          `${AirQualityMapHelper.getQualityIndexText(lastRecordedValue)}` +
          '<hr>' +
          AirQualityMapHelper.getQualityIndexImage(lastRecordedValue) +
          '<hr>' +
          AirQualityMapHelper.getQualityIndexDescription(lastRecordedValue) +
          '<hr>' +
          `<h4>
            Last update : ${this.datepipe.transform(
              lastRecordedDate,
              'MMM d, y, h:mm:ss a'
            )}
          </h4>`;

        circle.bindPopup(popupContent).openPopup().addTo(map);
      });
  }

  public loadCircleMarkersForMockData(map: L.Map) {
    L.circleMarker([46.77, 23.62], {
      radius: 50,
      color: AirQualityMapHelper.getQualityIndexColor('55'),
      fillColor: AirQualityMapHelper.getQualityIndexColor('55'),
      fillOpacity: 0.8,
    })
      .bindPopup('')
      .setPopupContent(
        `${AirQualityMapHelper.getQualityIndexText('55')}` +
          '<hr>' +
          AirQualityMapHelper.getQualityIndexImage('55') +
          '<hr>' +
          AirQualityMapHelper.getQualityIndexDescription('55') +
          '<hr>' +
          `<h3>Last update : ${this.datepipe.transform(
            new Date(),
            'MMM d, y, h:mm:ss a'
          )} </h3>`
      )
      .openPopup()
      .addTo(map);

    L.circleMarker([46.773, 23.6172], {
      radius: 50,
      color: AirQualityMapHelper.getQualityIndexColor('105'),
      fillColor: AirQualityMapHelper.getQualityIndexColor('105'),
      fillOpacity: 0.8,
    })
      .bindPopup('')
      .setPopupContent(
        `${AirQualityMapHelper.getQualityIndexText('105')}` +
          '<hr>' +
          AirQualityMapHelper.getQualityIndexImage('105') +
          '<hr>' +
          AirQualityMapHelper.getQualityIndexDescription('105') +
          '<hr>' +
          `<h3>Last update : ${this.datepipe.transform(
            new Date(),
            'MMM d, y, h:mm:ss a'
          )} </h3>`
      )
      .openPopup()
      .addTo(map);

    L.circleMarker([46.773, 23.63], {
      radius: 50,
      color: AirQualityMapHelper.getQualityIndexColor('155'),
      fillColor: AirQualityMapHelper.getQualityIndexColor('155'),
      fillOpacity: 0.8,
    })
      .bindPopup('')
      .setPopupContent(
        `${AirQualityMapHelper.getQualityIndexText('155')}` +
          '<hr>' +
          AirQualityMapHelper.getQualityIndexImage('155') +
          '<hr>' +
          AirQualityMapHelper.getQualityIndexDescription('155') +
          '<hr>' +
          `<h3>Last update : ${this.datepipe.transform(
            new Date(),
            'MMM d, y, h:mm:ss a'
          )} </h3>`
      )
      .openPopup()
      .addTo(map);

    L.circleMarker([46.776, 23.634], {
      radius: 50,
      color: AirQualityMapHelper.getQualityIndexColor('205'),
      fillColor: AirQualityMapHelper.getQualityIndexColor('205'),
      fillOpacity: 0.8,
    })
      .bindPopup('')
      .setPopupContent(
        `${AirQualityMapHelper.getQualityIndexText('205')}` +
          '<hr>' +
          AirQualityMapHelper.getQualityIndexImage('205') +
          '<hr>' +
          AirQualityMapHelper.getQualityIndexDescription('205') +
          '<hr>' +
          `<h3>Last update : ${this.datepipe.transform(
            new Date(),
            'MMM d, y, h:mm:ss a'
          )} </h3>`
      )
      .openPopup()
      .addTo(map);

    L.circleMarker([46.78, 23.634], {
      radius: 50,
      color: AirQualityMapHelper.getQualityIndexColor('305'),
      fillColor: AirQualityMapHelper.getQualityIndexColor('305'),
      fillOpacity: 0.8,
    })
      .bindPopup('')
      .setPopupContent(
        `${AirQualityMapHelper.getQualityIndexText('305')}` +
          '<hr>' +
          AirQualityMapHelper.getQualityIndexImage('305') +
          '<hr>' +
          AirQualityMapHelper.getQualityIndexDescription('305') +
          '<hr>' +
          `<h3>Last update : ${this.datepipe.transform(
            new Date(),
            'MMM d, y, h:mm:ss a'
          )} </h3>`
      )
      .openPopup()
      .addTo(map);
  }
}
