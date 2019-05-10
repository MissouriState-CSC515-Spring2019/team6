import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  JSONData: Object;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  fetchData(): Observable<any> {
    return this.http.get(
      'https://api.nasa.gov/planetary/apod?api_key=NlnBAlXVNVNpgM96XeUvFI01joSnWJ8pZ3UUAK5G'
    );
  }
}

