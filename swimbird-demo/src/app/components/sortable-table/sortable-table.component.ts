import { Component, Input, OnInit } from '@angular/core';
import { BalanceData } from '../../models/BalanceData';
import { AppService } from '../../app.service';

@Component({
  selector: 'sortable-table',
  templateUrl: './sortable-table.component.html',
  styleUrls: ['./sortable-table.component.css']
})
export class SortableTableComponent implements OnInit{
  @Input() balanceData: BalanceData[];

  sortedData = [];
  currentSortField = '';
  isAscending = true;

  constructor(protected appService: AppService) {
  }

  ngOnInit(): void {
    this.sortedData = this.appService.getTableData();
    const sortState = this.appService.getSortState();
    this.currentSortField = sortState.sortField;
    this.isAscending = sortState.isAscending;

    if (this.sortedData.length === 0) {
      this.loadData();
    }
  }

  loadData(): void {
    const data = this.balanceData;
    this.sortedData = data;
    this.appService.updateTableData(data);

  }

  sortData(field: string) {
    if (this.currentSortField === field) {
      this.isAscending = !this.isAscending;
    } else {
      this.currentSortField = field;
      this.isAscending = true;
    }

    this.sortedData = this.balanceData.sort((a, b) => {
      if (a[field] < b[field]) {
        return this.isAscending ? -1 : 1;
      } else if (a[field] > b[field]) {
        return this.isAscending ? 1 : -1;
      } else {
        return 0;
      }
    });

    this.appService.updateSortState(this.currentSortField, this.isAscending);
  }

  getSortIcon(field: string): string {
    if (this.currentSortField !== field) {
      return '';
    }
    return this.isAscending ? 'bi bi-arrow-up' : 'bi bi-arrow-down';
  }


}
