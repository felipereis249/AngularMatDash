import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sideOpened = false;

  constructor() { }

  ngOnInit() {
  }

  // Flip the value 
  sideBarToggler() {
    this.sideOpened = ! this.sideOpened;
  }
}
