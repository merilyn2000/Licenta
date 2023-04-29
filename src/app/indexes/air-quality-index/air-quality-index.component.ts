import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AirQualityIndexModel } from './air-quality-index.model';
import { AirQualityIndexService } from './air-quality-index.service';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-air-quality-index',
  templateUrl: './air-quality-index.component.html',
  styleUrls: ['./air-quality-index.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class AirQualityIndexComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('TABLE', { read: ElementRef }) table: ElementRef;

  public dataSource: MatTableDataSource<AirQualityIndexModel>;
  public expandedElement: AirQualityIndexModel | undefined;

  public pipe: DatePipe;

  public filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
  });

  public readonly displayedColumns: string[] = [
    'entry_id',
    'created_at',
    'field4',
  ];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];

  public get fromDate(): Date {
    return this.filterForm.get('fromDate')?.value;
  }
  public get toDate(): Date {
    return this.filterForm.get('toDate')?.value;
  }

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
    const currentPageSize = this.paginator.pageSize;
    const startIndex = this.paginator.pageIndex * currentPageSize;
    const endIndex = startIndex + currentPageSize;

    const dataToExport = (this.dataSource.data as AirQualityIndexModel[])
      .slice(startIndex, endIndex)
      .map((data: AirQualityIndexModel) => {
        const { entry_id, field4, created_at } = data;

        return {
          entry_id,
          field4,
          created_at: new Date(created_at).toLocaleString(),
        };
      });

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);

    ws['A1'].v = 'ID';
    ws['B1'].v = 'Index value';
    ws['C1'].v = 'Creation date and time';

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }

  public getColumnsTranslations(column: string): string {
    if (column === 'entry_id') return 'Id';
    if (column === 'created_at') return 'Creation date and time';
    return 'Index value';
  }

  public getIndexesDescriptions(value: number): string {
    if (value >= 0 && value < 50)
      return 'Air quality is considered satisfactory, and air pollution poses little or no risk';
    else if (value > 50 && value < 100)
      return 'Air quality is acceptable. However, for some pollutans there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution';
    else if (value > 100 && value < 150)
      return 'Members of sensitive groups may experience health effects. The general public is not likely to be affected';
    else if (value > 150 && value < 200)
      return 'Everyone may begin to experience health effects. Members of sensitive groups may experience more serious health effects';
    else if (value > 200 && value < 300)
      return 'Health warnings of emergency conditions. The entire population is more likely to be affected';
    else
      return 'Health alert: everyone may experience more serios health effects';
  }
}
