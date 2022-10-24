import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of} from "rxjs";
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly baseURL = 'https://minicoreudla202310camh.onrender.com';

  constructor(private _httpClient: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    const url = this.baseURL;
    return this._httpClient.get<User[]>(`${url}/api/users`);
  }

  public getUser(id: any): Observable<User> {
    const url = `${this.baseURL}/api/users/${id}`;
    return this._httpClient.get<User>(url);
  }

  public updateUser(disease: User): Observable<any> {
    const url = `${this.baseURL}/api/users/${disease.id}`;
    return this._httpClient.put(url, disease);
  }

  public addUser(disease: User): Observable<User> {
    return this._httpClient.post<User>(`${this.baseURL}/api/users`, disease);
  }

  deleteUser(id: number): Observable<User> {
    const url = `${this.baseURL}/api/users/${id}`;
    return this._httpClient.delete<User>(url);
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this._httpClient.get<User[]>(`${this.baseURL}/api/users/?name=${term}`);
  }
}
