import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { HeaderTaskComponent } from './componentes/headerTask/headerTask.component';
import { BotonTaskComponent } from '././componentes/botonTask/botonTask.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { ItemtaskComponent } from './componentes/itemtask/itemtask.component';
import { AddtareaComponent } from './componentes/addtarea/addtarea.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { MyfooterComponent } from './componentes/myfooter/myfooter.component';

const appRoutes: Routes = [
  {path: "", component: TareasComponent},
  {path: "acercade", component: AcercadeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderTaskComponent,
    BotonTaskComponent,
    TareasComponent,
    ItemtaskComponent,
    AddtareaComponent,
    AcercadeComponent,
    MyfooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
