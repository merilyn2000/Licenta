import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UvIndexModel } from './uv-index.model';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { UvIndexService } from './uv-index.service';
import * as XLSX from 'xlsx';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uv-index',
  templateUrl: './uv-index.component.html',
  styleUrls: ['./uv-index.component.css'],
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
export class UvIndexComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('TABLE', { read: ElementRef }) table: ElementRef;

  public dataSource: MatTableDataSource<UvIndexModel>;
  public expandedElement: UvIndexModel | undefined;

  public pipe: DatePipe;

  public filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
  });

  public readonly displayedColumns: string[] = [
    'entry_id',
    'created_at',
    'field3',
  ];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];

  public get fromDate(): Date {
    return this.filterForm.get('fromDate')?.value;
  }
  public get toDate(): Date {
    return this.filterForm.get('toDate')?.value;
  }

  constructor(private uvIndexService: UvIndexService, private router: Router) {
    this.pipe = new DatePipe('en');

    this.uvIndexService.getUvIndexData().subscribe((data) => {
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

    const dataToExport = (this.dataSource.data as UvIndexModel[])
      .slice(startIndex, endIndex)
      .map((data: UvIndexModel) => {
        const { entry_id, field3, created_at } = data;

        return {
          entry_id,
          field3,
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
    if (value >= 0 && value <= 2)
      return 'Unless outdoors for extended periods, or near reflective surfaces such as snow or water.';
    else if (value >= 3 && value <= 5)
      return 'Slop on sunscreen, use sun protection factor ( SPF ) 30 for adults and 50 for children.';
    else if (value >= 6 && value <= 7)
      return 'Seek shade during midday hours. Slide on sunglasses, wraparound are best.';
    else if (value >= 8 && value <= 10)
      return 'Avoid being outside during midday hours. Make sure you seek shade.';
    else
      return 'Always wear sunscreen and protective clothing i.e. shirt, hat and sunglasses.';
  }

  public goToUvIndexMap() {
    this.router.navigate(['/uv-index-map']);
  }
}
