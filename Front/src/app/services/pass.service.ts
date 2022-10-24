import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import { Pass } from '../Models/pass';

@Injectable({
  providedIn: 'root'
})
export class PassService {

  readonly baseURL = 'https://minicoreudla202310camh.onrender.com';

  constructor(private httpClient: HttpClient) {
  }

  public getPasses(): Observable<Pass[]> {
    const url = this.baseURL;
    return this.httpClient.get<Pass[]>(`${url}/api/passes`);
  }

  public getPass(id: any): Observable<Pass> {
    const url = `${this.baseURL}/api/passes/${id}`;
    return this.httpClient.get<Pass>(url);
  }

  public updatePass(disease: Pass): Observable<any> {
    const url = `${this.baseURL}/api/passes/${disease._id}`;
    return this.httpClient.put(url, disease);
  }

  public addPass(disease: Pass): Observable<Pass> {
    return this.httpClient.post<Pass>(`${this.baseURL}/api/passes`, disease);
  }

  deletePass(id: number): Observable<Pass> {
    const url = `${this.baseURL}/api/passes/${id}`;
    return this.httpClient.delete<Pass>(url);
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Pass[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.httpClient.get<Pass[]>(`${this.baseURL}/api/passes/?name=${term}`);
  }
}
