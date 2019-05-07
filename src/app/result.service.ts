import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  JSONData: Object;

  constructor(private http: HttpClient) { }

  updateData(url: string) {
    this.http.get('https://api.duckduckgo.com/?q=' + url + '&format=json&pretty=1')
      .subscribe(data => {
        this.JSONData = data;
      });
  }
}
