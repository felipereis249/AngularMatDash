import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  // Return Data for the big Area Chart
  areaChart() {
    return [{
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'South',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  };

  // Return data for Cards charts
  cardChart() {
    return [
      {
        name: "Calls",
        data: [10, 20, 15, 49]
      }
    ];
  };

  // Return data for Pie chart
  pieChart() {
    return [{
      name: 'Types',
      colorByPoint: true,
      data: [{
        name: 'Opened',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: 'Solved',
        y: 11.84
      }, {
        name: 'Analisys',
        y: 10.85
      }, {
        name: 'Closed',
        y: 4.67
      }, {
        name: 'Stand by',
        y: 4.18
      }, {
        name: 'Other',
        y: 7.05
      }]
    }]
  };

}
