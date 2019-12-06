import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  // connecting the backend by http requests to register the particular user
  private createUserurl$ = "registeruser"
  constructor(private http$: HttpClient) { }

  createUser(userData) {
    return this.http$.post<any>(this.createUserurl$, userData);
  }

}
