import { Component, OnInit } from '@angular/core';
import { IntareaService } from 'src/app/servicios/intarea.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerTask',
  templateUrl: './headerTask.component.html',
  styleUrls: ['./headerTask.component.css']
})
export class HeaderTaskComponent implements OnInit {

  tituloEncabezado: string= "Lista de Tareas";
  showAddTask: boolean = false;
  subscription? : Subscription;
  
  constructor(
    private intareasservice: IntareaService,
    private router: Router) { 

    this.subscription= this.intareasservice.onToggle().subscribe(value => 
      this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.intareasservice.toggleAddTask();
  }

  hasRouter(route: string) {
    return this.router.url === route;
  }
}
