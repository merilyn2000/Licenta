import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { AirQualityMapHelper } from './air-quality-map.helper';
import { DatePipe } from '@angular/common';

@Injectable()
export class AirQualityMapService {
  constructor(private datepipe: DatePipe) {}

  public loadCircleMarkersForMockData(map: L.Map) {
    L.circleMarker([46.77, 23.62], {
      radius: 50,
      color: AirQualityMapHelper.getLevelColor('55'),
      fillColor: AirQualityMapHelper.getLevelColor('55'),
      fillOpacity: 0.8,
    })
      .bindPopup('')
      .setPopupContent(
        `${AirQualityMapHelper.getLevelText('55')}` +
          '<hr>' +
          AirQualityMapHelper.getLevelImage('55') +
          '<hr>' +
          `<h3><strong>Last update : ${this.datepipe.transform(
            new Date(),
            'MMM d, y, h:mm:ss a'
          )} </strong></h3>`
      )
      .openPopup()
      .addTo(map);

    L.circleMarker([46.773, 23.6172], {
      radius: 50,
      color: AirQualityMapHelper.getLevelColor('105'),
      fillColor: AirQualityMapHelper.getLevelColor('105'),
      fillOpacity: 0.8,
    })
      .bindPopup('')
      .setPopupContent(
        `${AirQualityMapHelper.getLevelText('105')}` +
          '<hr>' +
          AirQualityMapHelper.getLevelImage('105') +
          '<hr>' +
          `<h3><strong>Last update : ${this.datepipe.transform(
            new Date(),
            'MMM d, y, h:mm:ss a'
          )} </strong></h3>`
      )
      .openPopup()
      .addTo(map);

    L.circleMarker([46.773, 23.63], {
      radius: 50,
      color: AirQualityMapHelper.getLevelColor('155'),
      fillColor: AirQualityMapHelper.getLevelColor('155'),
      fillOpacity: 0.8,
    })
      .bindPopup('')
      .setPopupContent(
        `${AirQualityMapHelper.getLevelText('155')}` +
          '<hr>' +
          AirQualityMapHelper.getLevelImage('155') +
          '<hr>' +
          `<h3><strong>Last update : ${this.datepipe.transform(
            new Date(),
            'MMM d, y, h:mm:ss a'
          )} </strong></h3>`
      )
      .openPopup()
      .addTo(map);

    L.circleMarker([46.776, 23.634], {
      radius: 50,
      color: AirQualityMapHelper.getLevelColor('205'),
      fillColor: AirQualityMapHelper.getLevelColor('205'),
      fillOpacity: 0.8,
    })
      .bindPopup('')
      .setPopupContent(
        `${AirQualityMapHelper.getLevelText('205')}` +
          '<hr>' +
          AirQualityMapHelper.getLevelImage('205') +
          '<hr>' +
          `<h3><strong>Last update : ${this.datepipe.transform(
            new Date(),
            'MMM d, y, h:mm:ss a'
          )} </strong></h3>`
      )
      .openPopup()
      .addTo(map);

    L.circleMarker([46.78, 23.634], {
      radius: 50,
      color: AirQualityMapHelper.getLevelColor('305'),
      fillColor: AirQualityMapHelper.getLevelColor('305'),
      fillOpacity: 0.8,
    })
      .bindPopup('')
      .setPopupContent(
        `${AirQualityMapHelper.getLevelText('305')}` +
          '<hr>' +
          AirQualityMapHelper.getLevelImage('305') +
          '<hr>' +
          `<h3><strong>Last update : ${this.datepipe.transform(
            new Date(),
            'MMM d, y, h:mm:ss a'
          )} </strong></h3>`
      )
      .openPopup()
      .addTo(map);
  }
}
