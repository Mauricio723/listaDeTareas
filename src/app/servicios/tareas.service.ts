import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Tareas } from '../Tareas';
import { TAREAS } from '../mock-tareas';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type' : 'application/json'
  })

}
@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private apiUrl = "http://localhost:5000/tareas";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Tareas[]> {
    return this.http.get<Tareas[]>(this.apiUrl);
  }

  deleteTarea(tareas: Tareas): Observable<Tareas> {
    const url = this.apiUrl + "/" + tareas.id;       
    return this.http.delete<Tareas>(url);        
  }

  actualizaReminder(tareas: Tareas): Observable<Tareas> {
    const url = this.apiUrl + "/" + tareas.id;
    
    return this.http.put<Tareas>(url, tareas, httpOptions);
  }

  agregarTarea(tareas: Tareas): Observable<Tareas> {
    return this.http.post<Tareas>(this.apiUrl, tareas, httpOptions);
  }  

}
