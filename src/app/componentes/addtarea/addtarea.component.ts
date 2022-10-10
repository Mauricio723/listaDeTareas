import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { IntareaService } from 'src/app/servicios/intarea.service';
import { Tareas } from 'src/app/Tareas';

@Component({
  selector: 'app-addtarea',
  templateUrl: './addtarea.component.html',
  styleUrls: ['./addtarea.component.css']
})
export class AddtareaComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Tareas> = new EventEmitter();

  textoTarea: string= "";
  textoDia: string= "";
  reminder: boolean= false;
  showAddTask: boolean = false;
  subcription? : Subscription;

  constructor(private intareaservice: IntareaService) {
    this.subcription= this.intareaservice.onToggle().subscribe(value =>
      this.showAddTask= value);
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.textoTarea.length === 0) {
      alert("Debe ingresar una tarea");
    }
    const {textoTarea, textoDia, reminder} = this
    const nuevaTarea = {textoTarea, textoDia, reminder};

    this.onAddTask.emit(nuevaTarea);
  }

}
