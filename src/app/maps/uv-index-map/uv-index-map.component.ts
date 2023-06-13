import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { UvIndexService } from 'src/app/indexes/uv-index/uv-index.service';
import { UvIndexMapService } from './uv-index-map.service';

@Component({
  selector: 'app-uv-index-map',
  templateUrl: './uv-index-map.component.html',
  styleUrls: ['./uv-index-map.component.css'],
})
export class UvIndexMapComponent implements AfterViewInit {
  private map: L.Map;

  constructor(private uvIndexMapService: UvIndexMapService) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.uvIndexMapService.loadCircleMarkersForRealData(this.map);
    this.uvIndexMapService.loadCircleMarkersForMockData(this.map);
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
