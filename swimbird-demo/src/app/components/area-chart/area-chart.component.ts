import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  colors: string[]
};

@Component({
  selector: 'area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
  @ViewChild("chart") chart: ChartComponent;

  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Balance",
          data: [1231.11, 14578.32, 534.23, 8585.55, 867.65, 16459.30, 12000.40,15000.00]
        },
        {
          name: "Investment",
          data: [150.11, 4978.32, 234.23, 6585.55, 267.65, 6459.30, 8000.40,5000.00]
        }
      ],
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false
        }
      },
      colors: ['#EC8F5E', '#50C4ED'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          borderRadius: 20,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: false,
        formatter: function(val) {
          return val + "SEK";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [
          "Jan.",
          "Feb.",
          "Mar.",
          "Apr.",
          "May.",
          "Jun.",
          "Jul.",
          "Aug."
        ],
        position: "bottom",
        labels: {
          offsetY: 0
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        opacity: 0.2,
        type: 'solid',
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: true
        },
        labels: {
          show: false,
          formatter: function(val) {
            return val + "SEK";
          }
        }
      },
      title: {
        text: "Monthly Balance",
        offsetY: 0,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  get series(){
    return [
      {
        name: "Balance",
        data: [1231.11, 14578.32, 534.23, 8585.55, 867.65]
      }
    ]
  }

}
