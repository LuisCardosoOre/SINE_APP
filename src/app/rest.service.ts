import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';

const apiUrl = 'https://api.myjson.com/bins/';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }


  getUsers() {
    return new Promise(resolve => {
      this.http.get(apiUrl + 'l6xc0').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}