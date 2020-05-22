import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions: {};

  @Input() data = [];

  constructor() {
  }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Area Chart Demo'
      },
      subtitle: {
        text: 'Just a subtitle'
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      plotOptions: {
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666'
          }
        }
      },
      series: this.data,
    };
    // Enables the exporting options menu
    HC_exporting(Highcharts);

    // Just adjustments for improve UX
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, (300));
    console.log(this.data);
  }

}
