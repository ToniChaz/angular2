import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  title = 'Tour of Heroes';
  modalData = {title: 'Modal Title', text: 'This is the example modal body text.'};

  constructor() {
  }

  ngOnInit() {
  }


}
