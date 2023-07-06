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

  public loadCircleMarkersForRealData(map: L.Map) {
    this.uvIndexService.getUvIndexData().subscribe((response) => {
      let responseValues: string[] = [];
      let responseDates: Date[] = [];

      response.feeds.forEach((feed: any) => {
        responseValues.push(feed.field3);
        responseDates.push(feed.created_at);
      });

      const lastRecordedValue = responseValues[responseValues.length - 1];
      const lastRecordedDate = new Date(
        responseDates[responseDates.length - 1]
      );

      const circle = L.circle([46.7784, 23.6172], {
        radius: 5000,
        color: UvIndexMapHelper.getUVIndexColor(lastRecordedValue),
        fillColor: UvIndexMapHelper.getUVIndexColor(lastRecordedValue),
        fillOpacity: 0.6,
      });

      const popupContent =
        `${UvIndexMapHelper.getUVIndexText(lastRecordedValue)}` +
        '<hr>' +
        UvIndexMapHelper.getUVIndexImage(lastRecordedValue) +
        '<hr>' +
        UvIndexMapHelper.getUVIndexDescription(lastRecordedValue) +
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
      color: UvIndexMapHelper.getUVIndexColor('3'),
      fillColor: UvIndexMapHelper.getUVIndexColor('3'),
      fillOpacity: 0.6,
    })
      .bindPopup('')
      .setPopupContent(
        `${UvIndexMapHelper.getUVIndexText('3')}` +
          '<hr>' +
          UvIndexMapHelper.getUVIndexImage('3') +
          '<hr>' +
          UvIndexMapHelper.getUVIndexDescription('3') +
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
      color: UvIndexMapHelper.getUVIndexColor('6'),
      fillColor: UvIndexMapHelper.getUVIndexColor('6'),
      fillOpacity: 0.6,
    })
      .bindPopup('')
      .setPopupContent(
        `${UvIndexMapHelper.getUVIndexText('6')}` +
          '<hr>' +
          UvIndexMapHelper.getUVIndexImage('6') +
          '<hr>' +
          UvIndexMapHelper.getUVIndexDescription('6') +
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
      color: UvIndexMapHelper.getUVIndexColor('8'),
      fillColor: UvIndexMapHelper.getUVIndexColor('8'),
      fillOpacity: 0.6,
    })
      .bindPopup('')
      .setPopupContent(
        `${UvIndexMapHelper.getUVIndexText('8')}` +
          '<hr>' +
          UvIndexMapHelper.getUVIndexImage('8') +
          '<hr>' +
          UvIndexMapHelper.getUVIndexDescription('8') +
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
      color: UvIndexMapHelper.getUVIndexColor('11'),
      fillColor: UvIndexMapHelper.getUVIndexColor('11'),
      fillOpacity: 0.6,
    })
      .bindPopup('')
      .setPopupContent(
        `${UvIndexMapHelper.getUVIndexText('11')}` +
          '<hr>' +
          UvIndexMapHelper.getUVIndexImage('11') +
          '<hr>' +
          UvIndexMapHelper.getUVIndexDescription('11') +
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
