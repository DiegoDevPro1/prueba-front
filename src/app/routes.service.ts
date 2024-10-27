import { Injectable } from '@angular/core';
import { ModuleInterface } from './interfaces/routes/Module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  constructor(private http: HttpClient) {}

  loadRoutes(): Observable<ModuleInterface[]> {
    return this.http.get<ModuleInterface[]>('assets/routes.json');
  }
}
