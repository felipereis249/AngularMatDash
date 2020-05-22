import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Toggle the sidebar (hide/show)
  toggleSideBar() {

    // Emit the event when the button is clicked
    this.toggleSideBarForMe.emit();

    // Just adjustments for improve UX
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, (300));
  }
}
