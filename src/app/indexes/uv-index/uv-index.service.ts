import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UvIndexService {
  constructor(private http: HttpClient) {}

  public getUvIndexData(): Observable<any> {
    return this.http.get(
      'https://api.thingspeak.com/channels/1974961/field/3.json'
    );
  }
}
