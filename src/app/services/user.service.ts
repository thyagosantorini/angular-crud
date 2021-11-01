import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/c48e73ca-6370-4a9b-9129-c6e6d868f394'

  constructor(private httpClient: HttpClient) { }

  // C.R.U.D. - CREATE, READ, UPDATE and DELETE

  // Retorna a lista de Usuários - READ
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }
}
