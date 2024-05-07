import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { BalanceData } from './models/BalanceData';
import { BalanceDataFilterField } from './models/BalanceDataFilterField';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  BALANCE_DATA_URL = "https://private-9b37c2-wlb.apiary-mock.com/accounts?ccy=SEK";
  private tableDataSubject = new BehaviorSubject<BalanceData[]>([]);
  private sortStateSubject = new BehaviorSubject<{ sortField:  BalanceDataFilterField; isAscending: boolean }>({ sortField: BalanceDataFilterField.empty, isAscending: true });

  tableData: Observable<BalanceData[]> = this.tableDataSubject.asObservable();
  sortState: Observable<{ sortField: BalanceDataFilterField; isAscending: boolean }> = this.sortStateSubject.asObservable();
  balanceData : BalanceData[];

  constructor(private httpClient: HttpClient) {}

  getBalanceData() {
    return this.httpClient.get<BalanceData[]>(this.BALANCE_DATA_URL);
  }

  updateTableData(data: BalanceData[]): void {
    this.tableDataSubject.next(data);
  }

  updateSortState(sortField:  BalanceDataFilterField, isAscending: boolean): void {
    this.sortStateSubject.next({ sortField, isAscending });
  }

  getTableData(): BalanceData[] {
    return this.tableDataSubject.getValue();
  }

  getSortState() {
    return this.sortStateSubject.getValue();
  }

  clearState(): void {
    this.tableDataSubject.next([]);
    this.sortStateSubject.next({ sortField:  BalanceDataFilterField.empty, isAscending: true }); // Reset sort state
    this.balanceData = null;
  }


}
