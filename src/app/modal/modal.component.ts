import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  @Input()
  private modalData: any;

  private title: String;
  private text: String;


  constructor() {}

  ngOnInit() {
    this.title = this.modalData.title;
    this.text = this.modalData.text;
  }

}
