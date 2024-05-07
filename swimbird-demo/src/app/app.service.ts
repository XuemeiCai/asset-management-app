import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  BALANCE_DATA_URL = "https://private-9b37c2-wlb.apiary-mock.com/accounts?ccy=SEK";
  private tableDataSubject = new BehaviorSubject<any[]>([]);
  private sortStateSubject = new BehaviorSubject<{ sortField: string; isAscending: boolean }>({ sortField: '', isAscending: true });

  tableData: Observable<any[]> = this.tableDataSubject.asObservable();
  sortState: Observable<{ sortField: string; isAscending: boolean }> = this.sortStateSubject.asObservable();
  balanceData : any;

  constructor(private httpClient: HttpClient) {}

  getBalanceData() {
    return this.httpClient.get(this.BALANCE_DATA_URL);
  }

  updateTableData(data: any[]): void {
    this.tableDataSubject.next(data);
  }

  updateSortState(sortField: string, isAscending: boolean): void {
    this.sortStateSubject.next({ sortField, isAscending });
  }

  getTableData(): any[] {
    return this.tableDataSubject.getValue();
  }

  getSortState() {
    return this.sortStateSubject.getValue();
  }

  clearState(): void {
    this.tableDataSubject.next([]);
    this.sortStateSubject.next({ sortField: '', isAscending: true }); // Reset sort state
    this.balanceData = null;
  }


}
