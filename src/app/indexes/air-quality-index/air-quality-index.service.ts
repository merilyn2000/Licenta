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


// public getAirQualityIndexData(
//   dataSource: MatTableDataSource<AirQualityIndexModel>,
//   fromDate: Date,
//   toDate: Date,
//   paginator: MatPaginator,
//   sort: MatSort
// ) {
//   return this.http
//     .get('https://api.thingspeak.com/channels/1974961/field/4.json')
//     .subscribe((data: any) => {
//       dataSource = new MatTableDataSource(data.feeds);

//       dataSource.data.forEach(
//         (x) => (x.created_at = new Date(x.created_at.toLocaleString()))
//       );

//       dataSource.filterPredicate = (data) => {
//         if (fromDate && toDate) {
//           return data.created_at >= fromDate && data.created_at <= toDate;
//         }
//         return true;
//       };

//       dataSource.paginator = paginator;
//       dataSource.sort = sort;
//     });
// }
