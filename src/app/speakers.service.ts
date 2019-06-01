import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Speaker {
  fullname: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {

  constructor(private http: HttpClient) { }

  getSpeakers(): Observable<Speaker[]> {
    return this.http.get<Speaker[]>('http://localhost:4200/api/speakers');
  }
}
