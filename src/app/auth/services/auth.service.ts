import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/User';
import { Login } from '../../interfaces/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  API_URL='http://localhost:3000/';


  login(email: string, password: string): Observable<any>{
    return this.http.post<any>(this.API_URL + 'auth/login', {email, password})
  }

  register(user: User): Observable<User[]>{
    return this.http.post<User[]>(this.API_URL + 'users', user)
  }

  getUsers(): Observable<User[]>{

    return this.http.get<User[]>(this.API_URL + 'users')

  }
}
