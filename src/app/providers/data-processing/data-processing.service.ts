import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataProcessingService {
  private dataUrl = 'assets/utility/playlist.json'; 

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }
}
