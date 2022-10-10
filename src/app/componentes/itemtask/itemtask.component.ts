import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tareas } from '../../Tareas';
import { TAREAS } from '../../mock-tareas';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-itemtask',
  templateUrl: './itemtask.component.html',
  styleUrls: ['./itemtask.component.css']
})
export class ItemtaskComponent implements OnInit {
  
  @Input() tareas: Tareas= TAREAS[0];
  @Output() onDeleteTarea: EventEmitter<Tareas>= new EventEmitter();
  @Output() modificaReminder : EventEmitter<Tareas> = new EventEmitter();

  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(tareas: Tareas) {
    this.onDeleteTarea.emit(tareas);    
  }
  
  cambiaReminder(tarea: Tareas) {
    this.modificaReminder.emit(tarea);
  }
}
