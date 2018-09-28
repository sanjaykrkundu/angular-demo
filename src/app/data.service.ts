import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getEmps(){
    return this.http.get('/v/users');
  }

  getEmp(id){
    console.log(id);
    return this.http.get("v/users/1");
  }
}
