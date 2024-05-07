import { Component, OnInit } from '@angular/core';
import { BalanceData } from '../../models/BalanceData';
import { AppService } from '../../app.service';

@Component({
  selector: 'data-view-page',
  templateUrl: './data-view-page.component.html',
  styleUrls: ['./data-view-page.component.css']
})
export class DataViewPageComponent implements OnInit{


  balanceData: any;
  showLoader = false;
  showPlaceholder: boolean;
  constructor(protected appService: AppService) {

  }

  ngOnInit(): void {
    if(this.appService.balanceData) {
      this.balanceData = this.appService.balanceData;
    }
  }

  gatherData() {
    this.showLoader = true;
    this.balanceData = null;
    this.appService.clearState()
    this.appService.getBalanceData().subscribe(
      (res) => {
        this.balanceData = res;
        this.appService.balanceData = res;
        this.showLoader = false;
        this.showPlaceholder = false;
      },
      (err) => {
        this.showLoader = false;
        console.error('Error:', err);
      }
    )
  }




}
