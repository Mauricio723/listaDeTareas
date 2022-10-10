import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../servicios/tareas.service';
import { Tareas } from '../../Tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})

export class TareasComponent implements OnInit {

  tareas: Tareas[] = [];
  
  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {   
        this.tareasService.getTasks().subscribe( tareas => 
      this.tareas = tareas 
    );
  }  

  deleteTarea(tareas: Tareas) {
    this.tareasService.deleteTarea(tareas).subscribe(
       () => {
       this.tareas = this.tareas.filter( (t) => t.id !== tareas.id
          )});               
  }

  cambiaReminder(tareas: Tareas) {
    tareas.reminder= !tareas.reminder;
    this.tareasService.actualizaReminder(tareas).subscribe();
  }

  agregarTarea(tareas: Tareas) {
    this.tareasService.agregarTarea(tareas).subscribe(tareas => 
      (this.tareas.push(tareas)));
  }
  
}
