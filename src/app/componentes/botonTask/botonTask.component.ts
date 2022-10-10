import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botonTask',
  templateUrl: './botonTask.component.html',
  styleUrls: ['./botonTask.component.css']
})

export class BotonTaskComponent implements OnInit {

  @Input() text: string= "";
  @Input() color: string= "";
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }

}
