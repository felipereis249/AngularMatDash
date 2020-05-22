import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  @Input() data: [];

  Highcharts = Highcharts;
  chartOptions: {};

  constructor() { }

  ngOnInit() {

    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Status Protocol'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    credits: {
       enabled: false
    },
    exporting: {
      enabled: true
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: this.data,
    };

    // Enables the exporting options menu
    HC_exporting(this.Highcharts)

    // Just adjustments for improve UX
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, (300));
  }
}
