import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AirQualityIndexService {
  constructor(private http: HttpClient) {}

  public getAirQualityIndexData(): Observable<any> {
    return this.http.get(
      'https://api.thingspeak.com/channels/1974961/field/4.json'
    );
  }
}
