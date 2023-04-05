import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AirQualityIndexModel } from './air-quality-index.model';
import { AirQualityIndexService } from './air-quality-index.service';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-air-quality-index',
  templateUrl: './air-quality-index.component.html',
  styleUrls: ['./air-quality-index.component.css'],
})
export class AirQualityIndexComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('TABLE',{ read: ElementRef }) table: ElementRef;

  public pipe: DatePipe;

  public filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
  });

  public get fromDate(): Date {
    return this.filterForm.get('fromDate')?.value;
  }
  public get toDate(): Date {
    return this.filterForm.get('toDate')?.value;
  }

  public readonly displayedColumns: string[] = [
    'entry_id',
    'created_at',
    'field4',
    'imageUrl',
  ];
  dataSource: MatTableDataSource<AirQualityIndexModel>;

  constructor(private airQualityIndexService: AirQualityIndexService) {
    this.pipe = new DatePipe('en');

    this.airQualityIndexService.getAirQualityIndexData().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data.feeds);

      this.dataSource.data.forEach(
        (x) => (x.created_at = new Date(x.created_at.toLocaleString()))
      );

      this.dataSource.filterPredicate = (data) => {
        if (this.fromDate && this.toDate) {
          return (
            data.created_at >= this.fromDate && data.created_at <= this.toDate
          );
        }
        return true;
      };

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public applyFilter() {
    this.dataSource.filter = '' + Math.random();
  }

  public ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.table.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }
}
