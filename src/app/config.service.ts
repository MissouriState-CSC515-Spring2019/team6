import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  selectedLanguage: string = "English";

  constructor() { }

  changeLanguage(lang: string) {
    this.selectedLanguage = lang;
    console.log('changed language to' + lang);
  }

}
