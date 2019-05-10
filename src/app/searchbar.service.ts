import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {

  language: string = 'English';

  constructor(private route: ActivatedRoute) {
  }

  updateLanguage(newLang: string) {
    this.language = newLang;
  }
}
