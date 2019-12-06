import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iuser } from './display-users/users';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DisplayUserService {


// HTTP get, put and delete request to fetch , update and delete the users..
private _url= 'getallusers';

  constructor(private $http: HttpClient) {}

  displayUsers():Observable<Iuser[]> {
    return this.$http.get<Iuser[]>(this._url)
  }

  getUser(sno): Observable<Iuser> {
    const _getUserurl = `getuser/${sno}`
    return this.$http.get<any>(_getUserurl);
  }

  updateUser(data): Observable<any> {
    const _updateUserurl = `updateuser`
    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json'})
    };
    return this.$http.put(`${_updateUserurl}/${data.sno}`, data, httpOptions )
  }

  deleteUser(data): Observable<any>{
    const _deleteUserurl = `deleteuser`;
    return this.$http.delete(`${_deleteUserurl}/${data.sno}`)
  }
}
