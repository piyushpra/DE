import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class ConnectionService {

  // baseUrl: string = "jdbc:mysql://localhost:3306";
  baseUrl: string = "http://localhost:3306";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

}