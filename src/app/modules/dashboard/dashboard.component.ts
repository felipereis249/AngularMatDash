import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  areaChart = [];
  cardChart = [];
  pieChart = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.areaChart = this.dashboardService.areaChart();
    this.cardChart = this.dashboardService.cardChart();
    this.pieChart = this.dashboardService.pieChart();
  }

}
