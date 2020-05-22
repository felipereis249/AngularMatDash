import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  @Input() data: [];

  Highcharts = Highcharts;
  chartOptions: {};

  constructor() { }

  ngOnInit() {

    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: true,
        outside: true
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        }
      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
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
