import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class MemberRegistrationService {

  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(user: Users):Observable<any>{
 return this._http.post("http://localhost:8090/login",user)
  }

  

  public RegisterUserFromRemote(user: Users):Observable<any>{
    return this._http.post("http://localhost:8090/registeruser",user)
      }
      
  public UpdateUserFromRemote(user: Users):Observable<any>{
        return this._http.post("http://localhost:8080/update",user)
          }

  public SubmitClaimsUserFromRemote(user: Users):Observable<any>{
      return this._http.post("http://localhost:8091/submitClaims",user)
              }
}
