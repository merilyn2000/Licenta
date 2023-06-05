import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { DatePipe } from '@angular/common';
import { UvIndexService } from 'src/app/indexes/uv-index/uv-index.service';
import { UvIndexMapHelper } from './uv-index-map.helper';

@Injectable()
export class UvIndexMapService {
  constructor(
    private datepipe: DatePipe,
    private uvIndexService: UvIndexService
  ) {}

  public loadCircleMarkersForRealData(
    lastRecordedValue: string,
    lastRecordedDate: Date,
    map: L.Map
  ) {
    this.uvIndexService.getUvIndexData().subscribe((response) => {
      let responseValues: string[] = [];
      let responseDates: Date[] = [];

      response.feeds.forEach((feed: any) => {
        responseValues.push(feed.field3);
        responseDates.push(feed.created_at);
      });

      lastRecordedValue = responseValues[responseValues.length - 1];
      lastRecordedDate = new Date(responseDates[responseDates.length - 1]);

      const circle = L.circle([46.7784, 23.6172], {
        radius: 5000,
        color: UvIndexMapHelper.getQualityIndexColor(lastRecordedValue),
        fillColor: UvIndexMapHelper.getQualityIndexColor(lastRecordedValue),
        fillOpacity: 0.6,
      });

      const popupContent =
        `${UvIndexMapHelper.getQualityIndexText(lastRecordedValue)}` +
        '<hr>' +
        UvIndexMapHelper.getQualityIndexImage(lastRecordedValue) +
        '<hr>' +
        UvIndexMapHelper.getQualityIndexDescription(lastRecordedValue) +
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
    L.circle([46.65, 23.62], {
      radius: 5000,
      color: UvIndexMapHelper.getQualityIndexColor('3'),
      fillColor: UvIndexMapHelper.getQualityIndexColor('3'),
      fillOpacity: 0.6,
    })
      .bindPopup('')
      .setPopupContent(
        `${UvIndexMapHelper.getQualityIndexText('3')}` +
          '<hr>' +
          UvIndexMapHelper.getQualityIndexImage('3') +
          '<hr>' +
          UvIndexMapHelper.getQualityIndexDescription('3') +
          '<hr>' +
          `<h3>Last update : ${this.datepipe.transform(
            new Date(),
            'MMM d, y, h:mm:ss a'
          )} </h3>`
      )
      .openPopup()
      .addTo(map);

    L.circle([46.33, 23.6172], {
      radius: 5000,
      color: UvIndexMapHelper.getQualityIndexColor('6'),
      fillColor: UvIndexMapHelper.getQualityIndexColor('6'),
      fillOpacity: 0.6,
    })
      .bindPopup('')
      .setPopupContent(
        `${UvIndexMapHelper.getQualityIndexText('6')}` +
          '<hr>' +
          UvIndexMapHelper.getQualityIndexImage('6') +
          '<hr>' +
          UvIndexMapHelper.getQualityIndexDescription('6') +
          '<hr>' +
          `<h3>Last update : ${this.datepipe.transform(
            new Date(),
            'MMM d, y, h:mm:ss a'
          )} </h3>`
      )
      .openPopup()
      .addTo(map);

    L.circle([46.773, 23.22], {
      radius: 5000,
      color: UvIndexMapHelper.getQualityIndexColor('8'),
      fillColor: UvIndexMapHelper.getQualityIndexColor('8'),
      fillOpacity: 0.6,
    })
      .bindPopup('')
      .setPopupContent(
        `${UvIndexMapHelper.getQualityIndexText('8')}` +
          '<hr>' +
          UvIndexMapHelper.getQualityIndexImage('8') +
          '<hr>' +
          UvIndexMapHelper.getQualityIndexDescription('8') +
          '<hr>' +
          `<h3>Last update : ${this.datepipe.transform(
            new Date(),
            'MMM d, y, h:mm:ss a'
          )} </h3>`
      )
      .openPopup()
      .addTo(map);

    L.circle([46.55, 23.7], {
      radius: 5000,
      color: UvIndexMapHelper.getQualityIndexColor('11'),
      fillColor: UvIndexMapHelper.getQualityIndexColor('11'),
      fillOpacity: 0.6,
    })
      .bindPopup('')
      .setPopupContent(
        `${UvIndexMapHelper.getQualityIndexText('11')}` +
          '<hr>' +
          UvIndexMapHelper.getQualityIndexImage('11') +
          '<hr>' +
          UvIndexMapHelper.getQualityIndexDescription('11') +
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
