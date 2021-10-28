import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postUsers(body: any) {
    return this.http.post<any>('http://localhost:3000/posts', body);
  }

  getUsers() {

    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
  
  updateUsers() {
    const putBody = {
      name: 'sathiyapriya',
      userId: 100
    };
    return this.http.put('https://jsonplaceholder.typicode.com/photos/1', putBody);
  }
}