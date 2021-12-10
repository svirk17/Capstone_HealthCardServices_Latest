import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option-buttons',
  templateUrl: './option-buttons.component.html',
  styleUrls: ['./option-buttons.component.css']
})
export class OptionButtonsComponent implements OnInit {

  @Input() text: string = "Create New Account";
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }
}
