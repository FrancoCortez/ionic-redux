import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private readonly http: HttpClient) { }

  public login(login?: any): Observable<boolean | any> {
    return of('logeado');
  }
}
