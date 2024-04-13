import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from './model/song';

@Injectable({
  providedIn: 'root',
})
export class ApiRepoService {
  private urlBase = 'http://localhost:3000/songs';

  constructor(private http: HttpClient) {}

  getData(): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.urlBase}`);
  }
}
