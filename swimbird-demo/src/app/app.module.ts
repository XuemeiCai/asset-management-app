import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DataViewPageComponent } from './components/data-view-page/data-view-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { NgApexchartsModule } from "ng-apexcharts";
import { FormsModule } from '@angular/forms';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { SortableTableComponent } from './components/sortable-table/sortable-table.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DataViewPageComponent,
    NavbarComponent,
    AreaChartComponent,
    SortableTableComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgApexchartsModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
